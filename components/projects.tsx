'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: 'Vigil',
    description:
      'An AI-native developer platform built around reusable agents and multi-agent workflows. Vigil can analyse GitHub pull requests, review code, detect bugs and orchestrate developer-focused AI capabilities through a unified interface.',
    image: '/projects/vigil.png',
    tags: [
      'Next.js',
      'TypeScript',
      'AI Agents',
      'PostgreSQL',
      'Prisma',
      'GitHub API',
    ],
    github: 'https://github.com/Kaniska1/vigil', // Add Vigil GitHub URL
    live: 'https://vigil-sdk.vercel.app/', // Add deployed URL if available
    featured: true,
    label: 'AI Developer Platform',
  },

  {
    title: 'MindSnap',
    description:
      'An AI-powered microlearning platform designed around short, focused learning sessions, interactive quizzes and contextual Q&A. Won 2nd prize at Hack4Bengal and 2nd prize in Civic Technologies track',
    image: '/projects/mindsnap.jpg',
    tags: [
      'Next.js',
      'React',
      'Gemini',
      'Tailwind',
      'AI Agents',
      'Machine Learning',
      'Web3',
    ],
    github: 'https://github.com/Kaniska1/MindSnap',
    live: '',
    featured: true,
    label: 'Hack4Bengal 2nd',
  },

  {
    title: 'Coordina',
    description:
      'A cutting-edge platform designed to revolutionize inter-departmental collaboration at the city level in Indian urban governance by enabling departments and agencies to share resources, coordinate project timelines, and resolve conflicts efficiently',
    image: '/projects/coordina.png',
    tags: [
      'Full Stack',
      'RAG',
      'Node.js',
      'Next.js',
      'JWT',
      'conflict resolution',
    ],
    github: 'https://github.com/Kaniska1/Coordina',
    live: '',
    featured: false,
    label: 'Product',
  },

  {
    title: 'Memento',

    /*
     * Replace ONLY the description and tags below
     * with the actual Memento details.
     */
    description:
      'A recent project focused on building a polished, useful product from idea to implementation. Add the final one-line description of Memento here.',

    image: '/projects/memento.png',

    tags: [
      'Machine Learning',
      'Recommendation Systems',
      'TMDB API',
      'Next.js',
    ],

    github: 'https://github.com/Kaniska1/memento', // Add Memento GitHub URL
    live: 'https://memento-sable.vercel.app/', // Add deployed URL if available

    featured: true,
    label: 'Featured Project',
  },

  {
    title: 'Stockify',
    description:
      'A stock-market management platform with authentication, portfolios, transactions, wallet handling, P&L tracking and market analytics.',
    image: '/projects/stockify.png',
    tags: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'JWT',
      'AI Agents',
    ],
    github: 'https://github.com/Kaniska1/Stockify',
    live: 'https://stockify-sm.vercel.app/',
    featured: false,
    label: 'FinTech',
  },
  {
    title: 'Valecta',
    description:
      'An AI-assisted hiring platform featuring resume matching, fake-certificate verification and intelligent audio interviews.',
    image: '/projects/valecta.jpg',
    tags: [
      'Next.js',
      'AI',
      'Flask',
      'Appwrite',
    ],
    github: 'https://github.com/Kaniska1/Valecta-StatusCode2',
    live: '',
    featured: false,
    label: 'Hackathon Finalist',
  },


  {
    title: 'SealiX',
    description:
      'A decentralized skill passport for verifiable credentials, intelligent skill extraction and portable student profiles.',
    image: '/projects/sealix.jpg',
    tags: [
      'Next.js',
      'TypeScript',
      'Web3',
      'Wagmi',
    ],
    github: 'https://github.com/Kaniska1/SealiX',
    live: '',
    featured: false,
    label: 'Hackathon Finalist',
  },

  

  {
    title: 'Youtube to Spotify Syncer',
    description:
      'A python automation tool to sync your YouTube playlists with your Spotify playlists.',
    image: '/projects/spotify.png',
    tags: [
      'Python',
      'Spotify API',
    ],
    github: 'https://github.com/Kaniska1/youtube-to-spotify',
    live: '',
    featured: false,
    label: 'Automation',
  },

  
]

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title="Things I've built."
      />

      <Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}

