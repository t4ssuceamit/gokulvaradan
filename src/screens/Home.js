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
            <h1 className="text-4xl font-bold mb-2">I'm Gokul Varadan</h1>
            <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ ease: "easeOut", duration: 1}}
            className="flex flex-col justify-center items-center" >
            <p className="text-xl w-8/12 text-center">
                Hai, I'm Freelancer specialized in both{' '} 
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