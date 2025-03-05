export default function Bio(){
 return(
    <>
    <div className="flex gap-10 px-25 py-10 ">
        <div className="h-189 w-180 border-1 ">
        <h2  className="text-white text-center py-5 font-bold">About_Me_</h2>
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