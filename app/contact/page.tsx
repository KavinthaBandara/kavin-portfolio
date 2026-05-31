

export default function Contact() {
    
    return (

        <>
        <div>
           <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-4 space-y-8 font-sans">
    

    <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-400">Get in touch with me!</p>
    </div>


    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">


        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Email 1</h2>
            <p className="text-gray-300">kavinthahasaranga2@gmail.com</p>
        </div>


        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Email 2</h2>
            <p className="text-gray-300 ">kavintha.bandara01@gmail.com</p>
        </div>


        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-300">+94 76 451 8970</p>
        </div>

  
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <a href="https://www.linkedin.com/in/kavintha-bandara-6a0304339" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                linkedin.com/in/kavintha-bandara-6a0304339
            </a>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Instagram</h2>
            <a href="https://www.instagram.com/bandara_x0/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline ">
                instagram.com/bandara_x0
            </a>
        </div>

    </div>
</div>
        </div>


        </>

);
}