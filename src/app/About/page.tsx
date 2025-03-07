export default function Bio(){
 return(
    <>
    <div className="flex gap-10 px-25 py-10 ">
        <div className="h-189 w-180 border-1 ">
        <h2  className="text-white text-center py-5 font-bold">About_Me_</h2>
        <div className="text-center justify-center">
        <span className="text-white leading-relaxed">
           <p> I am Thillai Kavidhasu, a passionate full-stack developer with hands-on</p> 
            <p>experience in building dynamic and scalable web applications. </p>
            <p>From crafting intuitive front-end interfaces to designing robust back-end architectures,</p> 
            <p>I thrive in solving complex problems with clean and efficient code. </p>
            <p>My ability to work independently has shaped me into a self-reliant and adaptable developer,</p> 
            <p>always eager to learn and innovate. Whether it&apos;s developing feature-rich applications </p>
            <p>or optimizing performance, I turn challenges into opportunities for growth.</p>
            </span>
            </div>
        <div className="flex gap-2 mt-75 ml-3">
            <div className=" border-1 h-50 w-85 text-center ">
                <p className="text-white font-bold">Strength_</p>
                <span className="text-white leading-relaxed">I thrive in solitude, using it as a space for deep focus, creativity, and self-improvement. 
                    My independence fuels my ability to solve problems, adapt, and continuously learn. 
                    Every challenge I face alone strengthens my skills and determination.</span>
            </div>
            <div className=" border-1 h-50 w-85 text-center ">
                <p className="text-white font-bold">Weakness_</p>
                <span className="text-white leading-relaxed">Communication - I Try developing my Communication.</span>
            </div>
           
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
            <div className="h-92 w-120 border-1  ">
                <h2  className="text-white text-center py-5 font-bold">Expriences_</h2>
               <p className="text-white pt-2"> <span className="font-bold">Role :</span> MERN Stack Developer Intern_ </p>
               <p className="text-white pt-1 "><span className="font-bold">Location :</span> Why Global Services, Chennai_ </p>
                <div className="p-10">
                <span className=" text-white leading-relaxed">Developed full-stack web applications using MongoDB, Express.js, 
                      React.js, and Node.js. Designed and implemented RESTful APIs for 
                      seamless frontend-backend communication. Collaborated with senior 
                      developers to follow best practices in code structuring and version 
                      control (Git/GitHub). </span>
                </div>
            </div>
            <div className="h-92 w-120 border-1">
            <h2  className="text-white text-center py-5 font-bold">Eduction_</h2>
            <p className="text-white pt-2"> <span className="font-bold">Degree :</span> Bachelor of Computer Applications_ </p>
            <p className="text-white pt-2"> <span className="font-bold">PassOut Year :</span> 2021 - 2024_ </p>
            <p className="text-white pt-1 "><span className="font-bold">Location :</span> Loyola College_</p>
            <p className="text-white pt-1 "><span className="font-bold">CGPA : </span>7.4%_</p>
            </div>
            <div className="h-92 w-120 border-1">
            <h2  className="text-white text-center py-5 font-bold">Certification_</h2>
            <p className="text-white pt-2"> <span className="font-bold">Cource :</span> MERN Stack Development_ </p>
            <p className="text-white pt-1 "><span className="font-bold">Location :</span> Why Tap, Chennai_ </p>
            <div className="mt-4">
            <p className="text-white pt-2"> <span className="font-bold">Cource :</span> Ethical Hacking_ </p>
            <p className="text-white pt-1 "><span className="font-bold">Location :</span> Infosys_ </p>
            </div>

            </div>
            <div className="h-92 w-120 border-1">
            <h2  className="text-white text-center py-5 font-bold">Language_</h2>
            <p className="text-white pt-2"> Tamil_ </p>
            <p className="text-white pt-1 "> English_ </p>
            </div>
        </div>
    </div>
    </>
    );
}