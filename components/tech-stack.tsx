'use client'

import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { techStack } from '@/lib/content'

export function TechStack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="03" eyebrow="Technologies and tools" title="Tech Stack" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {techStack.map((tech, index) => (
          <Reveal key={tech.name} delay={(index % 6) * 0.04}>
            <motion.div whileHover={{ y: -6 }} className="group relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40">
              <div className="absolute inset-x-0 -top-16 h-32 bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex h-full flex-col justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{tech.group}</span><div><h3 className="font-semibold text-foreground">{tech.name}</h3><p className="mt-1 max-h-0 overflow-hidden text-xs leading-snug text-muted-foreground opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100">{tech.note}</p></div></div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
