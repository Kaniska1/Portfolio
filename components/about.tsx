'use client'

import { motion } from 'motion/react'
import { ProfileVisual } from '@/components/profile-visual'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { stats } from '@/lib/content'

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading
        index="01"
        eyebrow="Beyond the résumé"
        title="About Me"
      />

      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Computer Science Engineering student at{' '}
              <span className="text-foreground">Techno Main Salt Lake</span>,
              interested in software engineering, product development, and the
              craft of making technology feel clear rather than intimidating.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              My work sits across code, design, and communication. I&apos;ve
              built hackathon products under pressure, led teams and
              communities, pitched ideas on stage, and designed interfaces that
              try very hard not to look like they were assembled by a
              caffeine-powered template generator.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              I&apos;m currently sharpening my DSA, backend engineering,
              full-stack architecture, and system design skills while building
              projects that solve real problems and tell a strong product story.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.06 * index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
                >
                  <div className="text-glow text-3xl font-semibold text-primary">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="order-first md:order-last">
          <ProfileVisual
            compact
            imageSrc="/coder.jpeg"
            imageAlt="Kaniska Mitra"
          />
        </Reveal>
      </div>
    </section>
  )
}