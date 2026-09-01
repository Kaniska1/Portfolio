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

    </div>
  )
}

