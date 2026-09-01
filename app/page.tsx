import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { TechStack } from '@/components/tech-stack'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { DotBackground } from '@/components/dot-background'

export default function Home() {
  return (
    <>
      <DotBackground />

      <div className="relative min-h-screen">
        <Navbar />

        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}