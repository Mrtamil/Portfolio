import Image from "next/image";


export default function Skill() {
    return (
        <div className="p-10">
            <div className="border-1 rounded-lg p-5 mt-20">
                
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                    {[ 
                        { src: '/js.png', alt: 'JavaScript'},
                        { src: '/html.png', alt: 'HTML5' },
                        { src: '/css3.png', alt: 'CSS3' },
                        { src: '/node.png', alt: 'Node.js' },
                        { src: '/expressJS.png', alt: 'Express.js' },
                        { src: '/react.png', alt: 'React.js' },
                        { src: '/next-js.png', alt: 'Next.js' },
                        { src: '/native.png', alt: 'React Native' },
                        { src: '/php.png', alt: 'PHP' },
                        { src: '/mysql.png', alt: 'MySQL' },
                        { src: '/sqlite.png', alt: 'SQLite' },
                        { src: '/mongo.png', alt: 'MongoDB' },
                        { src: '/bootstarp.png', alt: 'Bootstrap' },
                        { src: '/tailwind.png', alt: 'Tailwind CSS' },
                        { src: '/nativewind.png', alt: 'NativeWind CSS' }
                    ].map((skill, index) => (
                        <Image key={index} src={skill.src} alt={skill.alt} width={100} height={100} className="rounded shadow-md hover:scale-110 transition-transform h-20 w-21 bg-amber-50" />
                    ))}
                </div>
            </div>
        </div>
    );
}
