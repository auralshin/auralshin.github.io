import React, { useState } from "react";

const travelPhotos = [
  "/travel/1.jpg",
  "/travel/2.jpg",
  "/travel/3.jpg",
  "/travel/4.png",
];

const TravelSnaps: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <div className="mt-6">
        <h3 className="font-bold text-sm text-gray-700 tracking-wide uppercase mb-2">
          Travel Snaps ✈️
        </h3>

        <div className="grid grid-cols-2 gap-2">
          {travelPhotos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Travel ${i + 1}`}
              className="rounded-md h-16 w-full object-cover cursor-pointer hover:opacity-80"
              onClick={() => setSelectedImg(src)}
            />
          ))}
        </div>

        <a
          href="/travel"
          className="text-xs mt-2 inline-block text-indigo-600 hover:underline"
        >
          View full gallery →
        </a>
      </div>

      {/* Fullscreen Overlay Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Travel Full"
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TravelSnaps;
