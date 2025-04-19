import React, { useState } from "react";

const playlist = [
  { id: "jfKfPfyJRdk", title: "Lofi Beats - Chill" },
  { id: "BTYAsjAVa3I", title: "3 AM Study Session" }
];

const YouTubeMusicPlayer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = playlist[currentIndex];

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow mt-6">
      <h3 className="font-bold text-sm text-gray-700 tracking-wide uppercase mb-3">
        Vibe Music Player 🎶
      </h3>

      {/* Player */}
      <div className="rounded overflow-hidden border mb-4">
        <iframe
          key={currentTrack.id} // forces re-render to trigger autoplay
          width="100%"
          height="180"
          src={`https://www.youtube.com/embed/${currentTrack.id}?autoplay=1&enablejsapi=1`}
          title={currentTrack.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          className="px-3 py-1 text-xs bg-gray-300 rounded-full"
        >
          ⏮ Prev
        </button>
        <p className="text-sm font-medium text-gray-800 text-center flex-1 mx-4 truncate">
          {currentTrack.title}
        </p>
        <button
          onClick={handleNext}
          className="px-3 py-1 text-xs bg-gray-300 rounded-full"
        >
          Next ⏭
        </button>
      </div>

      {/* Playlist */}
      <div className="max-h-32 overflow-y-auto space-y-2 border-t pt-2">
        {playlist.map((track, i) => (
          <button
            key={track.id}
            onClick={() => handleSelect(i)}
            className={`block w-full text-left text-xs px-2 py-1 rounded transition ${
              i === currentIndex
                ? "bg-indigo-100 text-indigo-800 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {track.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YouTubeMusicPlayer;
