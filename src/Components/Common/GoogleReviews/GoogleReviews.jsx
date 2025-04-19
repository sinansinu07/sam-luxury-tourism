import React, { useEffect } from 'react';

export default function GoogleReviewsWidget() {
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
      className="elfsight-app-5423100b-0f4e-49cc-b125-ecbc2914a631"
      data-elfsight-app-lazy
    />
  );
};

