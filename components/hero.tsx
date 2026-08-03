'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
} from '@/components/brand-icons'
import { ProfileVisual } from '@/components/profile-visual'
import { Magnetic } from '@/components/magnetic'
import { profile } from '@/lib/content'

function useTyping(words: string[]) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]

    const timeout = setTimeout(
      () => {
        const next = deleting
          ? word.slice(0, text.length - 1)
          : word.slice(0, text.length + 1)

        setText(next)

        if (!deleting && next === word) {
          setTimeout(() => setDeleting(true), 1300)
        } else if (deleting && next === '') {
          setDeleting(false)
          setI((value) => value + 1)
        }
      },
      deleting ? 40 : 75,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, i, words])

  return text
}

export function Hero() {
  const typed = useTyping(profile.typing)

  const socials = [
    {
      icon: GithubIcon,
      href: profile.socials.github,
      label: 'GitHub',
    },
    {
      icon: LinkedinIcon,
      href: profile.socials.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: LeetcodeIcon,
      href: profile.socials.leetcode,
      label: 'LeetCode',
    },
  ]

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pb-20 pt-32 md:grid-cols-[1.08fr_0.92fr] md:gap-10"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>

          Open to internships, collaborations, and ambitious builds
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-7 font-mono text-sm uppercase tracking-[0.32em] text-primary"
        >
          {profile.college} · {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-balance text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl"
        >
          I&apos;m{' '}
          <span className="text-glow text-primary">{profile.name}</span>.
          <br />
        </motion.h1>

        <div className="mt-5 flex h-8 items-center font-mono text-base text-muted-foreground sm:text-lg">
          <span className="text-foreground">{typed}</span>
          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-primary" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href={profile.resume}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_28px_oklch(0.55_0.215_24_/_0.5)] transition-transform hover:scale-[1.02]"
            >
              <Download className="size-4" />
              Download résumé
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
            >
              View projects
              <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-7 flex items-center gap-2"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-card/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProfileVisual
          imageSrc="/profile.jpeg"
          imageAlt="Kaniska Mitra"
        />
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex"
      >
        Explore
        <ArrowDown className="size-3" />
      </a>
    </section>
  )
}