import Image from 'next/image'

export default function Project() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 mt-30 sm:p-5">
            {[ 
                { img: '/p-1.png', title: 'Hospital Management System', frontend: 'React JS, Tailwind CSS', backend: 'Express JS, Node JS', database: 'MongoDB' },
                { img: '/hms.png', title: 'Bus Ticket Booking System', frontend: 'React JS, Tailwind CSS', backend: 'Express JS, Node JS', database: 'MongoDB' },
                { img: '/p-2.png', title: 'Spotify Clone', frontend: 'React Native, NativeWind CSS', backend: 'Express JS, Node JS', database: 'MongoDB' },
                { img: '/p-2.png', title: 'Spotify Clone', frontend: 'React Native, NativeWind CSS', backend: 'Express JS, Node JS', database: 'MongoDB' }
            ].map((project, index) => (
                <div key={index} className="border rounded-lg  p-5 hover:scale-110 transition-transform">
                    <a href="https://doctoruser.whydev.in/" className="block text-center">
                        <Image src={project.img} alt={project.title} height={200} width={200} className="mx-auto rounded " />
                        <div className="p-4">
                            <p className="font-bold text-lg text-white">{project.title}</p>
                            <p className="text-sm mt-2 text-white">Frontend: {project.frontend}</p>
                            <p className="text-sm mt-1 text-white">Backend: {project.backend}</p>
                            <p className="text-sm mt-1 text-white">Database: {project.database}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
