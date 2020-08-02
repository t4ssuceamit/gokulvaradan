import React from 'react'
import {motion} from 'framer-motion'
import projectData from './projectData'

function Development() {
    return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 20 }}
    transition={{ ease: "easeOut", duration: 0.6}}
    className="flex flex-col justify-center items-center">
            <p className="text-lg md:text-xl w-4/5 text-center font-light">
            I'm a full stack developer and UI/UX specialist, very passionate about learning new things and building new excellent softwares around us. 
            I've quite experience by working in Social Projects from individual client to small startups. Some of my works are listed below. Also visit: <a href="https://github.com/gokulcodes" className="text-yellow-600">gokulcodes</a> for more development works.
            </p>
            {/* fullstack */}
        <div class="w-9/12 px-5 py-16 mx-auto flex flex-wrap z-0 flex-col">
            <div className="flex md:flex-row flex-col">
            <div class="flex relative pb-20 sm:items-center md:w-2/3">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">1</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M6.68359 33H14.2852V30.3203H9.37695V21.9805H6.68359V33ZM20.4648 27.6406L21.1689 29.1309H19.7539L20.4648 27.6406ZM17.7441 33L18.5645 31.3252H22.3584L23.1787 33H26.1045L20.7793 21.9941H20.1436L14.832 33H17.7441ZM27.0684 21.9531V33H29.8369V27.2168L36.2764 33H36.8848V21.9531H34.1025V27.7568L27.6494 21.9531H27.0684ZM44.083 21.8916H43.8984C42.2031 21.8916 40.7402 22.4521 39.5508 23.5459C38.4092 24.6396 37.835 25.9727 37.835 27.4971C37.835 29.042 38.4092 30.375 39.5508 31.4482C40.7334 32.5352 42.1963 33.0889 43.8984 33.0889C45.5869 33.0889 47.0498 32.5352 48.2598 31.4414C49.3809 30.3682 50.0986 28.8711 49.9346 26.793L49.9209 26.5811H43.5361V29.0146H46.6943C46.1543 29.7734 45.1357 30.3818 43.9189 30.3818C43.0029 30.3818 42.2373 30.1016 41.6016 29.5342C40.9453 28.9668 40.6309 28.2969 40.6309 27.4971C40.6309 26.7041 40.9453 26.0342 41.6016 25.4668C42.2441 24.8926 43.0029 24.6191 43.9189 24.6191C44.8145 24.6191 45.5801 24.9199 46.2432 25.5352L46.4277 25.7061L48.4443 23.7852L48.2734 23.6211C47.2959 22.7119 45.8604 21.9668 44.0898 21.9189L44.083 21.8916Z" fill="#ECC94B"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="56" height="56" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl font-medium">Languages</h2>
                <p class="leading-relaxed font-light text-lg">Expertized in Python, JavaScript, Golang</p>
                </div>
            </div>
            </div>
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">2</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.9414 29.0204C50.9413 29.2989 50.8604 29.5717 50.7081 29.8066C50.5557 30.0415 50.3383 30.2289 50.0814 30.3467L39.7514 35.0947C39.5934 35.1667 39.4196 35.1985 39.2458 35.1872C39.072 35.1758 38.9039 35.1217 38.757 35.0299C38.6101 34.938 38.4891 34.8113 38.4051 34.6614C38.3212 34.5115 38.277 34.3433 38.2766 34.1723V34.149C38.279 33.9562 38.3372 33.768 38.4443 33.6064C38.5514 33.4448 38.703 33.3165 38.8815 33.2363L48.0055 29.0185L38.8815 24.8337C38.7036 24.7513 38.5532 24.6208 38.4482 24.4574C38.3431 24.294 38.2877 24.1045 38.2884 23.9113V23.9113C38.2885 23.7403 38.3324 23.5721 38.4161 23.4222C38.4998 23.2722 38.6206 23.1455 38.7674 23.0535C38.9142 22.9616 39.0822 22.9075 39.2559 22.8962C39.4296 22.8849 39.6035 22.9168 39.7613 22.9889L50.0774 27.6902C50.3354 27.8082 50.5538 27.996 50.7068 28.2316C50.8599 28.4673 50.9413 28.7409 50.9414 29.0204V29.0204Z" fill="#ECC94B"/>
                    <path d="M35.5459 16.3419L24.0792 40.4563C24.0019 40.6189 23.8791 40.7564 23.7249 40.8528C23.5708 40.9491 23.3919 41.0002 23.2093 41V41C23.0479 40.9998 22.8892 40.9597 22.7477 40.8833C22.6063 40.807 22.4867 40.6969 22.4001 40.5631C22.3134 40.4294 22.2624 40.2764 22.2518 40.1183C22.2412 39.9601 22.2713 39.8019 22.3394 39.6582L33.8061 15.5437C33.8834 15.3811 34.0062 15.2436 34.1603 15.1472C34.3145 15.0509 34.4934 14.9998 34.676 15V15C34.8376 14.9997 34.9966 15.0395 35.1384 15.1157C35.2801 15.1919 35.3999 15.3021 35.4867 15.436C35.5734 15.5698 35.6244 15.7231 35.6347 15.8814C35.6451 16.0398 35.6146 16.1982 35.5459 16.3419V16.3419Z" fill="#ECC94B"/>
                    <path d="M7.80752 27.6903L18.1336 22.989C18.2917 22.9167 18.4659 22.8848 18.6399 22.8963C18.8139 22.9078 18.9822 22.9622 19.1291 23.0546C19.276 23.147 19.3968 23.2743 19.4802 23.4248C19.5636 23.5752 19.6071 23.7439 19.6064 23.9152V23.9152C19.6069 24.1084 19.5514 24.2978 19.4464 24.4611C19.3413 24.6245 19.1911 24.7551 19.0133 24.8376L9.87747 29.0185L19.0054 33.2247C19.1836 33.3095 19.3337 33.4419 19.4387 33.6068C19.5436 33.7717 19.599 33.9623 19.5985 34.1568C19.597 34.3278 19.5522 34.4958 19.468 34.6455C19.3838 34.7953 19.2629 34.922 19.1164 35.0144C18.9698 35.1067 18.802 35.1617 18.6284 35.1744C18.4547 35.187 18.2806 35.157 18.1217 35.0869L7.80159 30.3468C7.54466 30.229 7.32727 30.0416 7.17494 29.8067C7.02261 29.5717 6.94166 29.299 6.94158 29.0205V29.0205C6.94191 28.7408 7.02359 28.467 7.177 28.2313C7.33041 27.9956 7.54917 27.8079 7.80752 27.6903V27.6903Z" fill="#ECC94B"/>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl font-medium">Full Stack Development</h2>
                <p class="leading-relaxed font-light text-lg">Building Web, Mobile and Desktop Application</p>
                </div>
            </div>
            </div>
            </div>
            <div className="flex md:flex-row flex-col">
            <div class="flex relative pb-20 sm:items-center md:w-2/3 ">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">3</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43 15.7421C43 11.962 36.4122 9 28.0008 9C19.5893 9 13 11.962 13 15.7421C13.0005 15.9459 13.0204 16.1493 13.0594 16.3492H13V40.2579C13 44.038 19.5893 47 28.0008 47C36.4122 47 43 44.038 43 40.2579V16.3492H42.9406C42.9796 16.1493 42.9995 15.9459 43 15.7421V15.7421ZM41.8004 40.2579C41.8004 42.9212 36.2543 45.773 28.0008 45.773C19.7473 45.773 14.1996 42.9212 14.1996 40.2579V36.8166C16.4675 39.2227 21.7258 40.8698 28.0008 40.8698C34.2757 40.8698 39.5325 39.2227 41.8004 36.8166V40.2579ZM41.8004 34.1294C41.8004 36.7926 36.2543 39.6444 28.0008 39.6444C19.7473 39.6444 14.1996 36.799 14.1996 34.1294V30.6864C16.4675 33.0941 21.7258 34.7413 28.0008 34.7413C34.2757 34.7413 39.5325 33.0941 41.8004 30.6864V34.1294ZM41.8004 27.9992C41.8004 30.6641 36.2543 33.5159 28.0008 33.5159C19.7473 33.5159 14.1996 30.6641 14.1996 27.9992V24.5579C16.4675 26.9639 21.7258 28.6127 28.0008 28.6127C34.2757 28.6127 39.5325 26.9639 41.8004 24.5579V27.9992ZM41.8004 21.8706C41.8004 24.5339 36.2543 27.3873 28.0008 27.3873C19.7473 27.3873 14.1996 24.5339 14.1996 21.8706V18.4261C16.4675 20.8354 21.7258 22.4841 28.0008 22.4841C34.2757 22.4841 39.5325 20.8354 41.8004 18.4261V21.8706ZM28.0008 21.2571C19.7457 21.2571 14.1996 18.4053 14.1996 15.7421C14.1996 13.0788 19.7457 10.2254 28.0008 10.2254C36.2558 10.2254 41.8004 13.0788 41.8004 15.7421C41.8004 18.4053 36.2543 21.2571 28.0008 21.2571Z" fill="#ECC94B"/>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl font-medium">Database</h2>
                <p class="leading-relaxed font-light text-lg">SQL, NoSQL</p>
                </div>
            </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">4</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="#ECC94B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl font-medium">Ethical Hacker</h2>
                <p class="leading-relaxed font-light text-lg">Completed CEHv10 Certification</p>
                </div>
            </div>
            </div>
            </div>
            <div className="flex md:flex-row flex-col">
            <div class="flex relative pb-20 sm:items-center md:w-2/3">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">5</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.3132 41C42.5218 41.0027 44.6482 40.161 46.2591 38.6467C47.87 37.1324 48.8441 35.0593 48.9829 32.85C49.1216 30.6407 48.4145 28.4616 47.0058 26.7568C45.5971 25.0519 43.5927 23.9497 41.4012 23.6747C40.589 21.2893 39.0928 19.1969 37.1 17.6595C35.1072 16.1221 32.7062 15.208 30.1976 15.0315C27.689 14.855 25.1842 15.4239 22.9966 16.6672C20.809 17.9105 19.0359 19.7728 17.8991 22.0212C17.4418 21.9544 16.9802 21.9206 16.5181 21.9201C13.9937 21.9201 11.5728 22.9252 9.78777 24.7143C8.00279 26.5034 7 28.9299 7 31.4601C7 33.9902 8.00279 36.4167 9.78777 38.2058C11.5728 39.9949 13.9937 41 16.5181 41H40.3132Z" stroke="#ECC94B" stroke-width="2" stroke-miterlimit="10"/>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl font-medium">Cloud Knowledge</h2>
                <p class="leading-relaxed font-light text-lg">AWS, Azure Cloud Fundamentals</p>
                </div>
            </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">6</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-yellow-200 text-yellow-500 rounded-full inline-flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.889 40.2156V20.0711L27.4445 10L10 20.0711V40.2156L27.4445 50.2867L44.889 40.2156Z" stroke="#ECC94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.0957 20.0311L27.6602 30.2534L45.0002 20.0311L27.438 10.0311L10.0957 20.0311Z" stroke="#ECC94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.5557 30.2534V50.2534" stroke="#ECC94B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-gray-900 mb-1 text-xl font-medium">Linux</h2>
                <p class="leading-relaxed font-light text-lg">Experienced by handling various  Linux distributions</p>
                </div>
            </div>
            </div>
            </div>
        </div>


        <div className="flex flex-col h-full justify-center items-center">
            <h1 className="text-3xl mb-6 font-heavy">Projects</h1>
            <div className="grid lg:grid-cols-3 grid-row-3 gap-8 bg-grey-100 w-3/4 md:w-1/2 lg:w-4/5 h-full">
            {projectData.map((project) => (
                <a href={project.projectUrl}>
                <div className="lg:col-span-1 row-span-1 bg-yellow-300 rounded-lg object-cover overflow-hidden transition duration-500 ease-out hover:shadow-lg transform hover:scale-110">
                    <div className="h-auto object-cover">
                        <img className="h-64 w-full" src={project.img} alt={project.alt} />
                    </div>
                    <div className="flex flex-row justify-between items-center bg-yellow-400 w-full h-20">
                        <div className="flex flex-row w-full h-full mt-5 justify-between items-center">
                        <div className="flex items-center">
                        <div className="w-8 h-8 ml-5 mb-5 mr-2 rounded-full overflow-hidden">
                            {project.icon}
                        </div>
                        <p className="mb-5 font-medium">{project.projectName}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-12 h-12 mr-5 mb-5 bg-white flex justify-center items-center rounded-full">
                            {project.platform}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </a>               
            ))}
            </div>
        </div>
    </motion.div>
    )
}

export default Development