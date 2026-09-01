'use client'

import { useState } from 'react'
import {
  BrainCircuit,
  Code2,
  GraduationCap,
  Mail,
  RotateCcw,
  Terminal,
} from 'lucide-react'


export function EducationCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="relative flex min-h-[580px] w-full items-center justify-center lg:min-h-[640px]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/[0.09] blur-[120px]" />

      {/* Background grid */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.13]
          [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
          [background-size:38px_38px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]
        "
      />

      {/* Small UI labels */}
      <div className="pointer-events-none absolute left-3 top-12 hidden font-mono text-[8px] uppercase tracking-[0.28em] text-white/20 xl:block">
        Student / Developer ID
      </div>

      <div className="pointer-events-none absolute bottom-12 right-3 hidden text-right font-mono text-[8px] uppercase leading-5 tracking-[0.2em] text-white/20 xl:block">
        Hover to rotate
        <br />
        Click to lock
      </div>

      {/* Card */}
      <button
        type="button"
        aria-label="Flip student developer card"
        onClick={() => setFlipped((current) => !current)}
        className="
          group relative h-[500px] w-[320px]
          cursor-pointer appearance-none border-0 bg-transparent p-0
          text-left outline-none
          [perspective:1600px]
          sm:h-[540px] sm:w-[346px]
        "
      >
        <div
          className={`
            relative h-full w-full
            transition-transform duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            [transform-style:preserve-3d]
            ${
              flipped
                ? '[transform:rotateY(180deg)]'
                : 'group-hover:[transform:rotateY(180deg)]'
            }
          `}
        >
          <CardFront />
          <CardBack />
        </div>
      </button>

      {/* Flip hint */}
      <div
        className="
          pointer-events-none absolute bottom-3 left-1/2
          flex -translate-x-1/2 items-center gap-2
          font-mono text-[9px] uppercase tracking-[0.18em]
          text-white/25
        "
      >
        <RotateCcw className="size-3" />
        Flip card
      </div>
    </div>
  )
}

