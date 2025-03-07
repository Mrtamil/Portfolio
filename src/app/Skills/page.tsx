import Image from "next/image";

export default function Skill(){
    return(
        <>
        <div className="grid grid-cols-1 gap-2 p-10">
            <div className="h-189 w-full border-1 ">
                <h2 className="text-white text-center p-5 font-bold">Tech_Skills_</h2>
                
                <div className="grid grid-cols-7 gap-10 m-25">
                    <Image src="/js.png" alt="javascript"  width={80} height={80}></Image>
                    <Image src="/html.png" alt="HTML5"  width={80} height={80}></Image>
                    <Image src="/css3.png" alt="css3"  width={80} height={80}></Image>
                    <Image src="/node.png" alt="node"  width={80} height={80}></Image>
                    <Image src="/expressJS.png" alt="express"  width={80} height={80}></Image>
                    <Image src="/react.png" alt="reactjs"  width={80} height={80}></Image>
                    <Image src="/next-js.png" alt="nextjs"  width={80} height={80}></Image>
                    <Image src="/native.png" alt="react native"  width={80} height={80}></Image>
                    <Image src="/php.png" alt="php"  width={80} height={80}></Image>
                    <Image src="/mysql.png" alt="mysql"  width={80} height={80}></Image>
                    <Image src="/sqlite.png" alt="sqlite"  width={80} height={80}></Image>
                    <Image src="/mongo.png" alt="mongo"  width={80} height={80}></Image>
                    <Image src="/bootstarp.png" alt="bootstarp"  width={80} height={80}></Image>
                    <Image src="/tailwind.png" alt="tailwind"  width={80} height={80}></Image>
                    <Image src="/nativewind.png" alt="nativewind"  width={80} height={80}></Image>
                </div>
            </div>
           
        </div>
        </>
    )
}