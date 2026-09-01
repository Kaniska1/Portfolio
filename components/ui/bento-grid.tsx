import { cn } from '@/lib/utils'
import React from 'react'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group/bento relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950/70 p-4 shadow-input backdrop-blur-sm transition duration-200 hover:border-red-500/20 hover:shadow-[0_0_40px_rgba(239,68,68,0.05)]',
        className
      )}
    >
      {header}

      <div className="relative z-10 transition duration-200 group-hover/bento:translate-x-1">
        {icon && <div className="mb-2">{icon}</div>}

        <div className="mb-2 font-sans text-base font-semibold text-neutral-100">
          {title}
        </div>

        <div className="font-sans text-sm font-normal leading-relaxed text-neutral-500">
          {description}
        </div>
      </div>
    </div>
  )
}