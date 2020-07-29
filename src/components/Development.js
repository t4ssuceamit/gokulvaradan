import React from 'react'
import {motion} from 'framer-motion'

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
            <div className="grid lg:grid-cols-3 grid-row-3 gap-8 bg-grey-100 w-3/4 md:w-1/2 lg:w-3/4 h-full">
                <a href="https://github.com/gokulcodes/blogin#react-native">
                <div className="lg:col-span-1 row-span-1 bg-yellow-300 rounded-lg object-cover overflow-hidden transition duration-500 ease-out hover:shadow-lg transform hover:scale-110">
                    <div className="h-auto object-cover">
                        <img className="h-64 w-full" src={require("../statics/Blog.png")} alt="react-native-blog-app" />
                    </div>
                    <div className="flex flex-row justify-between items-center bg-yellow-400 w-full h-20">
                        <div className="flex flex-row w-full h-full mt-5 justify-between items-center">
                        <div className="flex items-center">
                        <div className="w-8 h-8 ml-5 mb-5 mr-2 rounded-full overflow-hidden">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="14" fill="url(#paint0_linear)"/>
                                <path d="M14.572 19C15.454 19 16.182 18.748 16.784 18.23C17.386 17.712 17.68 17.054 17.68 16.284C17.68 15.318 17.26 14.576 16.406 14.044C16.994 13.554 17.288 12.924 17.288 12.154C17.288 11.412 17.008 10.796 16.434 10.306C15.86 9.802 15.16 9.55 14.306 9.55H9.7V19H14.572ZM14.558 15.038C15.132 15.038 15.594 15.5 15.594 16.102C15.594 16.704 15.132 17.166 14.558 17.166H11.702V15.038H14.558ZM14.278 11.398C14.824 11.398 15.216 11.79 15.216 12.336C15.216 12.406 15.216 12.448 15.202 12.476C15.146 12.966 14.768 13.288 14.278 13.288H11.702V11.398H14.278Z" fill="white"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="5" y1="2.5" x2="22.5" y2="25.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FDAE66"/>
                                <stop offset="1" stop-color="#FB7756"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className="mb-5 font-medium">Blogin</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-12 h-12 mr-5 mb-5 bg-white flex justify-center items-center rounded-full">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 10C23.1022 10 22.7206 10.1603 22.4393 10.4457C22.158 10.7311 22 11.1181 22 11.5217V18.4783C22 18.8819 22.158 19.2689 22.4393 19.5543C22.7206 19.8397 23.1022 20 23.5 20C23.8978 20 24.2794 19.8397 24.5607 19.5543C24.842 19.2689 25 18.8819 25 18.4783V11.5217C25 11.1181 24.842 10.7311 24.5607 10.4457C24.2794 10.1603 23.8978 10 23.5 10V10Z" fill="#ECC94B"/>
                                <path d="M4.5 10C4.10218 10 3.72064 10.1603 3.43934 10.4457C3.15804 10.7311 3 11.1181 3 11.5217V18.4783C3 18.8819 3.15804 19.2689 3.43934 19.5543C3.72064 19.8397 4.10218 20 4.5 20C4.89782 20 5.27936 19.8397 5.56066 19.5543C5.84196 19.2689 6 18.8819 6 18.4783V11.5217C6 11.1181 5.84196 10.7311 5.56066 10.4457C5.27936 10.1603 4.89782 10 4.5 10V10Z" fill="#ECC94B"/>
                                <path d="M6.5 10V19.9C6.5 20.3376 6.67879 20.7573 6.99703 21.0667C7.31527 21.3762 7.74691 21.55 8.19697 21.55H9.25758V25.0562C9.25758 25.4392 9.41401 25.8064 9.69248 26.0771C9.97094 26.3479 10.3486 26.5 10.7424 26.5C11.1362 26.5 11.5139 26.3479 11.7924 26.0771C12.0708 25.8064 12.2273 25.4392 12.2273 25.0562V21.55H14.7727V25.0562C14.7727 25.4392 14.9292 25.8064 15.2076 26.0771C15.4861 26.3479 15.8638 26.5 16.2576 26.5C16.6514 26.5 17.0291 26.3479 17.3075 26.0771C17.586 25.8064 17.7424 25.4392 17.7424 25.0562V21.55H18.803C19.2531 21.55 19.6847 21.3762 20.003 21.0667C20.3212 20.7573 20.5 20.3376 20.5 19.9V10H6.5Z" fill="#ECC94B"/>
                                <path d="M20.3026 8.16806C19.8665 6.54049 18.8276 5.15021 17.4258 4.23557C17.3473 4.18445 17.2677 4.13481 17.187 4.08665C17.1064 4.03849 17.0254 3.99126 16.944 3.94495L17.2136 3.4404L18.0567 1.84785C18.0709 1.82094 18.08 1.79134 18.0833 1.76075C18.0866 1.73017 18.0841 1.6992 18.076 1.66962C18.0679 1.64004 18.0542 1.61244 18.0359 1.58838C18.0175 1.56433 17.9949 1.5443 17.9691 1.52945C17.9367 1.51039 17.9002 1.50025 17.863 1.5C17.823 1.49993 17.7838 1.51108 17.7494 1.53228C17.7149 1.55349 17.6866 1.58398 17.6672 1.62058L16.813 3.23481L16.5434 3.74325C16.4585 3.70379 16.3726 3.66656 16.2856 3.63211C16.1986 3.59766 16.1115 3.56154 16.0229 3.52876C14.3918 2.92763 12.6135 2.92763 10.9824 3.52876C10.8939 3.56173 10.8064 3.59618 10.7197 3.63211C10.6327 3.66879 10.5468 3.70602 10.4619 3.74325L10.1923 3.23481L9.3381 1.62336C9.30854 1.57054 9.26044 1.53193 9.20406 1.51576C9.14769 1.49959 9.08751 1.50715 9.03638 1.53682C8.98526 1.56649 8.94724 1.61593 8.93045 1.67456C8.91366 1.7332 8.91943 1.79639 8.94652 1.85063L9.78538 3.4404L10.0549 3.94495C9.9725 3.99015 9.89114 4.03664 9.81085 4.08443C9.73055 4.13222 9.65132 4.1826 9.57314 4.23557C8.1724 5.15021 7.13246 6.54049 6.69738 8.16639C6.57706 8.60018 6.51072 9.04842 6.5 9.5H20.5C20.4891 9.04898 20.4228 8.60131 20.3026 8.16806V8.16806ZM10.316 7.27898C10.19 7.27898 10.0669 7.23987 9.96223 7.16661C9.85753 7.09334 9.77592 6.98919 9.72773 6.86735C9.67954 6.74551 9.66693 6.61144 9.6915 6.48209C9.71606 6.35274 9.7767 6.23393 9.86575 6.14067C9.95479 6.04742 10.0682 5.98391 10.1917 5.95818C10.3153 5.93245 10.4433 5.94566 10.5596 5.99613C10.676 6.0466 10.7754 6.13206 10.8454 6.24172C10.9153 6.35137 10.9527 6.48029 10.9527 6.61218C10.9527 6.78902 10.8856 6.95863 10.7662 7.08368C10.6468 7.20873 10.4848 7.27898 10.316 7.27898ZM16.683 7.27898C16.557 7.27898 16.4339 7.23987 16.3292 7.16661C16.2245 7.09334 16.1429 6.98919 16.0947 6.86735C16.0466 6.74551 16.0339 6.61144 16.0585 6.48209C16.0831 6.35274 16.1437 6.23393 16.2328 6.14067C16.3218 6.04742 16.4353 5.98391 16.5588 5.95818C16.6823 5.93245 16.8103 5.94566 16.9266 5.99613C17.043 6.0466 17.1424 6.13206 17.2124 6.24172C17.2823 6.35137 17.3197 6.48029 17.3197 6.61218C17.3197 6.78902 17.2526 6.95863 17.1332 7.08368C17.0138 7.20873 16.8518 7.27898 16.683 7.27898Z" fill="#ECC94B"/>
                            </svg>
                            </div>
                            <div className="w-12 h-12 mr-5 mb-5 bg-white flex justify-center items-center rounded-full">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61855 20.2991H3.72726V11.4304H1.61855V20.2991V20.2991ZM2.66868 10.2674C3.32924 10.2674 3.84583 9.76536 3.84583 9.13787C3.84583 8.50199 3.32924 8 2.66868 8C2.01659 8 1.5 8.50201 1.5 9.13787C1.5 9.76538 2.01659 10.2674 2.66868 10.2674ZM10.7481 8.02504C7.18286 8.02504 4.94701 10.4263 4.94701 14.2667C4.94701 18.1071 7.18264 20.5 10.7481 20.5C14.3049 20.5 16.5408 18.1071 16.5408 14.2667C16.5408 10.4263 14.3051 8.02504 10.7481 8.02504V8.02504ZM10.7481 9.86573C12.9246 9.86573 14.3134 11.5726 14.3134 14.2667C14.3134 16.9524 12.9245 18.6592 10.7481 18.6592C8.56322 18.6592 7.18286 16.9524 7.18286 14.2667C7.18286 11.5726 8.56326 9.86573 10.7481 9.86573ZM17.4303 16.9022C17.5234 19.1279 19.3696 20.5 22.1812 20.5C25.1368 20.5 27 19.0609 27 16.7684C27 14.9695 25.9499 13.9572 23.4686 13.3966L22.0628 13.0787C20.5638 12.7273 19.9456 12.2587 19.9456 11.4555C19.9456 10.4515 20.8771 9.7822 22.2575 9.7822C23.6549 9.7822 24.6117 10.4599 24.7134 11.5894H26.7967C26.7459 9.46425 24.9675 8.0251 22.2745 8.0251C19.6153 8.0251 17.7267 9.47254 17.7267 11.6145C17.7267 13.338 18.7938 14.409 21.0464 14.9194L22.63 15.2875C24.1713 15.6473 24.798 16.1493 24.798 17.0194C24.798 18.0234 23.7733 18.743 22.2998 18.743C20.8093 18.743 19.6831 18.0151 19.5476 16.9023H17.4304L17.4303 16.9022Z" fill="#ECC94B"/>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </a> 
                <a href="https://github.com/gokulcodes/infomatte#infomatte">
                <div className="lg:col-span-1 row-span-1 bg-yellow-300 rounded-lg overflow-hidden transition duration-500 ease-out hover:shadow-lg transform hover:scale-110">
                    <div className="h-auto object-cover">
                        <img  className="h-64 w-full"  src={require("../statics/dev-infomatte.jpg")} alt="dev-infomatte" />
                    </div>
                    <div className="flex flex-row justify-between  items-center bg-yellow-400 w-full h-20">
                    <div className="flex flex-row w-full h-full mt-5 justify-between items-center">
                        <div className="flex items-center">
                        <div className="w-8 h-8 ml-5 mb-5 mr-2 rounded-full overflow-hidden">
                            <img src="https://avatars2.githubusercontent.com/u/60610891?s=460&u=ba9bbe6fddfbf4ce9a37cfc8bd40d7dde3cee537&v=4" alt="dev-infomatte" />
                        </div>
                        <p className="mb-5 font-medium">Infomatte.in</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-12 h-12 mr-5 mb-5 bg-white flex justify-center items-center rounded-full">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1C21.1794 1 27 6.82062 27 14C27 21.1794 21.1794 27 14 27C6.82062 27 1 21.1794 1 14C1 6.82062 6.82062 1 14 1Z" stroke="#ECC94B" stroke-miterlimit="10"/>
                                <path d="M14 1C17.6078 1 21 6.82062 21 14C21 21.1794 17.6078 27 14 27C10.3922 27 7 21.1794 7 14C7 6.82062 10.3922 1 14 1Z" stroke="#ECC94B" stroke-miterlimit="10"/>
                                <path d="M23 5C20.5181 6.87933 17.3937 8 14 8C10.6063 8 7.48186 6.87933 5 5" stroke="#ECC94B" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 23C7.48186 21.7471 10.6063 21 14 21C17.3937 21 20.5181 21.7471 23 23" stroke="#ECC94B" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 1V27" stroke="#ECC94B" stroke-miterlimit="10"/>
                                <path d="M1 14H27" stroke="#ECC94B" stroke-miterlimit="10"/>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </a>
                <a href="https://github.com/gokulcodes/teamBuglogger">
                <div className="lg:col-span-1 row-span-1 bg-yellow-300 rounded-lg overflow-hidden transition duration-500 ease-out hover:shadow-lg transform hover:scale-110">
                    <div className="h-full object-cover">
                        <img className="h-64 w-full" src={require("../statics/Team-Logger.png")} alt="team-logger-desktop-software" />
                    </div>
                    <div className="flex flex-row justify-between  items-center bg-yellow-400 w-full h-20">
                    <div className="flex flex-row w-full h-full mt-5 justify-between items-center">
                        <div className="flex items-center">
                        <div className="w-8 h-8 ml-5 mb-5 mr-2 rounded-full overflow-hidden">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="14" fill="url(#paint1_linear)"/>
                            <path d="M17.8364 18.106C18.8087 18.8975 19.3845 19.6564 19.3845 21.0002" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.1636 18.106C9.1913 18.8975 8.61548 19.6561 8.61548 21.0002" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.3076 12.3846C19.2799 11.593 19.3845 10.4976 19.3845 9.15381" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.6924 12.3173C8.72014 11.5257 8.61548 10.4979 8.61548 9.15381" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.9999 15.0815H18.3076" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.69231 15.0815H7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 11.8462V20.4616" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.0001 20.4615C11.6308 20.4615 9.69238 18.5231 9.69238 16.1538V12.9207C9.69238 10.7309 11.6308 9.68994 14.0001 9.68994C16.3693 9.68994 18.3078 10.5515 18.3078 12.9207V16.1538C18.3078 18.5231 16.3693 20.4615 14.0001 20.4615Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.423 10.2146C11.3557 10.0457 11.3167 9.86685 11.3076 9.68524C11.3095 8.97364 11.593 8.29173 12.0962 7.78855C12.5993 7.28537 13.2813 7.00187 13.9929 7H14.007C14.7186 7.00187 15.4005 7.28537 15.9037 7.78855C16.4069 8.29173 16.6904 8.97364 16.6922 9.68524C16.6857 9.85057 16.6502 10.0135 16.5872 10.1665" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint1_linear" x1="5" y1="2.5" x2="22.5" y2="25.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#06FF40"/>
                            <stop offset="1" stop-color="#00C868"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        </div>
                        <p className="mb-5 font-medium">Team Logger</p>
                        </div>
                        <div className="w-12 h-12 mr-5 mb-5 bg-white flex justify-center items-center rounded-full">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3389 4.5H5.16108C4.24369 4.5 3.5 5.25735 3.5 6.19158V18.8084C3.5 19.7427 4.24369 20.5 5.16108 20.5H23.3389C24.2563 20.5 25 19.7427 25 18.8084V6.19158C25 5.25735 24.2563 4.5 23.3389 4.5Z" stroke="#ECC94B" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M2 21H26.5" stroke="#ECC94B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>
                        </div>
                </div>
                </div>
                </div>
                </a>
            </div>
        </div>
    </motion.div>
    )
}

export default Development