import React from 'react';
// import {motion} from 'framer-motion'
import HeaderLogo from '../statics/svg/HeaderLogo'

function Header(){
    React.useEffect(() => {
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("header").classList.add('shadow-sm')
        } else {
            document.getElementById("header").classList.remove('shadow-sm')
        }
        }
    }, [])
    return (
        <div className="flex flex-1 h-20 flex-row items-center bg-white transition-all duration-500" id="header">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <a href="#">
                    <HeaderLogo  width="50" height="50" viewBox="0 0 90 50" />
                </a>
                <nav className="flex ml-32 space-x-20">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="flex space-x-2 items-center">
                <span>Got an idea</span><button className="bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">Let's Talk!</button>
                </div>
            </div>
        </div>
    )
}

export default Header