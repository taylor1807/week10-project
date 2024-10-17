import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Week 10 Research App by Magda & Jonathan",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="bg-gray-200 p-10">
      <div className="bg-gray-200">
        <h1 className="bg-blue-900 text-ls rounded text-4xl text-white text-center shadow-2xl p-10">
          Week 10 Research and Documentation Project
        </h1>
      </div>
      <div className="bg-gray-200 flex items-center justify-center h-screen">
        <div className="rounded-lg shadow-2xl p-8">
          <h2 className="text-6xl font-bold text-center">
            React H5 Audioplayer and React Hook Form
          </h2>
          <br />
          <p className="text-4xl text-center">By Magda & Jonathan</p>
        </div>
      </div>
      <Link
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors absolute bottom-5 right-5 text-2xl"
        href="/planning"
      >
        Begin
      </Link>
    </div>
  );
}
