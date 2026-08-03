import { BackgroundDecor } from '@/components/decor'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { TechStack } from '@/components/tech-stack'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <BackgroundDecor />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
