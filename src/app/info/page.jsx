import Link from "next/link";

export default function info() {
    return (
        <div className="bg-gray-100 p-10">
            <h1 className="bg-blue-900 text-ls rounded text-4xl text-white text-center shadow-2xl p-10">How to install, benefits & use-cases </h1>
            <div className="flex h-screen items-center justify-evenly mt-[-100px] text-l"> 
                <div className=" bg-white p-10 rounded-lg shadow-2xl">
                    <h2 className="text-2xl pb-3 text-center">React Hook Form</h2>
                    <ul className="font-bold">Installation</ul>
                        <li>npm install react-hook-form</li>
                        <li><code>import {'{'}useForm{'}'} from "react-hook-form";</code></li>
                    <ul className="font-bold">Benefits</ul>
                        <li>Performance</li>
                        <li>Simplicity</li>
                        <li>Built-in Features</li>
                        <li>Flexibility with Validation Libraries</li>
                    <ul className="font-bold">Use case</ul>
                        <li>Simple Contact Form</li>
                        <li>Complex Multi-Step Form</li>
                        <li>Large Forms with Conditional Fields</li>
                        <li>Custom Input Components</li>
                        <li>Form with Async Validation</li>
                        <br></br>
                        <br></br>
                </div>
                <div className=" bg-white p-10 rounded-lg shadow-2xl">
                    <h2 className="text-2xl pb-3 text-center">React H5 Audio Player</h2>
                    <ul className="font-bold">Installation</ul>
                        <li>npm i react-h5-audio-player</li>
                        <li>import AudioPlayer from "react-h5-audio-player";</li>
                        <li>import "react-h5-audio-player/lib/styles.css";</li>
                    <ul className="font-bold">Benefits</ul>
                        <li>Simplified Implementation</li>
                        <li>Cross-browser Consistency</li>
                        <li>Out-of-the-box Features</li>
                        <li>Event Listeners and Callbacks</li>
                        <li>Playlists and Audio Management</li>
                    <ul className="font-bold">Use case</ul>
                        <li>Podcast Player</li>
                        <li>Language Learning App</li>
                        <li>Background Music for Website</li>
                        <li>Audio Course or Learning Platform</li>
                        <li>Music Player with Playlist Support</li>
                </div>
            </div>
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors absolute bottom-5 right-5 text-2xl" href="/demo">Next Page</Link>  
    </div>
  );
}
