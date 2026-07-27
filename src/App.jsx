import Background from './components/Background'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import SectionNav from './components/SectionNav'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Background />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <SectionNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
