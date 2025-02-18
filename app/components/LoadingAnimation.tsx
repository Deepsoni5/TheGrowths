"use client";

import { useState, useEffect } from "react";

const lines = ["Unlock your Business", "Potential With", "TheGrowths.com"];

export default function LoadingAnimation() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < lines.length - 1) {
        setCurrentLine(currentLine + 1);
      } else {
        setShowContent(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentLine]);

  if (showContent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-white text-4xl md:text-6xl font-bold overflow-hidden h-20 md:h-24">
        <div
          className={`animate-slideUp ${
            currentLine === 2 ? "text-primary" : ""
          }`}
        >
          {lines[currentLine]}
        </div>
      </div>
    </div>
  );
}
