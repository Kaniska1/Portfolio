'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { BookOpen, BrainCircuit, GraduationCap, Network } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/content'

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
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="flex items-center gap-3"><div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"><GraduationCap className="size-5" /></div><div><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">CS foundation</p><h3 className="font-semibold">Learning map</h3></div></div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {subjects.map((subject, index) => <div key={subject} className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-sm text-muted-foreground"><span className="mr-2 font-mono text-[10px] text-primary">0{index + 1}</span>{subject}</div>)}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[{ icon: BookOpen, label: 'Learn' }, { icon: BrainCircuit, label: 'Build' }, { icon: Network, label: 'Connect' }].map(({ icon: Icon, label }) => <div key={label} className="rounded-xl border border-white/10 p-3"><Icon className="mx-auto size-4 text-primary" /><p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p></div>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
