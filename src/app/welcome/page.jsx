import Link from "next/link";
import Image from "next/image";

export default function welcome() {
    return (
        <div className="bg-gray-100 h-screen text-3x pt-[80px]">
            <h1 className="bg-blue-900 text-ls rounded text-4xl text-white p-10 text-center">Week 10 Research Project</h1>
            <div className="flex h-screen items-center justify-evenly">
                <div>
                    <h2>Figma</h2>
                    <Image 
                        src="/images/figma.png"
                        width={500}
                        height={500}
                        alt="figma screenshot"
                    />
                </div>
                <div>
                    <h2>Trello</h2>
                <Image 
                    src="/images/figma.png"
                    width={500}
                    height={500}
                    alt="figma screenshot"
                    />
                </div>
                </div>
           
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors absolute bottom-5 right-5 text-2xl" href="/description">Next Page</Link>  
        </div>
    )
}

