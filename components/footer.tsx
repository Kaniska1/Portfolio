import { profile } from '@/lib/content'

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.2em]">
          With great power comes great responsibility.
        </p>
      </div>
    </footer>
  )
}
