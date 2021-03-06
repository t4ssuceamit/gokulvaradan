import React from 'react'
import {motion} from 'framer-motion'

function Design() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ ease: "easeOut", duration: 0.6}} 
        className="flex flex-col justify-center items-center w-9/12 pb-64 h-full">
            <p className="text-lg md:text-xl w-full text-center mb-8 font-light">
            Good Design is a key to every product success. When a product is build with both good Design Principles and Technical Stack, it always lead to the success. 
            I have delightful experience in working with many design softwares. Some of my works are listed below.
            </p>
        <div class="container py-8 mr-10 flex flex-wrap z-0 items-center justify-center flex-col">
            <div className="flex flex-col md:flex-row justify-start items-start">
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="flex-grow md:pl-8 pl-6 flex flex-col justify-center items-center self-center">
                        <div className="flex-shrink-0 mb-5 w-24 md:ml-6 h-24 bg-grey-100 bg-yellow-200 rounded-full inline-flex items-center justify-center">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4646 22.6517H14.828V29.2973C14.8411 29.9261 14.7214 30.5506 14.4765 31.1299C14.2316 31.7092 13.8672 32.2303 13.407 32.659C12.9434 33.1075 12.3946 33.4585 11.793 33.6913C11.1914 33.9241 10.5492 34.034 9.90447 34.0143C9.25932 34.0341 8.61674 33.9244 8.01472 33.6916C7.41271 33.4588 6.86347 33.1077 6.39949 32.659C5.94204 32.229 5.58053 31.7073 5.33859 31.128C5.09666 30.5487 4.97976 29.9249 4.99555 29.2973V22.6517H7.35893V29.2973C7.35058 29.6337 7.41074 29.9684 7.53574 30.2809C7.66075 30.5933 7.84798 30.8771 8.08608 31.115C8.32417 31.3529 8.60815 31.5398 8.92074 31.6645C9.23334 31.7892 9.56803 31.8491 9.90447 31.8404C10.2421 31.8511 10.5784 31.7928 10.8927 31.669C11.207 31.5452 11.4928 31.3585 11.7324 31.1204C11.9721 30.8823 12.1607 30.5979 12.2865 30.2844C12.4124 29.9709 12.473 29.635 12.4646 29.2973V22.6517Z" fill="#ECC94B"/>
                            <path d="M16.3633 33.8079V22.6517H18.7267V33.8079H16.3633Z" fill="#ECC94B"/>
                            <path d="M19.5527 36.7008L26.8566 21H28.7391L21.4376 36.7008H19.5527Z" fill="#ECC94B"/>
                            <path d="M36.9049 22.6517H39.2683V29.2973C39.2815 29.9261 39.1617 30.5506 38.9168 31.1299C38.672 31.7092 38.3075 32.2303 37.8474 32.659C37.3834 33.1077 36.8341 33.4588 36.2321 33.6916C35.6301 33.9244 34.9875 34.0341 34.3424 34.0143C33.6976 34.034 33.0555 33.9241 32.4539 33.6913C31.8523 33.4585 31.3034 33.1075 30.8398 32.659C30.3829 32.2301 30.0217 31.7097 29.7798 31.1316C29.5379 30.5536 29.4207 29.931 29.4359 29.3046V22.6517H31.7993V29.2973C31.7842 29.6416 31.8391 29.9854 31.9605 30.3079C32.0818 30.6304 32.2673 30.925 32.5056 31.174C32.7439 31.4229 33.0301 31.621 33.3471 31.7564C33.664 31.8917 34.005 31.9615 34.3497 31.9615C34.6943 31.9615 35.0353 31.8917 35.3523 31.7564C35.6692 31.621 35.9554 31.4229 36.1937 31.174C36.432 30.925 36.6175 30.6304 36.7389 30.3079C36.8603 29.9854 36.9151 29.6416 36.9001 29.2973L36.9049 22.6517Z" fill="#ECC94B"/>
                            <path d="M40.1589 22.6517H42.9692L45.4953 26.1737L48.0239 22.6517H50.8342L46.9017 28.1217L50.9993 33.8079H48.189L45.4953 30.0721L42.8235 33.8079H40.0107L44.1011 28.1217L40.1589 22.6517Z" fill="#ECC94B"/>
                        </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 flex flex-col items-center text-center">
                            <h2 className="font-bold title-font text-gray-900 mb-1 text-xl font-medium">UI/UX</h2>
                            <p className="leading-relaxed font-light text-lg">Specialized in  Design Principles, Figma and Adobe XD</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="flex-grow md:pl-8 pl-6 flex items-center flex-col">
                        <div className="flex-shrink-0 mb-5 w-24 h-24 bg-grey-100 bg-yellow-200 rounded-full inline-flex items-center justify-center">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.1197 9H41.6387C41.3416 9 41.0566 9.11803 40.8465 9.32812C40.6364 9.53821 40.5184 9.82315 40.5184 10.1203V11.2405H31.2893C31.0555 10.5888 30.6261 10.0252 30.0599 9.62675C29.4937 9.22829 28.8182 9.01445 28.1258 9.01445C27.4334 9.01445 26.7579 9.22829 26.1917 9.62675C25.6255 10.0252 25.1961 10.5888 24.9624 11.2405H15.7216V10.1203C15.7216 9.82315 15.6036 9.53821 15.3935 9.32812C15.1834 9.11803 14.8984 9 14.6013 9H10.1203C9.82315 9 9.53821 9.11803 9.32812 9.32812C9.11803 9.53821 9 9.82315 9 10.1203V14.6013C9 14.8984 9.11803 15.1834 9.32812 15.3935C9.53821 15.6036 9.82315 15.7216 10.1203 15.7216H14.6013C14.8984 15.7216 15.1834 15.6036 15.3935 15.3935C15.6036 15.1834 15.7216 14.8984 15.7216 14.6013V13.4666H20.3797C18.4241 14.7097 16.7894 16.3969 15.6089 18.3909C14.4283 20.385 13.735 22.6295 13.5856 24.942C12.837 25.2001 12.2038 25.7144 11.7977 26.3941C11.3915 27.0737 11.2386 27.875 11.3659 28.6565C11.4932 29.4379 11.8926 30.1493 12.4934 30.6649C13.0943 31.1805 13.858 31.4671 14.6497 31.4743C15.4415 31.4815 16.2102 31.2086 16.8203 30.704C17.4304 30.1993 17.8426 29.4953 17.984 28.7163C18.1254 27.9373 17.987 27.1334 17.5932 26.4465C17.1994 25.7596 16.5756 25.2339 15.8319 24.9624C16.0367 22.3761 17.0405 19.9175 18.7045 17.927C20.3684 15.9365 22.6101 14.5126 25.1191 13.8526C25.3967 14.4136 25.8256 14.8859 26.3574 15.2161C26.8892 15.5463 27.5027 15.7213 28.1287 15.7213C28.7547 15.7213 29.3682 15.5463 29.9 15.2161C30.4318 14.8859 30.8607 14.4136 31.1383 13.8526C33.6473 14.5126 35.889 15.9365 37.553 17.927C39.2169 19.9175 40.2208 22.3761 40.4255 24.9624C39.6802 25.234 39.0548 25.7604 38.66 26.4484C38.2651 27.1364 38.1261 27.9419 38.2676 28.7225C38.409 29.5031 38.8218 30.2086 39.433 30.7143C40.0442 31.22 40.8145 31.4934 41.6078 31.4863C42.4011 31.4791 43.1663 31.1918 43.7682 30.6751C44.3702 30.1584 44.7702 29.4456 44.8975 28.6625C45.0248 27.8795 44.8713 27.0767 44.464 26.3959C44.0568 25.7151 43.422 25.2002 42.6719 24.942C42.5208 22.6299 41.8249 20.3862 40.641 18.3944C39.4572 16.4025 37.819 14.7189 35.8603 13.4811H40.5039V14.6013C40.5039 14.8984 40.6219 15.1834 40.832 15.3935C41.0421 15.6036 41.327 15.7216 41.6242 15.7216H46.1197C46.4169 15.7216 46.7018 15.6036 46.9119 15.3935C47.122 15.1834 47.24 14.8984 47.24 14.6013V10.1203C47.24 9.82315 47.122 9.53821 46.9119 9.32812C46.7018 9.11803 46.4169 9 46.1197 9V9ZM13.4811 13.4811H11.2405V11.2405H13.4811V13.4811ZM14.6768 29.2403C14.4552 29.2403 14.2386 29.1746 14.0544 29.0515C13.8702 28.9284 13.7266 28.7534 13.6418 28.5487C13.557 28.344 13.5348 28.1188 13.5781 27.9015C13.6213 27.6841 13.728 27.4845 13.8846 27.3279C14.0413 27.1712 14.2409 27.0645 14.4582 27.0213C14.6756 26.978 14.9008 27.0002 15.1055 27.085C15.3102 27.1698 15.4852 27.3134 15.6083 27.4976C15.7314 27.6818 15.7971 27.8984 15.7971 28.12C15.7971 28.4171 15.679 28.7021 15.4689 28.9122C15.2589 29.1222 14.9739 29.2403 14.6768 29.2403ZM28.12 13.4811C27.8984 13.4811 27.6818 13.4154 27.4976 13.2923C27.3134 13.1692 27.1698 12.9942 27.085 12.7895C27.0002 12.5848 26.978 12.3596 27.0213 12.1422C27.0645 11.9249 27.1712 11.7253 27.3279 11.5687C27.4845 11.412 27.6841 11.3053 27.9015 11.2621C28.1188 11.2188 28.344 11.241 28.5487 11.3258C28.7534 11.4106 28.9284 11.5542 29.0515 11.7384C29.1746 11.9226 29.2403 12.1392 29.2403 12.3608C29.2403 12.6579 29.1222 12.9429 28.9122 13.153C28.7021 13.363 28.4171 13.4811 28.12 13.4811V13.4811ZM41.5632 26.9939C41.7848 26.9939 42.0014 27.0596 42.1856 27.1827C42.3698 27.3058 42.5134 27.4808 42.5982 27.6855C42.683 27.8902 42.7052 28.1154 42.662 28.3328C42.6187 28.5501 42.512 28.7497 42.3554 28.9063C42.1987 29.063 41.9991 29.1697 41.7818 29.2129C41.5645 29.2562 41.3392 29.234 41.1345 29.1492C40.9298 29.0644 40.7548 28.9208 40.6317 28.7366C40.5086 28.5524 40.4429 28.3358 40.4429 28.1142C40.4429 27.8171 40.561 27.5321 40.7711 27.3221C40.9812 27.112 41.2661 26.9939 41.5632 26.9939V26.9939ZM44.9879 13.4811H42.7473V11.2405H44.9879V13.4811Z" fill="#ECC94B"/>
                            <path d="M38.0227 31.98L29.0518 18.5368V18.5223L29.0054 18.4584C28.8962 18.3227 28.7568 18.2142 28.5983 18.1418C28.4399 18.0693 28.2667 18.0348 28.0926 18.041C27.9185 18.0472 27.7482 18.0939 27.5953 18.1775C27.4424 18.261 27.3111 18.3791 27.2118 18.5223V18.5368L18.2264 31.98C18.0827 32.1954 18.0181 32.4539 18.0435 32.7116C18.0689 32.9693 18.1828 33.2102 18.3657 33.3934C20.5977 35.6278 22.0213 38.5424 22.4115 41.6764C21.7448 42.2091 21.2068 42.8852 20.8375 43.6545C20.4682 44.4238 20.2771 45.2664 20.2783 46.1197C20.2783 46.4169 20.3964 46.7018 20.6064 46.9119C20.8165 47.122 21.1015 47.24 21.3986 47.24H34.8302C35.1273 47.24 35.4122 47.122 35.6223 46.9119C35.8324 46.7018 35.9505 46.4169 35.9505 46.1197C35.9517 45.2664 35.7606 44.4238 35.3913 43.6545C35.022 42.8852 34.484 42.2091 33.8173 41.6764C34.2107 38.5409 35.6384 35.6262 37.8746 33.3934C38.059 33.2113 38.1745 32.9709 38.2015 32.7132C38.2284 32.4555 38.1653 32.1964 38.0227 31.98V31.98ZM28.1202 31.4808C28.3415 31.482 28.5575 31.5486 28.741 31.6724C28.9245 31.7962 29.0671 31.9716 29.151 32.1764C29.2349 32.3812 29.2563 32.6062 29.2124 32.8232C29.1685 33.0401 29.0614 33.2392 28.9045 33.3953C28.7476 33.5513 28.548 33.6575 28.3308 33.7002C28.1137 33.743 27.8887 33.7205 27.6844 33.6355C27.48 33.5505 27.3054 33.407 27.1825 33.2229C27.0597 33.0388 26.9941 32.8224 26.9941 32.6011C26.9941 32.4535 27.0233 32.3073 27.0799 32.171C27.1366 32.0347 27.2196 31.911 27.3243 31.8069C27.4289 31.7028 27.5531 31.6204 27.6897 31.5644C27.8263 31.5085 27.9726 31.48 28.1202 31.4808V31.4808ZM22.7104 44.9879C22.9362 44.3222 23.3616 43.7422 23.9286 43.3268C24.4957 42.9114 25.1769 42.6807 25.8797 42.6661H30.3607C31.0635 42.6807 31.7447 42.9114 32.3118 43.3268C32.8788 43.7422 33.3042 44.3222 33.53 44.9879H22.7104ZM31.7248 40.6142C31.2791 40.5002 30.8208 40.4427 30.3607 40.4429H25.8797C25.4196 40.4427 24.9613 40.5002 24.5156 40.6142C23.9907 37.5915 22.6294 34.7763 20.586 32.4879L26.9941 22.8582V29.4318C26.2467 29.6961 25.6167 30.2161 25.2156 30.8999C24.8144 31.5837 24.6679 32.3874 24.802 33.1687C24.9361 33.9501 25.342 34.6589 25.9482 35.1699C26.5543 35.6809 27.3216 35.9612 28.1144 35.9612C28.9072 35.9612 29.6745 35.6809 30.2806 35.1699C30.8867 34.6589 31.2927 33.9501 31.4268 33.1687C31.5609 32.3874 31.4144 31.5837 31.0132 30.8999C30.6121 30.2161 29.9821 29.6961 29.2347 29.4318V22.8582L35.6486 32.4821C33.6058 34.7724 32.2464 37.5898 31.7248 40.6142V40.6142Z" fill="#ECC94B"/>
                        </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-center">
                            <h2 className="font-bold title-font text-gray-900 mb-1 text-xl font-medium">Graphic Design</h2>
                            <p className="leading-relaxed font-light text-lg">Expertized in Illustrator, InDesign, Photoshop</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-20 sm:items-center justify-center md:w-2/3 mx-auto">
                <div className="flex-grow md:pl-8 pl-6 flex items-center flex-col">
                    <div className="flex-shrink-0 mb-5 w-24 md:ml-4 h-24 bg-grey-100 bg-yellow-200 rounded-full inline-flex items-center justify-center">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 46C37.9411 46 46 37.9411 46 28C46 18.0589 37.9411 10 28 10C18.0589 10 10 18.0589 10 28C10 37.9411 18.0589 46 28 46Z" stroke="#ECC94B" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M35.8647 28L24.0674 21.1892V34.8108L35.8647 28Z" fill="#ECC94B"/>
                    </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-center">
                    <h2 className="font-bold title-font text-gray-900 mb-1 text-xl font-medium">MoGraphs</h2>
                    <p className="leading-relaxed font-light text-lg">Intermediate Knowledge in After Effects, Premiere Pro with Motion Principles</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="grid md:grid-row-2 gap-6 h-full md:h-64">
                <div className="grid md:grid-cols-4 h-full md:h-64 gap-6 row-span-1 hover:cursor-pointer ">
                    <div className="md:col-span-1 flex items-center justify-center bg-grey-200 rounded-lg overflow-hidden">
                        <a href="https://www.behance.net/gallery/94064881/Ambitious-Homes" className="transition duration-500 transform hover:scale-125">
                        <img className="h-auto" src={require("../statics/Ambitious-Homes.png")} alt="ambitious-homes-logo" />
                        </a>
                    </div>
                    <div className="md:col-span-2 flex  items-center justify-center bg-grey-100 rounded-lg overflow-hidden ">
                        <a href="https://www.behance.net/gallery/95867027/Give-Life" className="transition duration-500 transform hover:scale-125">
                            <img className="h-full w-full" src={require("../statics/Give Life.png")} alt="give-life-ngo" />
                        </a>
                    </div>
                    <div className="md:col-span-1 flex items-center justify-center bg-grey-100 rounded-lg overflow-hidden ">
                        <a href="https://www.behance.net/gallery/101546817/Perspective-Building?share=1" className="transition duration-500 transform hover:scale-150">
                        <img className="h-full w-full" src={require("../statics/Perspective.png")} alt="cubic-blocks-book-cover" />
                        </a>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 h-full md:h-64 gap-6 row-span-1">
                    <div className="md:col-span-1 flex items-center justify-center bg-grey-100 rounded-lg overflow-hidden ">
                        <a href="https://www.behance.net/gallery/101546917/Cubic-Blocks?share=1" className="transition duration-500 transform hover:scale-125">
                        <img className="h-full w-full" src={require("../statics/Cubic Blocks.png")} alt="cubic-blocks-book-cover" />
                        </a>
                    </div>
                    <div className="md:col-span-1 bg-grey-100 rounded-lg overflow-hidden ">
                    <a href="https://www.behance.net/gallery/91977943/Motion" className="transition duration-500 transform hover:scale-125">
                        <video className="h-auto md:h-full object-cover" autoPlay muted loop>
                                <source src={require("../statics/Blue.mp4")} type="video/mp4" />
                        </video>
                    </a>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-center bg-grey-100 rounded-lg overflow-hidden ">
                    <a href="https://www.behance.net/gallery/91975433/Groot-Logo-Models" className="transition duration-500 transform hover:scale-125">
                        <img  className="h-full w-full" src={require("../statics/Green-Groceries.png")} alt="give-life-ngo" />
                    </a>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
}

export default Design