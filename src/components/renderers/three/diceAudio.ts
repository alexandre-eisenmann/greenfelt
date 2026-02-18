/**
 * Procedural dice collision audio using the Web Audio API.
 *
 * Two sound profiles:
 *  - "table" : muffled thud (dice landing on felt/baize)
 *  - "dice"  : sharp clack  (dice hitting each other)
 *
 * Impact velocity modulates gain, pitch, and decay length so soft
 * taps are quiet/short and hard hits are loud/long.
 */

const MAX_VELOCITY = 18
const MIN_VELOCITY = 1.2
const COOLDOWN_MS = 28

export class DiceAudio {
  private ctx: AudioContext | null = null
  private masterGain: GainNode | null = null
  private lastPlayTime = 0

  private ensureContext(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext()
      this.masterGain = this.ctx.createGain()
      this.masterGain.gain.value = 0.55
      this.masterGain.connect(this.ctx.destination)
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume()
    }
    return this.ctx
  }

  /** Play an impact sound.  `velocity` is the relative impact speed. */
  playImpact(type: "table" | "dice", velocity: number): void {
    if (velocity < MIN_VELOCITY) return

    const now = performance.now()
    if (now - this.lastPlayTime < COOLDOWN_MS) return
    this.lastPlayTime = now

    const ctx = this.ensureContext()
    const master = this.masterGain!

    // 0 → 1 normalised intensity
    const t = Math.min((velocity - MIN_VELOCITY) / (MAX_VELOCITY - MIN_VELOCITY), 1)

    if (type === "table") {
      this.playTableHit(ctx, master, t)
    } else {
      this.playDiceHit(ctx, master, t)
    }
  }

  // ── table hit: filtered noise burst + low‑freq thump ──────────────
  private playTableHit(ctx: AudioContext, dest: AudioNode, t: number): void {
    const when = ctx.currentTime
    const gain = 0.18 + t * 0.42
    const decay = 0.04 + t * 0.06

    // noise burst through a low‑pass filter (felt muffling)
    const noiseDur = 0.02 + t * 0.03
    const noiseBuffer = this.createNoiseBuffer(ctx, noiseDur)
    const noiseSrc = ctx.createBufferSource()
    noiseSrc.buffer = noiseBuffer

    const lp = ctx.createBiquadFilter()
    lp.type = "lowpass"
    lp.frequency.setValueAtTime(800 + t * 1200, when)
    lp.Q.value = 0.7

    const noiseGain = ctx.createGain()
    noiseGain.gain.setValueAtTime(gain * 0.7, when)
    noiseGain.gain.exponentialRampToValueAtTime(0.001, when + decay)

    noiseSrc.connect(lp).connect(noiseGain).connect(dest)
    noiseSrc.start(when)
    noiseSrc.stop(when + decay + 0.01)

    // low‑frequency thump
    const osc = ctx.createOscillator()
    osc.type = "sine"
    osc.frequency.setValueAtTime(90 + t * 50, when)
    osc.frequency.exponentialRampToValueAtTime(40, when + decay)

    const oscGain = ctx.createGain()
    oscGain.gain.setValueAtTime(gain * 0.5, when)
    oscGain.gain.exponentialRampToValueAtTime(0.001, when + decay)

    osc.connect(oscGain).connect(dest)
    osc.start(when)
    osc.stop(when + decay + 0.01)
  }

  // ── dice hit: dry woody clack ──────────────────────────────────────
  private playDiceHit(ctx: AudioContext, dest: AudioNode, t: number): void {
    const when = ctx.currentTime
    const gain = 0.12 + t * 0.30
    const decay = 0.018 + t * 0.032

    // very short broadband transient (the initial "crack")
    const noiseDur = 0.005 + t * 0.008
    const noiseBuffer = this.createNoiseBuffer(ctx, noiseDur)
    const noiseSrc = ctx.createBufferSource()
    noiseSrc.buffer = noiseBuffer

    const hp = ctx.createBiquadFilter()
    hp.type = "highpass"
    hp.frequency.setValueAtTime(1200, when)
    hp.Q.value = 0.5

    const lp = ctx.createBiquadFilter()
    lp.type = "lowpass"
    lp.frequency.setValueAtTime(6000 + t * 2000, when)
    lp.Q.value = 0.6

    const noiseGain = ctx.createGain()
    noiseGain.gain.setValueAtTime(gain * 0.9, when)
    noiseGain.gain.exponentialRampToValueAtTime(0.001, when + decay * 0.6)

    noiseSrc.connect(hp).connect(lp).connect(noiseGain).connect(dest)
    noiseSrc.start(when)
    noiseSrc.stop(when + decay + 0.01)

    // short resonant knock — two detuned oscillators for body
    const freqA = 420 + t * 180
    const freqB = freqA * 1.47 // non-harmonic ratio for inharmonic "wood" feel
    for (const freq of [freqA, freqB]) {
      const osc = ctx.createOscillator()
      osc.type = "sine"
      osc.frequency.setValueAtTime(freq, when)
      osc.frequency.exponentialRampToValueAtTime(freq * 0.7, when + decay)

      const oscGain = ctx.createGain()
      oscGain.gain.setValueAtTime(gain * 0.18, when)
      oscGain.gain.exponentialRampToValueAtTime(0.001, when + decay * 0.8)

      osc.connect(oscGain).connect(dest)
      osc.start(when)
      osc.stop(when + decay + 0.01)
    }
  }

  // ── helpers ───────────────────────────────────────────────────────
  private createNoiseBuffer(ctx: AudioContext, duration: number): AudioBuffer {
    const length = Math.ceil(ctx.sampleRate * duration)
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1
    }
    return buffer
  }

  dispose(): void {
    if (this.ctx) {
      this.ctx.close()
      this.ctx = null
      this.masterGain = null
    }
  }
}
