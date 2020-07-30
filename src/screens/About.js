import React from 'react';

const About = () => {
    
    const images = [
        require('../statics/Gokul.png'),
      ];
    
    return (
        <div className="grid md:grid-cols-2 gap-2 bg-yellow-100 py-32">
            <div className="relative flex items-center justify-center md:col-span-1 sm:mb-12 mb-0 rounded-md h-auto md:h-64 lg:h-auto">
                <div className="w-1/2 z-10">
                    <img 
                        className="md:rounded-lg rounded-full overflow-hidden" 
                        src={images[0]}
                        alt="gokul-varadan-profile" />
                </div>
                <div className="w-1/2 z-0 absolute h-full m-4 border-dashed md:rounded-lg rounded-full overflow-hidden border-2 border-yellow-400"></div>
            </div>
            <div className="md:col-span-1 flex flex-col md:items-start md:mb-20 items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold mt-10 md:mt-10 mb-5 font-heavy">About</h1>    
                <p className="text-lg md:text-xl w-8/12 text-center md:text-left font-light tracking-normal">
                I'm from India, a software and design skilled person, willing to provide excellent service to the clients out there. 
                I have worked on more projects by integrating with many Individual clients and small scaled business group. 
                I'm also expert in designing more illustration works and willing to offer a full package of service. Check out <a href="https://www.behance.net/designgamuts" className="text-yellow-600">designgamuts</a> for reference.</p>
            </div> 
        </div>
    )
}

export default About;