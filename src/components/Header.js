/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import HeaderLogo from '../statics/svg/HeaderLogo'

function Header(){
    let dom = null
    React.useEffect(() => {
        dom = document
        size()
        window.onresize = () => size()
        function size(){
            if(window.innerWidth < 768){
                const nav = document.getElementById("nav")
                const talk = document.getElementById("talk")
                document.getElementById("hamb").classList.remove("hidden")
                nav.classList.add("hidden")
                talk.classList.add("hidden")
            }else{
                document.getElementById("hamb").classList.add("hidden")
            }
        }
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("header").classList.add('shadow-md', 'bg-white')
        } else {
            document.getElementById("header").classList.remove('shadow-md')
            document.getElementById("header").classList.replace('bg-white', 'bg-transparent')
        }
        }
    }, [])
    function handleClick() {
        const nav = document.getElementById("nav")
        const talk = document.getElementById("talk")
        if(nav.classList.contains("hidden") && talk.classList.contains("hidden")){
            nav.classList.remove("hidden")
            talk.classList.remove("hidden")
            nav.classList.add("block")
            talk.classList.add("block")
            document.getElementById("header").classList.add('shadow-md', 'bg-white')
        }else{
            nav.classList.remove("block")
            talk.classList.remove("block")
            nav.classList.add("hidden")
            talk.classList.add("hidden")
            document.getElementById("header").classList.remove('shadow-md')
        }
    }
    return (
        <div className="flex flex-1 h-full flex-wrap flex-row items-center z-40 bg-transparent transition-all duration-500" id="header">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex w-full md:w-auto justify-between font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <div className="flex">
                        <HeaderLogo  width="50" height="50" viewBox="0 0 90 50" />
                    </div>
                    <div clasName="flex" id="hamb" onClick={() => handleClick()}>
                        <svg width="46" height="46" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#F2F1F1"/>
                            <path d="M6 11L22 11" stroke="#FFB801" stroke-miterlimit="10"/>
                            <path d="M6 17L22 17" stroke="#FFB801" stroke-miterlimit="10"/>
                        </svg>
                    </div>
                </div>
                <nav className="md:ml-auto sm:hidden md:block md:mr-auto flex flex-wrap flex-col sm:flex-col md:flex-row items-center text-base justify-center md:space-x-20 transition-all duration-500" id="nav">
                    <a href="#about" onClick={() => handleClick()} className="mr-5 mb-5 md:mb-0 hover:text-yellow-500 font-medium">About</a>
                    <a href="#skills" onClick={() => handleClick()} className="mr-5 mb-5 md:mb-0 hover:text-yellow-500 font-medium">Skills</a>
                    <a href="#contact" onClick={() => handleClick()} className="mr-5 mb-5 md:mb-0 hover:text-yellow-500 font-medium">Contact</a>
                </nav>
                <div className="inline-flex sm:hidden md:block items-center border-0 rounded text-base mt-4 md:mt-0 transition-all duration-500" id="talk">
                    <span className="font-light mr-2">Got an idea</span><button onClick={() => handleClick()} className="font-medium py-2 px-4 rounded-md bg-yellow-400 focus:outline-none font-bold hover:bg-yellow-500"><a href="#contact">Let's Talk!</a></button>
                </div>
            </div>
        </div>
    )
}

export default Header