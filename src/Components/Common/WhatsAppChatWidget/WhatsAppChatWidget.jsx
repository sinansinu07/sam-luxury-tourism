import React, { useEffect } from 'react';

export default function WhatsAppChatWidget() {
  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.onload = () => {
      // Script has been loaded, you can initialize the widget
      if (window.Elfsight) {
        window.Elfsight.init();
      }
    };
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-1ea1f378-0dea-4435-b390-363c3064b4da"
      data-elfsight-app-lazy
    />
  );
};

;
