import React from 'react';
import {motion} from 'framer-motion'
import Intro from './screens/Intro'
import Header from './components/Header'
import Home from './screens/Home'
import About from './screens/About'
import Skills from './screens/Skills'
import Contact from './screens/Contact'

function App() {
  const [loaded, setLoaded] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(false)
    }, 3000)
  })
  return loaded ? <Intro /> : (
    <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}  className='flex flex-col overflow-x-hidden text-gray-900 relative border-l-8 border-yellow-400' style={{scrollBehavior: 'smooth'}}>
      <div className="z-40 flex w-screen fixed">
      <Header />
      </div>
      <div className="flex h-screen w-screen justify-center items-center bg-white pattern">
      <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </motion.div>
  );
}

export default App;
