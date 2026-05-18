

export default function Home() {


  return (
    <>    
    
    <div>
          <h1 className="text-4xl font-bold text-center mt-10">Kavintha Bandara</h1>
    </div>

    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50  dark:bg-black font-light font-sans">
        <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          Hi, I’m Kavintha Bandara, a passionate AI engineer and web developer dedicated to building intelligent, user-friendly digital experiences. I thrive at the intersection of cutting-edge technology and creative problem-solving, exploring how artificial intelligence can enhance web applications and transform the way we interact with technology.
          Whether it’s designing dynamic websites, developing AI-powered tools, or experimenting with new frameworks and algorithms, I love turning complex ideas into practical, elegant solutions. Explore my portfolio to see projects that showcase my skills, curiosity, and commitment to innovation.
            <div>
              Let’s create something amazing together.
            </div>
            
        </p>
    </div>

    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">



      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
       
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">AI Engineering</h2>
            <p className="text-gray-600 dark:text-gray-300"> I’m fascinated by artificial intelligence, from machine learning models to neural networks. I enjoy building smart systems that can analyze data, solve problems, and create innovative solutions.</p>
          </div>


          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Web Development</h2>
            <p className="text-gray-600 dark:text-gray-300">  I love creating responsive and interactive web applications. From front-end design to back-end functionality, I enjoy turning ideas into seamless, user-friendly digital experiences.</p>
          </div>
</div>
      
    </div>
  
  </>

  );
}
