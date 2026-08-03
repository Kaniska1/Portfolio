'use client'

import { motion } from 'motion/react'
import { Trophy, Award, Code2, Brain, GitPullRequest, Users, Mic2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { achievements } from '@/lib/content'

const icons = {
  trophy: Trophy,
  award: Award,
  code: Code2,
  brain: Brain,
  git: GitPullRequest,
  users: Users,
  mic: Mic2,
} as const

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="06" eyebrow="Wins & recognition" title="Achievements" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[a.icon as keyof typeof icons]
          return (
            <Reveal key={a.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
              >
                <div className="absolute -right-8 -top-8 size-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium leading-snug text-foreground">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.meta}</p>
                </div>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
