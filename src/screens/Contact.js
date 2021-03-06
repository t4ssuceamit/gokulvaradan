import React from 'react'
import firebaseInit from '../config/firebaseInit'

const Contact = () => {
    const db = firebaseInit.firestore()
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const [mail, setMail] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    const [info, setInfo] = React.useState('')
    function pushMail(){
        if(!pattern.test(mail)){
            setInfo('Mail is Required!')
            setTimeout(() => {
                setInfo('')
            }, 3000)
            return
        }
        db.collection('portfolio-data').add(
            {
                mail
            }
        ).then(res => {
            if(res){
                setMail('')
                setSuccess(true)
                setInfo("We'll catch up soon...😊")
                setTimeout(() => {
                    setInfo('')
                }, 3000)
            }else{
                setInfo("Sorry, Something went wrong!")
            }
        }).catch(err => {
            setInfo('Sorry, Something went wrong!')
        })
    }
    const handelMail = (e) => {
        setInfo('Enter a valid Mail ID')
        setMail(e.target.value)
        if(pattern.test(mail)){
            setInfo('')
        }
    }
    return (
        <div className="flex flex-col justify-center items-center bg-gray-800 h-full py-16" id="#contact">
            <div className="flex flex-1 flex-col justify-center items-center text-center mb-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-5 text-white font-heavy">Let's Get in Touch</h1>
                <div className="flex flex-col justify-center items-center mb-5">
                    <input type="email" value={mail} onChange={(e) => handelMail(e)} className="w-64 font-light p-6 h-10 outline-none border-gray-400 focus:border-indigo-500 rounded-lg mb-4" placeholder="email..."/>
                    {info && <p className={success ? "text-green-400 mb-5" : "text-yellow-400 mb-5"}>{info}</p>}
                    <button onClick={() => pushMail()} className="bg-yellow-400 font-medium rounded-lg hover:bg-yellow-600 hover:shadow-lg text-black font-bold py-2 px-4">Send</button>
                </div>
                <p className="text-white text-center text-lg md:text-xl font-medium">You can also Contact me on:{' '}
                    <a className="font-bold tracking-wide" href="mailto:gokulvaradan2202@gmail.com">gokulvaradan2202@gmail.com</a>
                </p>
            </div>
            <div className="flex flex-1 w-screen md:flex-row flex-col justify-between border-t-2 h-20">
                <div className="container mx-auto flex md:flex-row md:mb-0 flex-col items-center justify-between mt-10">
                <div className="flex mb-5 md:mb-0">
                    <p className="text-white text-lg font-medium">Crafted with ❤ by Gokul</p>
                </div>
                <div className='flex flex-row space-x-5 md:space-x-2'>
                <a href="https://twitter.com/gokul_varadan">
                <svg width="32" height="52" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 0C12.5236 0 0 12.5236 0 28C0 43.4764 12.5236 56 28 56C43.4764 56 56 43.4764 56 28C56 12.5236 43.4764 0 28 0ZM42.1527 22.4C42.1527 22.7055 42.1527 23.0109 42.1527 23.3164C42.1527 32.6836 35.0255 43.3746 22.0946 43.3746C18.1236 43.3746 14.3564 42.2546 11.3018 40.2182C11.8109 40.32 12.4218 40.32 13.0327 40.32C16.2909 40.32 19.3455 39.2 21.7891 37.2655C18.7346 37.1636 16.0873 35.1273 15.1709 32.3782C15.5782 32.48 16.0873 32.48 16.4945 32.48C17.1055 32.48 17.7164 32.3782 18.3273 32.2764C15.0691 31.6655 12.6255 28.8146 12.6255 25.3527V25.2509C13.5418 25.76 14.6618 26.0655 15.7818 26.1673C13.8473 24.9455 12.6255 22.7055 12.6255 20.2618C12.6255 18.9382 12.9309 17.7164 13.5418 16.6982C17.0036 20.9746 22.1964 23.8255 28.1018 24.0291C28 23.52 27.8982 23.0109 27.8982 22.4C27.8982 18.5309 31.0546 15.3745 34.9236 15.3745C36.96 15.3745 38.7927 16.1891 40.1164 17.6145C41.7455 17.3091 43.2727 16.6982 44.5964 15.8836C44.0873 17.5127 42.9673 18.9382 41.5418 19.7527C42.9673 19.5491 44.2909 19.2436 45.6146 18.6327C44.6982 20.16 43.4764 21.3818 42.1527 22.4Z" fill="white"/>
                </svg>
                </a> 
                <a href="https://github.com/gokulcodes">
                    <svg width="32" height="52" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="white"/>
                        <path d="M23.7751 44.1535C23.7751 43.7528 23.7751 42.6511 23.7751 41.1486C19.0473 42.1502 18.0414 38.8449 18.0414 38.8449C17.2367 36.8417 16.1302 36.3409 16.1302 36.3409C14.6213 35.2391 16.2308 35.2391 16.2308 35.2391C17.9408 35.3393 18.8462 37.042 18.8462 37.042C20.355 39.7464 22.8698 38.9451 23.7751 38.4443C23.9763 37.3425 24.3787 36.5412 24.8817 36.1406C21.0592 35.7399 17.1361 34.2375 17.1361 27.5267C17.1361 25.6236 17.8402 24.1212 18.8462 22.8191C18.645 22.4184 18.0414 20.6155 19.0473 18.2116C19.0473 18.2116 20.4556 17.7108 23.7751 20.0145C25.0828 19.6139 26.5917 19.4136 28 19.4136C29.4083 19.4136 30.9172 19.6139 32.2249 20.0145C35.4438 17.811 36.8521 18.2116 36.8521 18.2116C37.7574 20.6155 37.1538 22.4184 37.0533 22.8191C38.1598 24.021 38.7633 25.6236 38.7633 27.5267C38.7633 34.2375 34.7396 35.6397 31.0177 36.1406C31.6213 36.6414 32.1243 37.7431 32.1243 39.3457C32.1243 41.6494 32.1243 43.5525 32.1243 44.1535C32.1243 44.6543 32.426 45.1551 33.3314 44.9548C40.071 42.6511 45 36.1406 45 28.4281C45 18.8126 37.355 11 28 11C18.645 11 11 18.8126 11 28.4281C11 36.1406 15.8284 42.6511 22.6686 44.9548C23.4734 45.1551 23.7751 44.5541 23.7751 44.1535Z" fill="#2D3748"/>
                    </svg>
                    </a> 
                    <a href="https://www.linkedin.com/in/gokulvaradan">
                        <svg width="32" height="52" viewBox="0 0 62 62" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 55.5C43.1878 55.5 55.5 43.1878 55.5 28C55.5 12.8122 43.1878 0.5 28 0.5C12.8122 0.5 0.5 12.8122 0.5 28C0.5 43.1878 12.8122 55.5 28 55.5Z" fill="#fff"/>
                            <path d="M20.6 40.6999V23.8999H15.4V40.6999H20.6ZM20.6 17.9999C20.6 16.4999 19.6 15.3999 17.9 15.3999C16.3 15.3999 15.2 16.4999 15.2 17.9999C15.2 19.4999 16.2 20.5999 17.8 20.5999C19.5 20.5999 20.6 19.3999 20.6 17.9999ZM29 40.6999V31.0999C29 30.5999 29 30.0999 29.2 29.6999C29.6 28.6999 30.5 27.5999 32.1 27.5999C34.2 27.5999 35.4 28.7999 35.4 31.0999V40.6999H40.6V30.8999C40.6 25.5999 37.8 23.1999 34.1 23.1999C31 23.1999 29.7 24.8999 28.9 26.0999V23.8999H23.7C23.8 25.4999 23.7 40.7999 23.7 40.7999H29V40.6999Z" fill="#2D3748"/>
                        </svg>
                    </a>
                    <a href="https://in.pinterest.com/gokulvaradan/">
                        <svg width="32" height="52" viewBox="0 0 62 62" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 0.5C12.8 0.5 0.5 12.8 0.5 28C0.5 39.3 7.3 48.9 17 53.2C16.9 51.3 17 49 17.5 46.9C18 44.7 21 31.9 21 31.9C21 31.9 20.1 30.1 20.1 27.5C20.1 23.4 22.5 20.4 25.4 20.4C27.9 20.4 29.1 22.3 29.1 24.5C29.1 27 27.5 30.8 26.7 34.3C26 37.2 28.2 39.6 31 39.6C36.2 39.6 39.7 32.9 39.7 25C39.7 19 35.6 14.5 28.3 14.5C20 14.5 14.8 20.7 14.8 27.7C14.8 30.1 15.5 31.8 16.6 33.1C17.1 33.7 17.2 33.9 17 34.6C16.9 35.1 16.6 36.3 16.4 36.8C16.2 37.5 15.7 37.7 15 37.5C11.2 35.9 9.4 31.7 9.4 27C9.4 19.2 16 9.8 29.1 9.8C39.6 9.8 46.5 17.4 46.5 25.6C46.5 36.4 40.5 44.4 31.7 44.4C28.7 44.4 25.9 42.8 25 41C25 41 23.4 47.3 23.1 48.6C22.5 50.7 21.4 52.8 20.3 54.5C22.8 55.2 25.4 55.6 28.1 55.6C43.3 55.6 55.6 43.3 55.6 28.1C55.5 12.8 43.2 0.5 28 0.5Z" fill="#fff"/>
                        </svg>
                    </a>
                    <a href="https://dribbble.com/designgamuts">
                        <svg width="32" height="52" viewBox="0 0 62 62" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 55.5C12.8 55.5 0.5 43.2 0.5 28C0.5 12.8 12.8 0.5 28 0.5C43.2 0.5 55.5 12.8 55.5 28C55.5 43.2 43.2 55.5 28 55.5ZM51.2 31.8C50.4 31.5 43.9 29.6 36.6 30.8C39.7 39.2 40.9 46.1 41.2 47.5C46.4 43.9 50.2 38.3 51.2 31.8ZM37.2 49.7C36.8 47.6 35.5 40.5 32.2 31.9H32C18.7 36.5 14 45.7 13.6 46.6C17.6 49.7 22.6 51.6 28 51.6C31.3 51.5 34.4 50.9 37.2 49.7ZM10.5 43.7C11 42.8 17.5 32.1 29.6 28.2C29.9 28.1 30.2 28 30.5 27.9C29.9 26.6 29.3 25.2 28.6 23.9C16.9 27.4 5.5 27.3 4.5 27.3V28C4.5 34.1 6.8 39.6 10.5 43.7ZM5 23.2C6.1 23.2 15.7 23.3 26.7 20.3C22.8 13.4 18.6 7.6 18 6.7C11.4 9.9 6.5 15.9 5 23.2ZM22.5 5.2C23.1 6.1 27.4 11.9 31.3 19C39.7 15.9 43.2 11.1 43.6 10.5C39.5 6.8 34 4.6 28 4.6C26.1 4.5 24.3 4.8 22.5 5.2ZM46.2 13.2C45.7 13.9 41.8 18.9 33.1 22.5C33.6 23.6 34.2 24.8 34.7 25.9C34.9 26.3 35 26.7 35.2 27.1C43 26.1 50.8 27.7 51.6 27.9C51.4 22.3 49.4 17.2 46.2 13.2Z" fill="#fff"/>
                        </svg>
                    </a>
                    <a href="https://www.behance.net/designgamuts">
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