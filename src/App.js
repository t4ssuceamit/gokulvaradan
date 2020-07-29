import React from 'react';
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
    <div className='flex flex-col font-default overflow-x-hidden text-gray-800 relative border-l-8 border-yellow-400 bg-gray-100' style={{scrollBehavior: 'smooth'}}>
      <div className="z-40 flex w-screen fixed">
      <Header />
      </div>
      <div className="flex h-screen w-screen justify-center items-center">
      <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
