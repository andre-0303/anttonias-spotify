import { Play } from "lucide-react";

export function PlayButton({ isPlaying, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer bg-green-500 ${
        isPlaying ? "bg-green-600" : "bg-green-500"
      }`}
    >
      {isPlaying ? (
        <div className="flex gap-1">
          <div className="w-1 h-6 bg-black"></div>
          <div className="w-1 h-6 bg-black"></div>
        </div>
      ) : (
        <Play className="w-6 h-6 text-black" fill="black" />
      )}
    </div>
  );
}
