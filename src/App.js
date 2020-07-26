import React from 'react';
import Header from './components/Header'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'

function App() {
  return (
    <div className='flex flex-col font-default overflow-x-hidden relative border-l-8 border-yellow-400' style={{scrollBehavior: 'smooth'}}>
      <div className="flex w-screen fixed">
      <Header />
      </div>
      <div className="flex h-screen w-screen justify-center items-center">
      <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;