'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { BookOpen, BrainCircuit, GraduationCap, Network, Code2, Cpu, Database } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/content'
import { EducationCard } from '@/components/education-card'


const subjects = ['DSA', 'DBMS', 'OS', 'Networks', 'Software Engineering', 'IoT', 'AI', 'Cryptography']

export function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="05" eyebrow="My academic journey" title="Education" />
      <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-start md:gap-16">
        <div ref={ref} className="relative pl-10">
          <div className="absolute bottom-2 left-3 top-2 w-px bg-white/10" />
          <motion.div style={{ scaleY, transformOrigin: 'top' }} className="absolute bottom-2 left-3 top-2 w-px bg-primary shadow-[0_0_12px_2px_oklch(0.55_0.215_24_/_0.7)]" />
          <div className="flex flex-col gap-10">
            {education.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="relative">
                  <span className="absolute -left-[34px] top-1 flex size-4 items-center justify-center rounded-full border border-primary/50 bg-background"><span className="size-2 rounded-full bg-primary shadow-[0_0_8px_2px_oklch(0.55_0.215_24_/_0.8)]" /></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">{item.period}</span>
                  <h3 className="mt-1.5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground/80">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <EducationCard />
        </Reveal>
      </div>
    </section>
  )
}

function EducationLanyard() {
  return (
    <div
      className="
        relative
        hidden
        h-[600px]
        w-full
        lg:block
      "
    >
      {/* subtle red glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-700/[0.08]
          blur-[100px]
        "
      />

      {/* technical label */}
      <div
        className="
          pointer-events-none
          absolute
          left-4
          top-10
          z-10
          font-mono
          text-[9px]
          uppercase
          tracking-[0.24em]
          text-white/20
        "
      >
        Student / Developer ID
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-12
          right-2
          z-10
          text-right
          font-mono
          text-[8px]
          uppercase
          leading-5
          tracking-[0.18em]
          text-white/20
        "
      >
        Drag to interact
        <br />
        Physics enabled
      </div>

    </div>
  )
}
