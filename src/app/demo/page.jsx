"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Link from "next/link";

export default function DemoPage() {
  const songs = [
    { title: "Renaissance", src: "/music/01.mp3" },
    { title: "Habits", src: "/music/02.mp3" },
    { title: "Trouble", src: "/music/03.mp3" },
    { title: "Brand New Dance", src: "/music/04.mp3" },
    { title: "Evil", src: "/music/05.mp3" },
    { title: "All You Got (skit)", src: "/music/06.mp3" },
    { title: "Lucifer", src: "/music/07.mp3" },
    { title: "Antichrist", src: "/music/08.mp3" },
    { title: "Fuel", src: "/music/09.mp3" },
    { title: "Road Rage", src: "/music/10.mp3" },
    { title: "Houdini", src: "/music/11.mp3" },
    { title: "Breaking News (skit)", src: "/music/12.mp3" },
    { title: "Guilty Conscience 2", src: "/music/13.mp3" },
    { title: "Head Honcho", src: "/music/14.mp3" },
    { title: "Temporary", src: "/music/15.mp3" },
    { title: "Bad One", src: "/music/16.mp3" },
    { title: "Tobey", src: "/music/17.mp3" },
    { title: "Guess Who's Back (skit)", src: "/music/18.mp3" },
    { title: "Somebody Save Me", src: "/music/19.mp3" },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const { register, handleSubmit } = useForm();

  const currentSong = songs[currentSongIndex].src;

  const onSubmit = (data) => {
    const selectedIndex = songs.findIndex((song) => song.src === data.song);
    if (selectedIndex !== -1) {
      setCurrentSongIndex(selectedIndex);
    }
  };

  const handleClickNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handleClickPrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="bg-blue-900 text-ls rounded text-4xl text-white text-center shadow-2xl p-10 mb-10">
        Demonstration
      </h1>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="transform scale-150 max-w-4xl w-full mt-[-150px]">
          {" "}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Select and Play a Song
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
              <label
                htmlFor="song"
                className="block mb-3 text-lg font-medium text-gray-700"
              >
                Choose a Song:
              </label>
              <select
                {...register("song")}
                className="w-full p-3 mb-4 border rounded-lg border-gray-300"
              >
                {songs.map((song, index) => (
                  <option key={index} value={song.src}>
                    {song.title}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-cyan-400 text-white py-3 rounded-lg hover:bg-blue-600 text-lg"
              >
                Play
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-xl font-semibold text-gray-700">
                Now Playing:
              </p>
              <p className="text-xl text-blue-500">
                {songs[currentSongIndex].title}
              </p>
            </div>

            <div className="mt-6">
              <AudioPlayer
                // autoPlay
                src={currentSong}
                showSkipControls
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
                previous
                className="mt-4"
                onPlay={() => console.log("Playing:", currentSong)}
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors absolute bottom-5 right-5 text-2xl"
        href="/"
      >
        End Return Home
      </Link>
    </div>
  );
}
