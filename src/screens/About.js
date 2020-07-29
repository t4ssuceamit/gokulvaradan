import React from 'react';


const About = () => {
    const images = [
        require('../statics/Gokul.png'),
        require('../statics/Gokul-Stage.png'),
      ];
    return (
        <div className="grid md:grid-cols-2 gap-2 bg-yellow-100 py-32" id="#about">
            <div className="relative flex items-center justify-center md:col-span-1 sm:mb-12 mb-0 rounded-md h-auto md:h-64 lg:h-auto">
                <div className="w-1/2 z-30">
                    <img 
                        className="md:rounded-lg hover:shadow-md rounded-full overflow-hidden" 
                        src={images[0]}
                        alt="gokul-varadan-profile" />
                </div>
                <div className="w-1/2 z-0 absolute h-full m-4 border-dashed md:rounded-lg rounded-full overflow-hidden border-2 border-yellow-400"></div>
            </div>
            <div className="md:col-span-1 flex flex-col md:items-start md:mb-20 items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold mt-10 md:mt-10 mb-5 font-heavy">About</h1>    
                <p className="text-lg md:text-xl w-8/12 text-center md:text-left font-light tracking-normal">I'm Gokul Varadan, a software expert who was willing provide excellent services to the clients out there. I have worked on more projects by integrating with many Individual clients and small scaled business group.  I'm also expert in designing more illustrator works and willing to offer a full package of service.</p>
            </div> 
        </div>
    )
}

export default About;