'use client'

import { motion } from 'motion/react'

/** Page-wide, low-opacity premium background: grid, radial vignette, circuit traces. */
export function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base vignette */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, oklch(0.55 0.215 24 / 0.14), transparent 60%)',
        }}
      />
      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(circle at 50% 30%, black, transparent 80%)',
        }}
      />
      {/* subtle grain */}
      <div className="grain absolute inset-0 opacity-40" />

      {/* circuit traces */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="oklch(0.62 0.23 26)" strokeWidth="1" fill="none">
          <path d="M-10 140 H220 V40" />
          <path d="M120 -10 V90 H320" />
          <path d="M100% 200 h-260 v120" transform="translate(0,0)" />
        </g>
      </svg>

      {/* floating red orbs */}
      <motion.div
        className="absolute right-[8%] top-[18%] h-40 w-40 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[6%] top-[60%] h-52 w-52 rounded-full bg-primary/[0.07] blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
    </div>
  )
}
