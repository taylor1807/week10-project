import Link from "next/link";

export default function info() {
  return (
    <div className="bg-gray-100">
      <h1 className=" text-4xl pt-[100px] text-center">
        How to install, benefits & use-cases{" "}
      </h1>
      <div className=" flex h-screen items-center justify-evenly mt-[-100px]">
        <div className=" bg-white p-10 rounded-lg shadow-lg">
          React Hook Form
          <ul>Installation</ul>
          <li>npm install react-hook-form</li>
          <li>
            <code>
              import {"{"} useForm {"}"} from &quot;react-hook-form&quot;;
            </code>
          </li>
          <ul>Benefits</ul>
          <li>Performance</li>
          <li>Simplicity</li>
          <li>Built-in Features</li>
          <li>Flexibility with Validation Libraries</li>
          <ul>Use case</ul>
          <li>Simple Contact Form</li>
          <li>Complex Multi-Step Form</li>
          <li>Large Forms with Conditional Fields</li>
          <li>Custom Input Components</li>
          <li>Form with Async Validation</li>
        </div>
        <div className=" bg-white p-10 rounded-lg shadow-lg">
          React H5 Audio Player
          <ul>Installation</ul>
          <li>npm i react-h5-audio-player</li>
          <li>import AudioPlayer from &quot;react-h5-audio-player&quot;;</li>
          <li>import &quot;react-h5-audio-player/lib/styles.css&quot;;</li>
          <ul>Benefits</ul>
          <li>Simplified Implementation</li>
          <li>Cross-browser Consistency:</li>
          <li>Out-of-the-box Features:</li>
          <li>Event Listeners and Callbacks</li>
          <li>Playlists and Audio Management</li>
          <ul>Use case</ul>
          <li>Podcast Player</li>
          <li>Language Learning App</li>
          <li>Background Music for Website</li>
          <li>Audio Course or Learning Platform</li>
          <li>Music Player with Playlist Support</li>
        </div>
      </div>
      <Link
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors absolute bottom-5 right-5 text-2xl"
        href="/demo"
      >
        Next Page
      </Link>
    </div>
  );
}
