import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { CertificatesShowcase } from "@/components/certificates-showcase"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="relative">
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="certificates">
        <CertificatesShowcase />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}

