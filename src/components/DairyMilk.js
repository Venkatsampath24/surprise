// src/components/DairyMilk.js
import React, { useEffect, useState, useRef } from "react";
import "../Styles/DairyMilk.css";

// Extended list of emojis with more variety
const emojis = [
  "🍫", "🌹", "❤️", "💖", "🎉", "✨", "🎁", "🥰", "😍", "💝",
  "💫", "💕", "🧚‍♂️", "🎀", "💎", "💐", "🌸", "🌷", "🌺", "🌻",
  "🎶", "🕊️", "⭐", "💌", "🌟", "🍭", "🍬", "🌈", "🎇", "🔥"
];

const DairyMilk = () => {
  const [emojiPositions, setEmojiPositions] = useState([]);
  const audioRef = useRef(null); // Create a ref for the audio element

  // Function to generate random positions and random emojis
  const generateRandomEmojis = () => {
    const positions = Array.from({ length: 20 }, () => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      top: Math.random() * 100, // Random position for top
      left: Math.random() * 100, // Random position for left
      size: Math.random() * 2 + 1, // Random size for emojis (slightly larger range)
      duration: Math.random() * 2 + 2, // Random animation duration
    }));
    setEmojiPositions(positions);
  };

  // Generate random emojis on component mount
  useEffect(() => {
    generateRandomEmojis();
  }, []);

  // Handle audio play
  const handleAudioPlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div className="dairy-milk" onClick={handleAudioPlay}>
      <img src="/assets/dairy_milk.png" alt="Dairy Milk Chocolate" />

      {/* Display floating emojis */}
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
      
      {/* Message to indicate made by Venkat */}
      <div className="made-by-venkat">
        Made by Venkat!!!
      </div>

      {/* Audio element to play music */}
      <audio ref={audioRef} src="/assets/Jeans.mp3" loop onCanPlay={handleAudioPlay} />
    </div>
  );
};

export default DairyMilk;
