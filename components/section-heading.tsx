import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  index,
  eyebrow,
  title,
  className,
}: {
  index: string
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <Reveal className={cn('mb-12 md:mb-16', className)}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary/50" />
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
