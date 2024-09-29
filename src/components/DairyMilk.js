import React, { useEffect, useState, useRef } from "react";
import "../Styles/DairyMilk.css";

const emojis = [
  "🍫", "🌹", "❤️", "💖", "🎉", "✨", "🎁", "🥰", "😍", "💝",
  "💫", "💕", "🧚‍♂️", "🎀", "💎", "💐", "🌸", "🌷", "🌺", "🌻",
  "🎶", "🕊️", "⭐", "💌", "🌟", "🍭", "🍬", "🌈", "🎇", "🔥"
];

const DairyMilk = () => {
  const [emojiPositions, setEmojiPositions] = useState([]);
  const audioRef = useRef(null);

  const generateRandomEmojis = () => {
    const positions = Array.from({ length: 20 }, () => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 2 + 2,
    }));
    setEmojiPositions(positions);
  };

  useEffect(() => {
    generateRandomEmojis();
  }, []);

  const handleAudioPlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div className="dairy-milk" onClick={handleAudioPlay}>
      <div className="chocolate-container">
        <img src="/assets/Dairy_milk.png" alt="Dairy Milk Chocolate" className="chocolate" />
      </div>

      {emojiPositions.map((position, index) => (
        <div
          key={index}
          className="emoji"
          style={{
            top: `${position.top}%`,
            left: `${position.left}%`,
            fontSize: `${position.size}em`,
            animationDuration: `${position.duration}s`,
          }}
        >
          {position.emoji}
        </div>
      ))}

      <div className="made-by-venkat">
        Created by Venkat!!!
      </div>

      <audio ref={audioRef} src="/assets/Jeans.mp3" loop onCanPlay={handleAudioPlay} />
    </div>
  );
};

export default DairyMilk;
