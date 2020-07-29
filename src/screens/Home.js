import React from 'react'
import {motion} from 'framer-motion'
import {RoughNotation} from 'react-rough-notation'

const Home = () => {
    return(
        <div className="flex flex-col justify-center items-center">
        <motion.div 
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ ease: "easeOut", duration: 0.8}}
            className="flex flex-col justify-center items-center" >
            <h1 className="sm:text-2xl text-2xl md:text-4xl font-heavy mb-2">I'm Gokul Varadan</h1>
            <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ ease: "easeOut", duration: 1}}
            className="flex flex-col justify-center items-center" >
            <p className="md:text-2xl text-xl w-4/5  md:w-8/12 font-light text-center">
                Hai, I'm Freelancer specialized in {' '} 
                <RoughNotation type="underline" show="true" color="yellow" multiline>
                Design and Development{' '}
                </RoughNotation>
                of Software Products.</p>
            </motion.div>
        </motion.div>
        </div>
    )
}

export default Home