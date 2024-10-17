import Link from "next/link";
import Image from "next/image";

export default function DescriptionPage() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen text-3x pt-[80px]">
        <h1 className="bg-blue-900 text-ls rounded text-4xl text-white p-10 text-center">
          React H5 Audioplayer and React Hook Form
        </h1>
        <div>
          <div>
            <Image
              src="/images/FormDemo.png"
              width={400}
              height={400}
              alt="screenshot of a demo of what the form does"
            />
          </div>
          <div>
            <Image
              src="/images/formspecs.png"
              width={400}
              height={400}
              alt="screenshot of the specs of the form package"
            />
          </div>
          <div>
            <Link
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors  text-2xl"
              href="https://react-hook-form.com/"
            >
              React Hook Form Docs
            </Link>
          </div>
          <div>
            <Image
              src="/images/audioHome.png"
              width={400}
              height={400}
              alt="screenshot of the audio player home page"
            />
          </div>
          <div>
            <Image
              src="/images/audiocustiom.png"
              width={400}
              height={400}
              alt="screenshot of the audio player customizations"
            />
          </div>
          <div>
            <Link
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors  text-2xl"
              href="https://www.npmjs.com/package/react-h5-audio-player"
            >
              React H5 Audio Player Docs
            </Link>
          </div>
        </div>
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
