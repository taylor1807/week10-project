import Link from "next/link";
import Image from "next/image";

export default function welcome() {
    return (
        <div className="bg-gray-100 p-10">
                <h1 className="bg-blue-900 text-ls rounded text-4xl text-white text-center shadow-2xl p-10">Week 10 Research Project</h1>
            <div className="flex h-screen items-center justify-evenly gap-4 mt-[-100px]">
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                    <h2 className="text-center text-2xl pb-4">Figma</h2>
                    <Image 
                        src="/images/figma.png"
                        width={600}
                        height={600}
                        alt="figma screenshot"
                    />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                    <h2 className="text-center text-2xl pb-4">Trello</h2>
                <Image 
                    src="/images/trello.png"
                    width={600}
                    height={600}figma
                    alt="figma screenshot"
                    />
                </div>
                </div>
           
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors absolute bottom-5 right-5 text-2xl" href="/description">Next Page</Link>  
        </div>
    )
}

