import React from 'react'
import {motion} from 'framer-motion'

function Design() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ ease: "easeOut", duration: 0.6}} 
        className="flex flex-col justify-center items-center w-9/12 pb-64 h-full">
            <p className="text-lg w-full text-center mb-8">
               Good Design is key to every product success. When a product is build with both good Design Principles and Technical Stack, 
                it always lead to success. I'm experienced to work in top softwares in design industries like Figma, Adobe XD, Adobe Illustrator, 
                Adobe Photoshop, Adobe After Effects and Adobe Premiere Pro.
            </p>
            <div className="grid grid-row-2 w-full gap-6 h-64">
                <div className="grid grid-cols-4 h-56 gap-6 row-span-1">
                    <div className="col-span-1 bg-yellow-200">

                    </div>
                    <div className="col-span-2 bg-yellow-200">

                    </div>
                    <div className="col-span-1 bg-yellow-200">

                    </div>
                </div>
                <div className="grid grid-cols-4 h-56 gap-6 row-span-1">
                    <div className="col-span-1 bg-yellow-200">

                    </div>
                    <div className="col-span-1 bg-yellow-200">

                    </div>
                    <div className="col-span-2 bg-yellow-200">

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Design