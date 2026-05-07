import { useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'

const TAU = 2 * Math.PI
const PARTICLE_COUNT = 700
const PROP_COUNT = 9
const PROPS_LENGTH = PARTICLE_COUNT * PROP_COUNT
const RANGE_Y = 100
const BASE_TTL = 50
const RANGE_TTL = 150
const BASE_SPEED = 0.1
const RANGE_SPEED = 2
const BASE_RADIUS = 1
const RANGE_RADIUS = 4
const BASE_HUE = 185
const RANGE_HUE = 40
const NOISE_STEPS = 8
const X_OFF = 0.00125
const Y_OFF = 0.00125
const Z_OFF = 0.0005
const BG_COLOR = 'hsla(215,50%,5%,1)'

const rand = (n: number) => Math.random() * n
const randRange = (n: number) => n - rand(2 * n)
const fadeInOut = (life: number, ttl: number) => {
  const half = 0.5 * ttl
  return life < half ? life / half : 1 - (life - half) / half
}
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export default function SwirlBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvasA = document.createElement('canvas')
    const canvasB = document.createElement('canvas')
    canvasB.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;'
    container.appendChild(canvasB)

    const ctxA = canvasA.getContext('2d')!
    const ctxB = canvasB.getContext('2d')!
    const center: number[] = []
    const noise3D = createNoise3D()
    const particleProps = new Float32Array(PROPS_LENGTH)
    let tick = 0
    let animId = 0

    function resize() {
      const { innerWidth, innerHeight } = window
      canvasA.width = innerWidth
      canvasA.height = innerHeight
      ctxA.drawImage(canvasB, 0, 0)
      canvasB.width = innerWidth
      canvasB.height = innerHeight
      ctxB.drawImage(canvasA, 0, 0)
      center[0] = 0.5 * innerWidth
      center[1] = 0.5 * innerHeight
    }

    function initParticle(i: number) {
      particleProps.set([
        rand(canvasA.width),
        center[1] + randRange(RANGE_Y),
        0, 0, 0,
        BASE_TTL + rand(RANGE_TTL),
        BASE_SPEED + rand(RANGE_SPEED),
        BASE_RADIUS + rand(RANGE_RADIUS),
        BASE_HUE + rand(RANGE_HUE),
      ], i)
    }

    function initParticles() {
      for (let i = 0; i < PROPS_LENGTH; i += PROP_COUNT) {
        initParticle(i)
      }
    }

    function drawParticle(x: number, y: number, x2: number, y2: number, life: number, ttl: number, radius: number, hue: number) {
      ctxA.save()
      ctxA.lineCap = 'round'
      ctxA.lineWidth = radius
      ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
      ctxA.beginPath()
      ctxA.moveTo(x, y)
      ctxA.lineTo(x2, y2)
      ctxA.stroke()
      ctxA.closePath()
      ctxA.restore()
    }

    function updateParticle(i: number) {
      const x = particleProps[i]
      const y = particleProps[i + 1]
      const n = noise3D(x * X_OFF, y * Y_OFF, tick * Z_OFF) * NOISE_STEPS * TAU
      const vx = lerp(particleProps[i + 2], Math.cos(n), 0.5)
      const vy = lerp(particleProps[i + 3], Math.sin(n), 0.5)
      const life = particleProps[i + 4]
      const ttl = particleProps[i + 5]
      const speed = particleProps[i + 6]
      const x2 = x + vx * speed
      const y2 = y + vy * speed
      const radius = particleProps[i + 7]
      const hue = particleProps[i + 8]

      drawParticle(x, y, x2, y2, life, ttl, radius, hue)

      particleProps[i] = x2
      particleProps[i + 1] = y2
      particleProps[i + 2] = vx
      particleProps[i + 3] = vy
      particleProps[i + 4] = life + 1

      const outOfBounds = x2 > canvasA.width || x2 < 0 || y2 > canvasA.height || y2 < 0
      if (outOfBounds || life + 1 > ttl) initParticle(i)
    }

    function draw() {
      tick++
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height)
      ctxB.fillStyle = BG_COLOR
      ctxB.fillRect(0, 0, canvasA.width, canvasA.height)

      for (let i = 0; i < PROPS_LENGTH; i += PROP_COUNT) {
        updateParticle(i)
      }

      ctxB.save()
      ctxB.filter = 'blur(8px) brightness(200%)'
      ctxB.globalCompositeOperation = 'lighter'
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()

      ctxB.save()
      ctxB.filter = 'blur(4px) brightness(200%)'
      ctxB.globalCompositeOperation = 'lighter'
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()

      ctxB.save()
      ctxB.globalCompositeOperation = 'lighter'
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()

      animId = window.requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      if (canvasB.parentNode) canvasB.parentNode.removeChild(canvasB)
    }
  }, [])

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} />
}
