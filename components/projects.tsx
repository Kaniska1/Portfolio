'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects, type Project } from '@/lib/content'
import { cn } from '@/lib/utils'

function Preview({ accent }: { accent: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-card to-background">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
      </div>
      <div className="flex h-[calc(100%-2.5rem)] items-center justify-center">
        <span className="font-mono text-6xl font-semibold text-primary/25">{accent}</span>
      </div>
      <div className="pointer-events-none absolute inset-x-6 bottom-4 space-y-2 opacity-40">
        <div className="h-2 w-3/4 rounded-full bg-white/10" />
        <div className="h-2 w-1/2 rounded-full bg-white/10" />
        <div className="h-2 w-2/3 rounded-full bg-primary/30" />
      </div>
    </div>
  )
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  function reset() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40',
        featured && 'md:col-span-2 md:flex-row md:p-6',
      )}
    >
      <div className={cn('h-48 shrink-0', featured ? 'md:h-auto md:w-1/2' : 'w-full')}>
        <Preview accent={project.accent} />
      </div>

      <div className={cn('flex flex-1 flex-col pt-5', featured && 'md:pl-8 md:pt-0')}>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">{project.tagline}</span>
          <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">{project.status}</span>
        </div>
        <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-6">
          {project.demo && <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Live Demo <ArrowUpRight className="size-4" />
          </a>}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <GithubIcon className="size-4" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="04" eyebrow="Selected work" title="Projects" />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} className={i === 0 ? 'md:col-span-2' : ''}>
            <ProjectCard project={p} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
