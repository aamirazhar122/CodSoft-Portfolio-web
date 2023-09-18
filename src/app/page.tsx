import Image from 'next/image';
import Hero from './componets/hero';
import Contact from './componets/contact';
import Projects from './componets/projects'
import About from './componets/about';
import Skills from './componets/skills';

export default function Home() {
  return (
                <div>
                   <Hero/>
                  <About/>
                <Projects/>
                <Contact/>
                <Skills/> 
                </div> 
    )
}
