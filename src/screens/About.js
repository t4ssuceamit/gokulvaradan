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
                {/* <div className="w-1/2 z-0 absolute h-full m-4 border-dashed md:rounded-lg rounded-full overflow-hidden border-2 border-yellow-400"></div> */}
            </div>
            <div className="md:col-span-1 flex flex-col md:items-start md:mb-20 items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold mt-10 md:mt-10 mb-5 font-heavy">About</h1>
                <p className="text-lg md:text-xl w-8/12 text-center md:text-left font-light tracking-normal mb-5">
                I'm from India, pursuing bachelor of engineering second year in computer science, a software and design skilled person, looking for internship programs and also willing to provide excellent service to the clients out there.
                I've worked on many projects by integrating with many Individual clients and small scaled business group.
                I'm also expert in designing more illustration works and willing to offer a full package of service. Check out <a href="https://www.behance.net/designgamuts" className="text-yellow-600">designgamuts</a> for reference.</p>
                <p className="font-light mb-2 text-gray-700 flex flex-col">Download my Resume
                <button className="flex bg-yellow-400 mt-2 font-medium rounded-lg hover:bg-yellow-600 hover:shadow-lg text-black font-bold py-3 px-4">
                    <a href="../statics/Gokul-Varadan-Resume.pdf" className="flex ml-2" download>Download<svg className="ml-2  w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                </button>
                </p>
            </div>
        </div>
    )
}
export default About;