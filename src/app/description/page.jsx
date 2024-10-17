import Link from "next/link";
import Image from "next/image";

export default function DescriptionPage() {
  return (
    <div className="bg-gray-100 p-10">
      <h1 className="bg-blue-900 text-ls rounded text-4xl text-white text-center shadow-2xl p-10 mb-10">
        React H5 Audioplayer and React Hook Form
      </h1>
      <div className="bg-stone-300 p-8 rounded-lg shadow-2xl mb-10">
        <div className="grid grid-cols-2 gap-6">
          <Image
            className="shadow-2xl"
            src="/images/FormDemo.png"
            width={600}
            height={600}
            alt="screenshot of a demo of what the form does"
          />
          <Image
            className="shadow-2xl"
            src="/images/formspecs.png"
            width={800}
            height={800}
            alt="screenshot of the specs of the form package"
          />
        </div>
        <div className="mt-6 text-center">
          <Link
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-2xl"
            href="https://react-hook-form.com/"
          >
            React Hook Form Docs
          </Link>
        </div>
      </div>
      <div className="bg-stone-300 p-8 rounded-lg shadow-2xl">
        <div className="grid grid-cols-2 gap-6">
          <Image
            className="shadow-2xl"
            src="/images/audioHome.png"
            width={400}
            height={400}
            alt="screenshot of the audio player home page"
          />
          <Image
            className="shadow-2xl"
            src="/images/audiocustiom.png"
            width={600}
            height={600}
            alt="screenshot of the audio player customizations"
          />
        </div>
        <div className="mt-6 text-center">
          <Link
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-2xl"
            href="https://www.npmjs.com/package/react-h5-audio-player"
          >
            React H5 Audio Player Docs
          </Link>
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
