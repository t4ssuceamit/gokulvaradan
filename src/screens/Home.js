import React from 'react'
import {RoughNotation} from 'react-rough-notation'

const Home = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-2">I'm Gokul Varadan</h1>
            <p className="text-xl w-8/12 text-center">
                Hai, I'm Freelancer specialized in both{' '} 
                <RoughNotation type="underline" show="true" color="yellow" multiline>
                Design and Development{' '}
                </RoughNotation>
                of Software Products.</p>
        </div>
    )
}

export default Home