function CardFront() {
  return (
    <div
      className="
        absolute inset-0 overflow-hidden rounded-[26px]
        border border-white/[0.12]
        bg-[#080808]
        shadow-[0_35px_100px_rgba(80,0,0,0.35),0_10px_35px_rgba(0,0,0,0.8)]
        [backface-visibility:hidden]
      "
    >
      <CardNoise />

      {/* top gloss */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/[0.055] to-transparent" />

      {/* top-left diagonal detail */}
      <div
        className="
          pointer-events-none absolute -left-20 -top-16
          h-48 w-56 rotate-[20deg]
          border-r border-white/[0.04]
          bg-white/[0.025]
        "
      />

      {/* red left rail */}
      <div className="absolute bottom-0 left-0 top-[115px] w-[54px] overflow-hidden bg-[#8f0b10]">
        <div className="absolute -left-9 top-14 h-20 w-28 rotate-45 bg-[#c51d24]" />
        <div className="absolute -left-12 top-44 h-20 w-28 -rotate-45 bg-black/45" />
        <div className="absolute -left-10 top-64 h-20 w-28 rotate-45 bg-[#d11e25]" />
        <div className="absolute left-[51px] top-0 h-full w-px bg-red-300/40" />
      </div>

      {/* upper logo */}
      <div className="absolute left-[72px] top-[72px] flex items-center">
        <div className="relative flex size-11 items-center justify-center">
          <span className="absolute left-0 top-0 h-8 w-3 bg-[#e12229]" />
          <span className="absolute left-2 top-0 h-3 w-7 bg-[#c5181f]" />
          <span className="absolute left-[18px] top-[9px] h-8 w-3 -rotate-45 bg-[#841015]" />
          <span className="absolute right-0 top-0 h-8 w-3 bg-[#e12229]" />
        </div>
      </div>

      {/* id */}
      <div className="absolute right-7 top-[79px] font-mono text-[10px] tracking-[0.16em]">
        <span className="text-red-500">ID:</span>{' '}
        <span className="text-white/70">KM1201</span>
      </div>

      {/* main name */}
      <div className="absolute left-[78px] right-7 top-[175px]">
        <p
          className="
            text-[39px] font-black leading-[0.9]
            tracking-[-0.055em] text-white
            sm:text-[43px]
          "
        >
          KANISKA
        </p>

        <p
          className="
            mt-3 text-[39px] font-black leading-[0.9]
            tracking-[-0.055em] text-[#c81d24]
            sm:text-[43px]
          "
        >
          MITRA
        </p>

        <div className="mt-7 h-px w-full bg-gradient-to-r from-red-600 via-red-700/50 to-transparent" />

        <p
          className="
            mt-5 font-mono text-[10px] uppercase
            leading-7 tracking-[0.12em] text-white/90
          "
        >
          Computer Science Engineering
        </p>
      </div>

      {/* university */}
      <div
        className="
          absolute bottom-[105px] left-[77px] right-6
          flex items-center gap-4
          border-y border-white/[0.08] py-4
        "
      >
        <div
          className="
            flex size-[52px] shrink-0 items-center justify-center
            rounded-md border border-white/10 bg-white/[0.02]
          "
        >
          <GraduationCap className="size-7 text-[#d51d24]" strokeWidth={1.7} />
        </div>

        <div>
          <p className="font-mono text-[13px] leading-5 text-white/85">
            Techno Main
            <br />
            Salt Lake
          </p>

          <p className="mt-1 font-mono text-[11px] tracking-[0.08em] text-red-500">
            2023 — 2027
          </p>
        </div>
      </div>

      {/* footer badge */}
      <div
        className="
          absolute bottom-6 left-[77px] right-6
          flex items-center gap-3 rounded-lg
          border border-white/[0.1] bg-white/[0.025]
          px-3 py-2.5
        "
      >
        <div className="flex size-9 shrink-0 items-center justify-center border-r border-red-600/40 pr-3">
          <Code2 className="size-5 text-red-500" />
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-white">
            KM / CSE
          </p>

          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-red-500">
            Student / Developer
          </p>
        </div>
      </div>

      {/* bottom red accent */}
      <div className="absolute bottom-0 left-0 h-[7px] w-full bg-gradient-to-r from-red-800 via-[#db2027] to-red-950" />

      <CornerStripes />
    </div>
  )
}

function CardBack() {
  return (
    <div
      className="
        absolute inset-0 overflow-hidden rounded-[26px]
        border border-white/[0.12]
        bg-[#080808]
        shadow-[0_35px_100px_rgba(80,0,0,0.35),0_10px_35px_rgba(0,0,0,0.8)]
        [backface-visibility:hidden]
        [transform:rotateY(180deg)]
      "
    >
      <CardNoise />

      {/* red top-right rail */}
      <div className="absolute right-0 top-0 h-[155px] w-[42px] bg-gradient-to-b from-[#d5272d] to-[#7c080c]" />

      <div className="absolute right-[14px] top-8 space-y-1">
        {[0, 1, 2].map((line) => (
          <div
            key={line}
            className="h-[3px] w-6 -rotate-45 bg-black/80"
          />
        ))}
      </div>

      {/* decoration */}
      <div className="absolute left-7 top-[68px] flex gap-1">
        {[0, 1, 2, 3].map((bar) => (
          <div
            key={bar}
            className="h-[5px] w-[14px] -skew-x-[35deg] bg-red-600"
          />
        ))}
      </div>

      {/* header */}
      <div className="absolute left-7 right-7 top-[104px] text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-red-500">
          Build • Learn • Innovate
        </p>

        <div className="mx-auto mt-4 h-px w-32 bg-red-600/70" />

        <h3
          className="
            mt-8 text-[21px] font-bold uppercase
            tracking-[0.16em] text-white
          "
        >
          Developer / Student
        </h3>
      </div>

      {/* skill blocks */}
      <div className="absolute left-5 right-5 top-[205px] grid grid-cols-3">
        <BackSkill
          icon={<Code2 className="size-5" />}
          line1="Full Stack"
          line2="Developer"
        />

        <BackSkill
          icon={<BrainCircuit className="size-5" />}
          line1="AI &"
          line2="Machine Learning"
          bordered
        />

        <BackSkill
          icon={<Terminal className="size-5" />}
          line1="Software"
          line2="Engineering"
        />
      </div>

    

      {/* contacts */}
      <div className="absolute bottom-[48px] left-7 right-7 space-y-3">
        <ContactRow
          icon={<GitHubIcon className="size-4" />}
          text="github.com/Kaniska1"
        />

        <ContactRow
          icon={<LinkedInIcon className="size-4" />}
          text="linkedin.com/in/kaniskamitra"
        />

        <ContactRow
          icon={<Mail className="size-4" />}
          text="kaniska.mitra@gmail.com"
        />
      </div>

      {/* circuit decoration */}
      <div className="pointer-events-none absolute bottom-[80px] right-[-28px] h-[130px] w-[130px] opacity-[0.08]">
        <div className="absolute right-8 top-0 h-full w-px bg-red-400" />
        <div className="absolute right-12 top-10 h-px w-16 bg-red-400" />
        <div className="absolute right-6 top-20 h-px w-20 bg-red-400" />
        <div className="absolute right-16 top-8 size-1.5 rounded-full border border-red-400" />
        <div className="absolute right-5 top-[76px] size-1.5 rounded-full border border-red-400" />
      </div>

      {/* footer stripe */}
      <div className="absolute bottom-0 left-0 h-5 w-full bg-gradient-to-r from-red-950 via-[#b31319] to-[#dd2a30]" />

      <CornerStripes />
    </div>
  )
}

function BackSkill({
  icon,
  line1,
  line2,
  bordered = false,
}: {
  icon: React.ReactNode
  line1: string
  line2: string
  bordered?: boolean
}) {
  return (
    <div
      className={`
        flex flex-col items-center px-2 text-center
        ${bordered ? 'border-x border-white/[0.08]' : ''}
      `}
    >
      <div
        className="
          flex size-11 items-center justify-center
          rounded-lg border border-white/[0.11]
          bg-white/[0.025] text-red-500
        "
      >
        {icon}
      </div>

      <p className="mt-3 font-mono text-[8px] uppercase leading-4 tracking-[0.08em] text-white/75">
        {line1}
        <br />
        {line2}
      </p>
    </div>
  )
}

function ContactRow({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div className="flex items-center gap-3 border-b border-white/[0.08] pb-2.5">
      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#a31117] text-white">
        {icon}
      </div>

      <span className="min-w-0 truncate font-mono text-[9px] tracking-[0.02em] text-white/75">
        {text}
      </span>
    </div>
  )
}

function CardNoise() {
  return (
    <>
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.18]
          [background-image:radial-gradient(rgba(255,255,255,0.12)_0.55px,transparent_0.55px)]
          [background-size:5px_5px]
        "
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.035),transparent_42%)]" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.025] via-transparent to-red-950/[0.08]" />
    </>
  )
}

function CornerStripes() {
  return (
    <>
      <div className="pointer-events-none absolute bottom-4 left-20 flex gap-1.5 opacity-80">
        {[0, 1, 2, 3].map((bar) => (
          <div
            key={bar}
            className="h-[5px] w-[20px] skew-x-[40deg] bg-black"
          />
        ))}
      </div>

      <div
        className="
          pointer-events-none absolute bottom-[1px] right-0
          h-[26px] w-24
          border-t border-red-300/20
          bg-red-700/30
          [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]
        "
      />
    </>
  )
}


function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M5.34 3.5A2.34 2.34 0 1 1 5.33 8.18 2.34 2.34 0 0 1 5.34 3.5ZM3.32 9.9h4.03V20.5H3.32V9.9Zm6.54 0h3.86v1.45h.05c.54-1.02 1.85-2.1 3.82-2.1 4.09 0 4.84 2.69 4.84 6.19v5.06h-4.02v-4.48c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.17-1.72 2.37v4.56h-4.02V9.9Z" />
    </svg>
  )
}