export default function Bio() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 px-10 py-10 relative">
           
            <div className="w-full lg:w-1/2 border rounded-lg  p-5 shadow-lg hover:scale-110 transition-transform">
                <h2 className="text-center text-xl font-bold mb-5 text-white">About Me</h2>
                <div className="text-center">
                    <p className="leading-relaxed text-white" >I am Thillai Kavidhasu, a passionate full-stack developer with hands-on experience in building dynamic and scalable web applications. From crafting intuitive front-end interfaces to designing robust back-end architectures, I thrive in solving complex problems with clean and efficient code.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <div className="border p-4 rounded-lg  flex-1">
                        <p className="font-bold text-white">Strength</p>
                        <p className="leading-relaxed text-sm text-white">I thrive in solitude, using it as a space for deep focus, creativity, and self-improvement. My independence fuels my ability to solve problems, adapt, and continuously learn.</p>
                    </div>
                    <div className="border p-4 rounded-lg  flex-1">
                        <p className="font-bold text-white">Weakness</p>
                        <p className="leading-relaxed text-sm text-white">Communication - I try developing my communication skills.</p>
                    </div>
                </div>
            </div>
            
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center w-full lg:w-1/2 ">
               
                <div className="border rounded-lg  p-5 shadow-lg hover:scale-110 transition-transform">
                    <h2 className="text-xl font-bold mb-3 text-white">Experience</h2>
                    <p className="text-white"><span className="font-bold ">Role:</span> MERN Stack Developer Intern</p>
                    <p className="text-white"><span className="font-bold ">Location:</span> Why Global Services, Chennai</p>
                    <p className="mt-3 text-sm leading-relaxed text-white">Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Designed and implemented RESTful APIs for seamless frontend-backend communication.</p>
                </div>
                
              
                <div className="border rounded-lg  p-5 shadow-lg hover:scale-110 transition-transform">
                    <h2 className="text-xl font-bold mb-3 text-white">Education</h2>
                    <p className="text-white"><span className="font-bold ">Degree:</span> Bachelor of Computer Applications</p>
                    <p className="text-white"><span className="font-bold ">Passout Year:</span> 2021 - 2024</p>
                    <p className="text-white"><span className="font-bold ">Location:</span> Loyola College</p>
                    <p className="text-white"><span className="font-bold ">CGPA:</span> 7.4</p>
                </div>
                
              
                <div className="border rounded-lg  p-5 shadow-lg hover:scale-110 transition-transform">
                    <h2 className="text-xl font-bold mb-3 text-white">Certifications</h2>
                    <p className="text-white"><span className="font-bold ">Course:</span> MERN Stack Development</p>
                    <p className="text-white"><span className="font-bold ">Location:</span> Why Tap, Chennai</p>
                    <p className="mt-3 text-white"><span className="font-bold">Course:</span> Ethical Hacking</p>
                    <p className="text-white"><span className="font-bold">Location:</span> Infosys</p>
                </div>
                
                <div className="border rounded-lg p-5 shadow-lg hover:scale-110 transition-transform">
                    <h2 className="text-xl font-bold mb-3 text-white">Languages</h2>
                    <p className="text-white">Tamil</p>
                    <p className="text-white">English</p>
                </div>
            </div>
        </div>
    );
}