const projectBackThemes = [
  {
    background: 'bg-[#5a0000]',
    text: 'text-white',
    mutedText: 'text-white/75',
    subtleText: 'text-white/45',
    border: 'border-white/10',
    tag: 'border-white/15 bg-black/10 text-white/75',
    button:
      'border-white/20 bg-black/15 text-white hover:bg-white/10 hover:border-white/35',
    glow: 'bg-red-200/[0.08]',
    dots: 'opacity-[0.05]',
  },

  {
    background: 'bg-[#3a0000]',
    text: 'text-white',
    mutedText: 'text-white/75',
    subtleText: 'text-white/45',
    border: 'border-white/10',
    tag: 'border-white/15 bg-black/10 text-white/75',
    button:
      'border-white/20 bg-black/15 text-white hover:bg-white/10 hover:border-white/35',
    glow: 'bg-red-300/[0.07]',
    dots: 'opacity-[0.05]',
  },

  {
    background: 'bg-[#741317]',
    text: 'text-white',
    mutedText: 'text-white/80',
    subtleText: 'text-white/45',
    border: 'border-white/10',
    tag: 'border-white/15 bg-black/10 text-white/75',
    button:
      'border-white/20 bg-black/15 text-white hover:bg-white/10 hover:border-white/35',
    glow: 'bg-red-100/[0.07]',
    dots: 'opacity-[0.05]',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const theme = projectBackThemes[index % projectBackThemes.length]

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
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
        duration: 0.55,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        aspect-[16/10]
        w-full
        [perspective:1400px]
      "
    >
      {/* ================================================================ */}
      {/* FLIP CONTAINER                                                   */}
      {/* ================================================================ */}

      <div
        className="
          relative
          h-full
          w-full
          rounded-[22px]
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* ================================================================ */}
        {/* FRONT                                                           */}
        {/* ================================================================ */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[22px]
            border
            border-white/[0.08]
            bg-[#090909]
            shadow-[0_24px_70px_rgba(0,0,0,0.35)]
            [backface-visibility:hidden]

            group-hover:pointer-events-none
          "
        >
          {/* Screenshot */}
          <Image
            src={project.image}
            alt={`${project.title} landing page`}
            fill
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover
              object-top
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.025]
            "
          />

          {/* Overall image tint */}
          <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />

          {/* Bottom readability gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[70%]
              bg-gradient-to-t
              from-black
              via-black/55
              to-transparent
            "
          />

          {/* Top readability gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-24
              bg-gradient-to-b
              from-black/40
              to-transparent
            "
          />

          {/* Number */}
          <div
            className="
              absolute
              left-5
              top-5
              rounded-full
              border
              border-white/15
              bg-black/55
              px-3
              py-1.5
              font-mono
              text-[10px]
              text-white/70
              shadow-[0_5px_22px_rgba(0,0,0,0.65)]
              backdrop-blur-xl
            "
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Label */}
          <div
            className="
              absolute
              right-5
              top-5
              rounded-full
              border
              border-white/15
              bg-black/55
              px-3
              py-1.5
              font-mono
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-white/70
              shadow-[0_5px_22px_rgba(0,0,0,0.65)]
              backdrop-blur-xl
            "
          >
            {project.label}
          </div>

          {/* ============================================================ */}
          {/* FRONT TITLE + LINKS                                         */}
          {/* ============================================================ */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-20
              flex
              items-end
              justify-between
              gap-4
              p-6
              sm:p-7
            "
          >
            <div className="min-w-0">
              <p
                className="
                  mb-2
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-red-400
                  [text-shadow:0_3px_16px_rgba(0,0,0,1)]
                "
              >
                Project / {String(index + 1).padStart(2, '0')}
              </p>

              <h3
                className="
                  truncate
                  text-2xl
                  font-bold
                  tracking-[-0.04em]
                  text-white
                  [text-shadow:0_4px_18px_rgba(0,0,0,1),0_2px_5px_rgba(0,0,0,1)]
                  sm:text-3xl
                "
              >
                {project.title}
              </h3>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {project.github && (
                <ProjectLink href={project.github}>
                  <GitHubIcon className="size-4" />

                  <span className="hidden sm:inline">
                    GitHub
                  </span>
                </ProjectLink>
              )}

              {project.live && (
                <ProjectLink href={project.live}>
                  <ArrowUpRight className="size-4" />

                  <span className="hidden sm:inline">
                    Live
                  </span>
                </ProjectLink>
              )}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* BACK                                                            */}
        {/* ================================================================ */}

        <div
          className={cn(
            `
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
              rounded-[22px]
              border
              p-6
              shadow-[0_28px_100px_rgba(50,0,0,0.35)]
              [backface-visibility:hidden]
              [transform:rotateY(180deg)]

              group-hover:pointer-events-auto

              sm:p-8
            `,
            theme.background,
            theme.text,
            theme.border
          )}
        >
          {/* Dot texture */}
          <div
            className={cn(
              `
                pointer-events-none
                absolute
                inset-0
                [background-image:radial-gradient(currentColor_1px,transparent_1px)]
                [background-size:16px_16px]
              `,
              theme.dots
            )}
          />

          {/* Ambient glow */}
          <div
            className={cn(
              `
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                blur-[80px]
              `,
              theme.glow
            )}
          />

          {/* Subtle lower glow */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-16
              h-56
              w-56
              rounded-full
              bg-black/[0.08]
              blur-[80px]
            "
          />

          {/* ============================================================ */}
          {/* BACK CONTENT                                                */}
          {/* ============================================================ */}

          <div className="relative z-10 flex h-full flex-col">
            {/* Header */}
            <div className="flex items-start justify-between gap-5">
              <div className="min-w-0">
                <div
                  className={cn(
                    `
                      mb-3
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                    `,
                    theme.subtleText
                  )}
                >
                  {String(index + 1).padStart(2, '0')} / {project.label}
                </div>

                <h3
                  className={cn(
                    `
                      text-3xl
                      font-bold
                      tracking-[-0.04em]
                      sm:text-4xl
                    `,
                    theme.text
                  )}
                >
                  {project.title}
                </h3>
              </div>

              <ArrowUpRight
                className={cn(
                  'size-5 shrink-0',
                  theme.subtleText
                )}
              />
            </div>

            {/* Description */}
            <p
              className={cn(
                `
                  mt-5
                  max-w-xl
                  text-sm
                  leading-6
                  sm:text-[15px]
                  sm:leading-7
                `,
                theme.mutedText
              )}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    `
                      rounded-full
                      border
                      px-3
                      py-1.5
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.08em]
                      backdrop-blur-sm
                    `,
                    theme.tag
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* ========================================================== */}
            {/* CLICKABLE FLIP-SIDE LINKS                                 */}
            {/* ========================================================== */}

            <div
              className="
                mt-auto
                flex
                items-end
                justify-between
                gap-4
                pt-5
              "
            >
              <p
                className={cn(
                  `
                    hidden
                    max-w-[210px]
                    font-mono
                    text-[9px]
                    uppercase
                    leading-5
                    tracking-[0.14em]
                    sm:block
                  `,
                  theme.subtleText
                )}
              >
                Explore the project
                <br />
                or take a look at the source.
              </p>

              <div className="flex items-center gap-2">
                {project.github && (
                  <BackProjectLink
                    href={project.github}
                    className={theme.button}
                  >
                    <GitHubIcon className="size-4" />
                    GitHub
                  </BackProjectLink>
                )}

                {project.live && (
                  <BackProjectLink
                    href={project.live}
                    className={theme.button}
                  >
                    <ArrowUpRight className="size-4" />
                    Live Demo
                  </BackProjectLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        event.stopPropagation()
      }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-white/20
        bg-black/65
        px-3
        py-2
        text-[11px]
        font-medium
        text-white
        shadow-[0_7px_24px_rgba(0,0,0,0.8)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-red-400/50
        hover:bg-red-600/60
        hover:text-white
      "
    >
      {children}
    </a>
  )
}

function BackProjectLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        event.stopPropagation()
      }}
      className={cn(
        `
          relative
          z-30
          inline-flex
          cursor-pointer
          items-center
          gap-2
          rounded-lg
          border
          px-3.5
          py-2.5
          text-[11px]
          font-semibold
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
        `,
        className
      )}
    >
      {children}
    </a>
  )
}

function GitHubIcon({
  className,
}: {
  className?: string
}) {
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