import React from 'react';
import {motion} from 'framer-motion'
import HeaderLogo from '../statics/svg/HeaderLogo'


function Header(){
    return (
        <motion.div  
            animate={{ y: 10 }}
            transition={{ease: 'easeIn'}}
            className="flex flex-1 h-20 flex-row items-center">
            <div className="container mx-auto">
                <HeaderLogo  width="50" height="50" viewBox="0 0 90 50" />
                
            </div>
        </motion.div>
    )
}

export default Header