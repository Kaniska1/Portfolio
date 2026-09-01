'use client'

import { motion } from 'motion/react'
import {
  Code2,
  Trophy,
  Braces,
  Award,
  ArrowUpRight,
} from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <SectionHeading
        index="01"
        eyebrow="A little about me"
        title="Beyond the code."
      />

      <Reveal>
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* -------------------------------------------------------------- */}
          {/* Intro                                                          */}
          {/* -------------------------------------------------------------- */}

          <BentoCard
            className="min-h-[310px] bg-[#ca0000] text-[#06150c] md:col-span-2"
            delay={0}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardLabel dark>01 / WHO I AM</CardLabel>

                <Code2 className="size-6 opacity-60" />
              </div>

              <div className="max-w-3xl py-8 md:py-12">
                <h3 className="max-w-2xl text-3xl font-black tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  I build things that live somewhere between an idea and
                  “wait, this actually works.”
                </h3>

                <p className="mt-6 max-w-2xl text-sm font-medium leading-7 opacity-75 sm:text-base">
                  I&apos;m Kaniska Mitra, a Computer Science Engineering
                  student at Techno Main Salt Lake. I enjoy building full-stack
                  products, experimenting with AI, solving problems and turning
                  slightly overambitious ideas into actual software.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold">
                Full Stack
                <span className="opacity-40">/</span>
                AI
                <span className="opacity-40">/</span>
                Product Engineering
              </div>
            </div>
          </BentoCard>

          {/* -------------------------------------------------------------- */}
          {/* MLH Winner                                                     */}
          {/* -------------------------------------------------------------- */}

          <BentoCard
            className="min-h-[310px] bg-[#730303] text-[#fff7ed]"
            delay={0.08}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardLabel>02 / WIN</CardLabel>

                <Award className="size-6 text-red-200/70" />
              </div>

              <div>
                <p className="text-[5.5rem] font-black leading-none tracking-[-0.08em] sm:text-[6.5rem]">
                  1
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight">
                  MLH Hackathon
                  <br />
                  Winner.
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-red-100/60">
                  One hackathon win — and hopefully not the last.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-100/50">
                Keep shipping
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>
          </BentoCard>

          {/* -------------------------------------------------------------- */}
          {/* LeetCode                                                       */}
          {/* -------------------------------------------------------------- */}

          <BentoCard
            className="min-h-[260px] bg-[#201d1d] text-[#fceded]"
            delay={0.16}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardLabel dark>03 / DSA</CardLabel>

                <Braces className="size-6 opacity-50" />
              </div>

              <div>
                <div className="flex items-end gap-1">
                  <p className="text-[4.5rem] font-black leading-none tracking-[-0.07em] sm:text-[5.5rem]">
                    100
                  </p>

                  <span className="mb-2 text-3xl font-black text-[#ff1010]">
                    +
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  LeetCode problems solved
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 opacity-55">
                  Building consistency in data structures, algorithms and
                  problem solving — one wrong answer at a time.
                </p>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '72%' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: 'easeOut',
                  }}
                  className="h-full rounded-full bg-[#ff1010]"
                />
              </div>
            </div>
          </BentoCard>

          {/* -------------------------------------------------------------- */}
          {/* Hackathon finalist                                             */}
          {/* -------------------------------------------------------------- */}

          <BentoCard
            className="min-h-[260px] bg-[#ab2024] text-[#fff8ee] md:col-span-2"
            delay={0.24}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <CardLabel>04 / HACKATHONS</CardLabel>

                <Trophy className="size-6 text-red-100/70" />
              </div>

              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <div className="flex items-end gap-3">
                    <p className="text-[5rem] font-black leading-none tracking-[-0.08em] sm:text-[6rem]">
                      4×
                    </p>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Hackathon Finalist
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-6 text-red-50/65 md:text-right">
                  Building under deadlines taught me how to scope ideas,
                  collaborate fast, make decisions with imperfect information
                  and actually ship before someone yells “submission closes in
                  five minutes.”
                </p>
              </div>

              <div className="flex gap-2">
                <MiniTag>Hack4Bengal</MiniTag>
                <MiniTag>Smart Bengal</MiniTag>
                <MiniTag>StatusCode</MiniTag>
                <MiniTag>+1</MiniTag>
              </div>
            </div>
          </BentoCard>
        </div>
      </Reveal>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Card                                      */
/* -------------------------------------------------------------------------- */

function BentoCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className={cn(
        'relative overflow-hidden rounded-[22px] p-6 transition-shadow duration-300 sm:p-8',
        className
      )}
    >
      {/* Subtle grain/detail instead of image */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:13px_13px]" />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Label                                     */
/* -------------------------------------------------------------------------- */

function CardLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <span
      className={cn(
        'font-mono text-[10px] font-semibold tracking-[0.18em]',
        dark ? 'text-black/45' : 'text-white/45'
      )}
    >
      {children}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Tag                                       */
/* -------------------------------------------------------------------------- */

function MiniTag({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold text-white/65 backdrop-blur-sm">
      {children}
    </span>
  )
}