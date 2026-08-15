'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Send, Check, Loader2, AlertCircle } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
} from '@/components/brand-icons'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/content'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setError('Please fill in all fields.')
      return
    }

    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(
          data?.error || 'Unable to send your message. Please try again.'
        )
      }

      setStatus('success')
      setForm({
        name: '',
        email: '',
        message: '',
      })

      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    } catch (err) {
      console.error('Contact form error:', err)

      setStatus('error')
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    }
  }

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

  const isSubmitting = status === 'loading'
  const isSuccess = status === 'success'

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading
        index="07"
        eyebrow="Let's build something"
        title="Contact"
      />

      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
        <Reveal>
          <div>
            <p className="max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">
              Have an opportunity, collaboration, hackathon idea, or an
              interesting product in mind? Drop me a message and I&apos;ll get
              back to you.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4 text-primary" />
              {profile.email}
            </a>

            <div className="mt-8 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-card/60 text-muted-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur md:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative grid gap-5">
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Name
                </label>

                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Your name"
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Email
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="you@example.com"
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>

                <Textarea
                  id="message"
                  name="message"
                  required
                  disabled={isSubmitting}
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  placeholder="Tell me what you have in mind..."
                  className="min-h-32 resize-none rounded-xl"
                />
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-center gap-2 text-sm text-destructive"
                >
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {isSuccess && (
                <div
                  role="status"
                  className="flex items-center gap-2 text-sm text-emerald-500"
                >
                  <Check className="size-4 shrink-0" />
                  <span>
                    Message sent successfully. I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileHover={
                  !isSubmitting && !isSuccess
                    ? {
                        scale: 1.01,
                      }
                    : undefined
                }
                whileTap={
                  !isSubmitting && !isSuccess
                    ? {
                        scale: 0.98,
                      }
                    : undefined
                }
                className="mt-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_24px_oklch(0.55_0.215_24_/_0.45)] transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="size-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-muted-foreground">
                Your message will be sent directly to my inbox.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}