import React, { useState, useEffect } from 'react';
import './FadeInText.css'; // Import your component-specific styles

const FadeInText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility to false when text changes
    setIsVisible(false);

    // Use a timeout to trigger the fade-in effect after 1 second
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [text]); // Re-run the effect when the text changes

  return (
    <div className={`fade-in-text ${isVisible ? 'visible' : ''}`}>
      {text}
    </div>
  );
};

export default FadeInText;