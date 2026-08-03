'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Send, Check, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/content'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  const socials = [
    { icon: GithubIcon, href: profile.socials.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: profile.socials.linkedin, label: 'LinkedIn' },
    { icon: LeetcodeIcon, href: profile.socials.leetcode, label: 'LeetCode' },
  ]

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading index="07" eyebrow="Let's build something" title="Contact" />

      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
        <Reveal>
          <p className="max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a role, collaboration, hackathon idea, or an interesting product to build? Send me a message or reach out through my socials.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            {profile.email}
          </a>

          <div className="mt-8 flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
              >
                <s.icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur md:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="min-h-32 rounded-xl"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-primary">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileTap={{ scale: 0.98 }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_24px_oklch(0.55_0.215_24_/_0.45)] transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                {status === 'loading' && <Loader2 className="size-4 animate-spin" />}
                {status === 'success' && <Check className="size-4" />}
                {status === 'idle' || status === 'error' ? <Send className="size-4" /> : null}
                {status === 'success' ? 'Message Sent' : status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
