import { useState } from "react";

export default function Home() {
  const [mood, setMood] = useState("happy");

  const moodPlaylist = {
    happy: "Happy Vibes 🎉",
    sad: "Chill & Sad Songs 😢",
    energetic: "Workout Pump 💪",
    calm: "Relaxing Nature 🌿",
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Select Your Mood</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.keys(moodPlaylist).map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              mood === m ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      <h3 className="text-xl font-medium text-purple-800">
        Mood: <span className="text-purple-600">{mood}</span>
      </h3>
      <p className="mt-4 text-gray-600 text-lg">{moodPlaylist[mood]}</p>
    </div>
  );
}
