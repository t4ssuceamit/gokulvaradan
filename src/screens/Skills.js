import React from 'react' 
import Development from '../components/Development'
import Design from '../components/Design'


const SKills = () => {
    const [development, setDevelopment] = React.useState(true)
    const [design, setDesign] = React.useState(false)
    React.useEffect(() => {
        if(development){
            document.getElementById("design").classList.remove('bg-yellow-500', "text-white")
            document.getElementById("dev").classList.add('bg-yellow-500', "text-white")
        }else{
            document.getElementById("dev").classList.remove('bg-yellow-500',"text-white")
            document.getElementById("design").classList.add('bg-yellow-500', "text-white")
        }
    }, [development, design])
    function handleDevelopment() {
        setDesign(false)
        setDevelopment(true)
    }
    function handleDesign(){
        setDevelopment(false)
        setDesign(true)
    }
    return (
        <div className="flex flex-col justify-center items-center py-24 bg-gray-100 ">
            <h1 className="text-2xl md:text-4xl mb-2 font-heavy">Skills</h1>
            <p className="text-lg md:text-xl text-center mb-4 font-light">Demonstration of my skills with Real Clients</p>
            <div className="flex mx-auto border-2 border-yellow-500 rounded-full overflow-hidden mt-6 mb-10 transform sm:scale-110 hover:scale-120">
                <button className="py-2 px-4 rounded-full focus:outline-none font-medium focus:text-white" onClick={() => handleDevelopment()} id="dev">Development</button>
                <button className="py-2 px-4 rounded-full focus:outline-none font-medium focus:text-white" onClick={() => handleDesign()} id="design">Design</button>
            </div>
            <div className="flex h-full justify-center items-center">
                {development && (
                    <Development />
                )}
                {design && (
                    <Design />
                )}
            </div>
        </div>
    )
}

export default SKills