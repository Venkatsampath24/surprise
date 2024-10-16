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
  const [showSurpriseMessage, setShowSurpriseMessage] = useState(false);
  const audioRef = useRef(null);

  // Function to generate random positions and random emojis
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

  // Handle surprise button click
  const handleSurpriseClick = () => {
    setShowSurpriseMessage(true);
    setTimeout(() => {
      setShowSurpriseMessage(false);
    }, 5000); // Message will disappear after 5 seconds
  };

  return (
    <div className="dairy-milk" onClick={handleAudioPlay}>
      {/* 360-degree rotating chocolate */}
      <div className="chocolate-container">
        <img
          src="/assets/Dairy_milk.png"
          alt="Dairy Milk Chocolate"
          className="chocolate"
        />
      </div>

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

      {/* Surprise button */}
      <button className="surprise-button" onClick={handleSurpriseClick}>
        Click for a Surprise!
      </button>

      {/* Surprise message */}
      {showSurpriseMessage && (
        <div className="surprise-message">
         🍫
        </div>
      )}

      {/* Message to indicate made by Venkat */}
      <div className="made-by-venkat">
        {/* Created by Venkat! */}
      </div>

      {/* Audio element to play music */}
      <audio ref={audioRef} src="/assets/Jeans.mp3" loop onCanPlay={handleAudioPlay} />
    </div>
  );
};

export default DairyMilk;
