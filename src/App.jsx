import { useState, useRef } from "react";
import "./App.css";
import { songs } from "./db/songs";
import { SongCard } from "./components/SongCard";
import { ArrowLeft, Check, ArrowDown, Shuffle, Play } from "lucide-react";
import { PlayButton } from "./components/Play";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      audioRef.current.pause();
      audioRef.current = new Audio(song.src);
      audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);

      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#9a1e32] to-[#000000] h-[32rem] w-full relative">
        <ArrowLeft className="text-white h-8 w-8 absolute top-4 left-4 cursor-pointer" />

        <div className="flex flex-col pt-12 px-6">
          <div className="flex justify-center">
            <img
              src="/fresh-album-anttonias-anttonias-v0-n6EaQZCL4yG9jMYqn_YlJoPtr45mHGX2TTMIHkwnoOw.png"
              alt="anttonias"
              className="w-64 h-64 object-cover rounded-md"
            />
          </div>

          <div className="mt-6 flex flex-col items-start">
            <h2 className="text-white text-3xl font-bold">Anttonias</h2>

            <div className="flex items-center gap-2 mt-2">
              <img
                src="/images.jpg"
                alt="artist"
                className="h-6 w-6 rounded-full"
              />
              <h3 className="text-white text-sm font-medium">Anttonias</h3>
            </div>

            <p className="text-gray-300 text-sm mt-2">
              Álbum · 27 ago ·{" "}
              <span className="font-semibold">Último lançamento</span>
            </p>

            <div className="flex items-center justify-between w-full mt-6">
              <div className="flex items-center gap-4">
                <img
                  src="/fresh-album-anttonias-anttonias-v0-n6EaQZCL4yG9jMYqn_YlJoPtr45mHGX2TTMIHkwnoOw.png"
                  alt="anttonias"
                  className="w-8 h-10 object-cover rounded-md"
                />
                <Check className="text-black bg-green-500 rounded-full p-1 h-7 w-7 cursor-pointer" />
                <ArrowDown className="text-black bg-green-500 rounded-full p-1 h-7 w-7 cursor-pointer" />
                <span className="text-gray-300 text-2xl cursor-pointer">⋮</span>
              </div>

              <div className="flex items-center gap-4">
                <Shuffle className="text-gray-300 h-6 w-6 cursor-pointer" />
                <PlayButton
                  isPlaying={isPlaying}
                  onClick={() => {
                    if (currentSong) playSong(currentSong);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto ">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            artist={song.artist}
            downloaded={song.downloaded}
            onClick={() => playSong(song)}
            isCurrent={currentSong?.id === song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>

      <div>
        <p>7 músicas · 30min</p>
      </div>
    </>
  );
}

export default App;
