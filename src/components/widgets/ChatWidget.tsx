import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Load Voiceflow chat widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '684dba87fe109ae814e7f0f6' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    
    // Append script to document head
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Return null since Voiceflow handles its own UI
  return null;
};

// Extend Window interface to include voiceflow
declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}

export default ChatWidget;