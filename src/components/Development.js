import React from 'react'
import {motion} from 'framer-motion'

function Development() {
    return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 20 }}
    transition={{ ease: "easeOut", duration: 0.6}}
    className="flex flex-col justify-center items-center">
            <p className="text-lg w-4/5 text-center">
                I'm full stack developer and UI/UX specialist. I'm very passionate about learning new thing and building 
                new excellent softwares around us. I've experienced by working in project for individuals to small startups.
            </p>
            {/* fullstack */}
        <div class="w-9/12 px-5 py-16 mx-auto flex flex-wrap z-0 flex-col">
            <div className="flex">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">1</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl">Full Stack Development</h2>
                <p class="leading-relaxed">Building Web, Mobile and Desktop Application</p>
                </div>
            </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">2</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl">Database</h2>
                <p class="leading-relaxed">SQL, NoSQL</p>
                </div>
            </div>
            </div>
            </div>
            <div className="flex">
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">3</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl">Cloud Knowledge</h2>
                <p class="leading-relaxed">AWS, Azure Cloud Fundamentals</p>
                </div>
            </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">4</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl">Linux</h2>
                <p class="leading-relaxed">Experienced by handling various  Linux distributions</p>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className="flex flex-col  justify-center items-center w-9/12">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-3 gap-8 bg-grey-100 w-full h-64">
                <div className="col-span-1 bg-yellow-300 rounded-lg"></div>
                <div className="col-span-1 bg-yellow-300 rounded-lg"></div>
                <div className="col-span-1 bg-yellow-300 rounded-lg"></div>
            </div>
        </div>
    </motion.div>
    )
}

export default Development