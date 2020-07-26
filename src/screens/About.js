import React from 'react';

const About = () => {
    return (
        <div className="grid grid-cols-2 bg-gray-100 py-32" id="#about">
            <div className="flex items-center justify-center col-span-1 rounded-md">
                <div className="w-64">
                <img className="rounded-lg hover:shadow-md" src={require('../statics/Gokul.png')} alt="gokul-varadan-profile" />
                </div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-center">
                <h1 className="text-4xl font-bold mb-5">About</h1>    
                <p className="text-xl w-8/12 text-left">I'm Gokul Varadan, a software expert who was willing provide excellent services to the clients out there. I have worked on more projects by integrating with many Individual clients and small scaled business group.  I'm also expert in designing more illustrator works and willing to offer a full package of service.</p>
            </div> 
        </div>
    )
}

export default About;