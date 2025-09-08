import { Check, ArrowDown } from "lucide-react";

export function SongCard({
  title,
  artist,
  downloaded,
  onClick,
  isCurrent,
  isPlaying,
}) {
  const titleColor = isCurrent && isPlaying ? "text-green-500" : "text-white";
  return (
    <div
      className="flex justify-between items-center p-4 cursor-pointer bg-[#0a0808]"
      onClick={onClick}
    >
      <div>
        <h2 className={titleColor}>{title}</h2>
        <p className="text-gray-400 text-sm">{artist}</p>
      </div>
      <div className="flex items-center gap-2">
        {downloaded ? (
          <>
            <Check className="text-black bg-green-500 rounded-full p-1" />
            <span className="text-gray-300 text-2xl cursor-pointer">⋮</span>
          </>
        ) : (
          <>
            <ArrowDown className="text-black bg-green-500 p-1 rounded-full" />
            <span className="text-gray-300 text-2xl cursor-pointer">⋮</span>
          </>
        )}
      </div>
    </div>
  );
}
