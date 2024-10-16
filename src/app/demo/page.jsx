"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

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

  // State to manage the currently selected song

  const [currentSong, setCurrentSong] = useState(songs[0].src);

  // React Hook Form setup

  const { register, handleSubmit } = useForm();

  // Handle form submission and set the selected song

  const onSubmit = (data) => {
    setCurrentSong(data.song); // Update current song based on the user's selection
  };

  return (
    <div className="App">
      <h1>Select and Play a Song</h1>

      {/* Form to select a song */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="song">Choose a Song:</label>
        <select {...register("song")}>
          {songs.map((song, index) => (
            <option key={index} value={song.src}>
              {song.title}
            </option>
          ))}
        </select>
        <button type="submit">Play</button>
      </form>

      {/* Audio player that plays the selected song */}

      <AudioPlayer
        autoPlay
        src={currentSong}
        // Set the selected song as the source

        onPlay={() => console.log("Playing:", currentSong)}
      />
    </div>
  );
}
