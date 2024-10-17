import Link from "next/link";
import Image from "next/image";

export default function decriptionPage() {
  return (
    <div>
      <div>
        <h1>React H5 Audioplayer and React Hook Form</h1>
      </div>
      <div>
        <Image
          src="/images/figma.png"
          width={400}
          height={400}
          alt="figma screenshot"
        />
      </div>
      <div>
        <Image
          src="/images/figma.png"
          width={400}
          height={400}
          alt="figma screenshot"
        />
      </div>
      <div>
        <Link
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors absolute bottom-5 right-5 text-2xl"
          href="/info"
        >
          Next Page
        </Link>
      </div>
    </div>
  );
}
