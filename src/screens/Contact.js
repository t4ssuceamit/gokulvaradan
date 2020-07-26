import React from 'react'
import {RoughNotation} from  'react-rough-notation'

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-800 h-full py-16" id="#contact">
            <div className="flex flex-1 flex-col justify-center items-center mb-10">
                <h1 className="text-4xl font-bold mb-5 text-white">Let's Get in Touch</h1>
                <form action="#" method="post" className="flex flex-col justify-center items-center mb-5">
                <input className="w-64 p-2 h-10 rounded-lg mb-4" type="text" placeholder="email..."/>
                <button type="submit" className="bg-yellow-400 rounded-lg hover:bg-yellow-600 hover:shadow-lg text-black font-bold py-2 px-4 rounded">Send</button>
                </form>
                <p className="text-white text-lg">You can also Contact me on:{' '}
                <RoughNotation variants="underline" show="true">
                <a className="font-bold" href="mailto:gokulvaradan2202@gmail.com">gokulvaradan2202@gmail.com</a>
                </RoughNotation> 
                </p>
            </div>
            <div className="flex flex-1 w-screen flex-row justify-between border-t-2 h-20">
                <div className="container mx-auto flex items-center justify-between mt-10">
                <div className="flex">
                    <p className="text-white text-lg font-bold">Gokul Varadan</p>
                </div>
                <div className='flex flex-row space-x-2'>
                    <a href="https://www.linkedin.com/in/gokulvaradan" target="_blank" rel="noopener noreferrer">
                        <svg width="32" height="52" viewBox="0 0 62 62" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 55.5C43.1878 55.5 55.5 43.1878 55.5 28C55.5 12.8122 43.1878 0.5 28 0.5C12.8122 0.5 0.5 12.8122 0.5 28C0.5 43.1878 12.8122 55.5 28 55.5Z" fill="#fff"/>
                            <path d="M20.6 40.6999V23.8999H15.4V40.6999H20.6ZM20.6 17.9999C20.6 16.4999 19.6 15.3999 17.9 15.3999C16.3 15.3999 15.2 16.4999 15.2 17.9999C15.2 19.4999 16.2 20.5999 17.8 20.5999C19.5 20.5999 20.6 19.3999 20.6 17.9999ZM29 40.6999V31.0999C29 30.5999 29 30.0999 29.2 29.6999C29.6 28.6999 30.5 27.5999 32.1 27.5999C34.2 27.5999 35.4 28.7999 35.4 31.0999V40.6999H40.6V30.8999C40.6 25.5999 37.8 23.1999 34.1 23.1999C31 23.1999 29.7 24.8999 28.9 26.0999V23.8999H23.7C23.8 25.4999 23.7 40.7999 23.7 40.7999H29V40.6999Z" fill="#2D3748"/>
                        </svg>
                    </a>
                    <a href="https://in.pinterest.com/gokulvaradan/" target="_blank" rel="noopener noreferrer">
                        <svg width="32" height="52" viewBox="0 0 62 62" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 0.5C12.8 0.5 0.5 12.8 0.5 28C0.5 39.3 7.3 48.9 17 53.2C16.9 51.3 17 49 17.5 46.9C18 44.7 21 31.9 21 31.9C21 31.9 20.1 30.1 20.1 27.5C20.1 23.4 22.5 20.4 25.4 20.4C27.9 20.4 29.1 22.3 29.1 24.5C29.1 27 27.5 30.8 26.7 34.3C26 37.2 28.2 39.6 31 39.6C36.2 39.6 39.7 32.9 39.7 25C39.7 19 35.6 14.5 28.3 14.5C20 14.5 14.8 20.7 14.8 27.7C14.8 30.1 15.5 31.8 16.6 33.1C17.1 33.7 17.2 33.9 17 34.6C16.9 35.1 16.6 36.3 16.4 36.8C16.2 37.5 15.7 37.7 15 37.5C11.2 35.9 9.4 31.7 9.4 27C9.4 19.2 16 9.8 29.1 9.8C39.6 9.8 46.5 17.4 46.5 25.6C46.5 36.4 40.5 44.4 31.7 44.4C28.7 44.4 25.9 42.8 25 41C25 41 23.4 47.3 23.1 48.6C22.5 50.7 21.4 52.8 20.3 54.5C22.8 55.2 25.4 55.6 28.1 55.6C43.3 55.6 55.6 43.3 55.6 28.1C55.5 12.8 43.2 0.5 28 0.5Z" fill="#fff"/>
                        </svg>
                    </a>
                    <a href="https://dribbble.com/designgamuts" target="_blank" rel="noopener noreferrer">
                        <svg width="32" height="52" viewBox="0 0 62 62" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 55.5C12.8 55.5 0.5 43.2 0.5 28C0.5 12.8 12.8 0.5 28 0.5C43.2 0.5 55.5 12.8 55.5 28C55.5 43.2 43.2 55.5 28 55.5ZM51.2 31.8C50.4 31.5 43.9 29.6 36.6 30.8C39.7 39.2 40.9 46.1 41.2 47.5C46.4 43.9 50.2 38.3 51.2 31.8ZM37.2 49.7C36.8 47.6 35.5 40.5 32.2 31.9H32C18.7 36.5 14 45.7 13.6 46.6C17.6 49.7 22.6 51.6 28 51.6C31.3 51.5 34.4 50.9 37.2 49.7ZM10.5 43.7C11 42.8 17.5 32.1 29.6 28.2C29.9 28.1 30.2 28 30.5 27.9C29.9 26.6 29.3 25.2 28.6 23.9C16.9 27.4 5.5 27.3 4.5 27.3V28C4.5 34.1 6.8 39.6 10.5 43.7ZM5 23.2C6.1 23.2 15.7 23.3 26.7 20.3C22.8 13.4 18.6 7.6 18 6.7C11.4 9.9 6.5 15.9 5 23.2ZM22.5 5.2C23.1 6.1 27.4 11.9 31.3 19C39.7 15.9 43.2 11.1 43.6 10.5C39.5 6.8 34 4.6 28 4.6C26.1 4.5 24.3 4.8 22.5 5.2ZM46.2 13.2C45.7 13.9 41.8 18.9 33.1 22.5C33.6 23.6 34.2 24.8 34.7 25.9C34.9 26.3 35 26.7 35.2 27.1C43 26.1 50.8 27.7 51.6 27.9C51.4 22.3 49.4 17.2 46.2 13.2Z" fill="#fff"/>
                        </svg>
                    </a>
                    <a href="https://www.behance.net/designgamuts" target="_blank" rel="noopener noreferrer">
                        <svg width="32" height="52" viewBox="0 0 62 62" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.8 25.2002C35.3 25.2002 34.8 28.7002 34.8 28.7002H42.3C42.3 28.8002 42.4 25.2002 38.8 25.2002Z" fill="#fff"/>
                            <path d="M21.7 28.8002H15V34.9002H21C21.1 34.9002 21.3 34.9002 21.4 34.9002C22.4 34.9002 24.2 34.6002 24.2 31.9002C24.1 28.7002 21.7 28.8002 21.7 28.8002Z" fill="#fff"/>
                            <path d="M28 0.5C12.8 0.5 0.5 12.8 0.5 28C0.5 43.2 12.8 55.5 28 55.5C43.2 55.5 55.5 43.2 55.5 28C55.5 12.8 43.2 0.5 28 0.5ZM33.8 17.4H43.3V20.2H33.8V17.4ZM29 32.2C29 39.2 21.7 39 21.7 39H15H14.8H9.7V16H14.8H15H21.7C25.3 16 28.2 18 28.2 22.1C28.2 26.2 24.7 26.5 24.7 26.5C29.3 26.5 29 32.2 29 32.2ZM46.7 31.8H34.8C34.8 36.1 38.8 35.8 38.8 35.8C42.6 35.8 42.5 33.3 42.5 33.3H46.5C46.5 39.9 38.6 39.4 38.6 39.4C29.2 39.4 29.8 30.6 29.8 30.6C29.8 30.6 29.8 21.8 38.6 21.8C48 21.9 46.7 31.8 46.7 31.8Z" fill="#fff"/>
                            <path d="M23.3 22.5001C23.3 20.1001 21.7 20.1001 21.7 20.1001H20.8H15V25.2001H21.3C22.4 25.2001 23.3 24.9001 23.3 22.5001Z" fill="#fff"/>
                        </svg>
                       
                    </a>    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact