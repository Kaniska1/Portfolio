'use client'

import { motion } from 'motion/react'
import { Code2, Palette, Speech, TerminalSquare } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/lib/content'

const icons = [TerminalSquare, Code2, Palette, Speech]

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="02" eyebrow="What I bring" title="Skills" />
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((skill, index) => {
          const Icon = icons[index]
          return (
            <Reveal key={skill.title} delay={(index % 2) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group relative min-h-64 overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-7 backdrop-blur transition-colors hover:border-primary/40"
              >
                <div className="absolute -right-8 -top-8 font-mono text-8xl font-semibold text-white/[0.025] transition-colors group-hover:text-primary/[0.06]">
                  {skill.code}
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{skill.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{skill.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
