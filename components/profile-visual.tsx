'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import {
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Sparkles,
} from 'lucide-react'
import { profile } from '@/lib/content'

const nodes = [
  { icon: Code2, label: 'build', className: '-left-5 top-16' },
  { icon: Database, label: 'data', className: '-right-4 top-28' },
  { icon: GitBranch, label: 'ship', className: 'left-2 bottom-20' },
  { icon: Cpu, label: 'think', className: 'right-0 bottom-14' },
]

type ProfileVisualProps = {
  compact?: boolean
  imageSrc?: string
  imageAlt?: string
}

export function ProfileVisual({
  compact = false,
  imageSrc = profile.heroPhoto,
  imageAlt = `${profile.name} portrait`,
}: ProfileVisualProps) {
  return (
    <div
      className={`relative mx-auto ${
        compact ? 'max-w-sm' : 'max-w-lg'
      }`}
    >
      <div className="absolute inset-10 rounded-full bg-primary/20 blur-3xl" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 34,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        className="absolute inset-2 rounded-[2.75rem] border border-dashed border-primary/30"
      />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-card/70 p-3 shadow-[0_30px_100px_oklch(0_0_0_/_0.6)] backdrop-blur-xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,oklch(0.55_0.215_24_/_0.24),transparent_40%),linear-gradient(145deg,oklch(0.19_0.01_20),oklch(0.11_0.004_20))]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={!compact}
            sizes={
              compact
                ? '(max-width: 768px) 90vw, 384px'
                : '(max-width: 768px) 90vw, 512px'
            }
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: {
              delay: 0.5 + index * 0.1,
            },
            scale: {
              delay: 0.5 + index * 0.1,
            },
            y: {
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            },
          }}
          className={`absolute hidden items-center gap-2 rounded-full border border-white/10 bg-card/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground shadow-xl backdrop-blur-xl sm:flex ${node.className}`}
        >
          <node.icon className="size-3.5 text-primary" />
          {node.label}
        </motion.div>
      ))}

      <div className="absolute -right-5 -top-5 rounded-2xl border border-primary/30 bg-primary/10 p-3 backdrop-blur">
        <Sparkles className="size-5 text-primary" />
      </div>
    </div>
  )
}

