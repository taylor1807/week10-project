import Link from "next/link";
import Image from "next/image";

export default function welcome() {
    return (
        <div className="flex flex-col p-8 text-3x">
            <h1 className="">Week 10 Research Project</h1>
            <div className="flex justify-center ">
            <Image 
                src="/images/figma.png"
                width={500}
                height={500}
                alt="figma screenshot"
                />
            <Image 
                src="/images/figma.png"
                width={400}
                height={400}
                alt="figma screenshot"
                />
            </div>
           
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors absolute bottom-5 right-5 text-2xl" href="/description">Next Page</Link>  
        </div>
    )
}

