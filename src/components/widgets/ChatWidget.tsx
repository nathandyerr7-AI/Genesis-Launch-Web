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
          },
          assistant: {
            stylesheet: "src/index.css"
          }
        });
      }
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    
    // Append script to document head
    document.head.appendChild(script);

    // Add custom CSS to style Voiceflow widget
    const style = document.createElement('style');
    style.textContent = `
      /* Voiceflow Widget Custom Styling */
      .vfrc-widget--launcher {
        background: linear-gradient(135deg, #0070f3, #7c3aed) !important;
        box-shadow: 0 0 20px rgba(0, 112, 243, 0.5) !important;
        border: none !important;
        transition: all 0.3s ease !important;
      }
      
      .vfrc-widget--launcher:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 0 30px rgba(0, 112, 243, 0.7) !important;
      }
      
      .vfrc-widget--launcher svg {
        color: white !important;
      }
      
      .vfrc-widget {
        border-radius: 16px !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        background: #141428 !important;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5) !important;
      }
      
      .vfrc-header {
        background: linear-gradient(135deg, #0070f3, #7c3aed) !important;
        border-radius: 16px 16px 0 0 !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      }
      
      .vfrc-header--title,
      .vfrc-header--subtitle {
        color: white !important;
      }
      
      .vfrc-chat {
        background: #0a0a14 !important;
      }
      
      .vfrc-message--user .vfrc-message--bubble {
        background: linear-gradient(135deg, #0070f3, #7c3aed) !important;
        color: white !important;
        border-radius: 18px 18px 4px 18px !important;
        box-shadow: 0 2px 8px rgba(0, 112, 243, 0.3) !important;
      }
      
      .vfrc-message--system .vfrc-message--bubble {
        background: #141428 !important;
        color: #a0aec0 !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 18px 18px 18px 4px !important;
      }
      
      .vfrc-input {
        background: #141428 !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 12px !important;
        color: white !important;
      }
      
      .vfrc-input:focus {
        border-color: #0070f3 !important;
        box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2) !important;
      }
      
      .vfrc-input::placeholder {
        color: #a0aec0 !important;
      }
      
      .vfrc-button--primary,
      .vfrc-send-button {
        background: linear-gradient(135deg, #0070f3, #7c3aed) !important;
        border: none !important;
        border-radius: 8px !important;
        color: white !important;
        transition: all 0.3s ease !important;
      }
      
      .vfrc-button--primary:hover,
      .vfrc-send-button:hover {
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 12px rgba(0, 112, 243, 0.4) !important;
      }
      
      .vfrc-button--secondary {
        background: transparent !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        color: #a0aec0 !important;
        border-radius: 8px !important;
        transition: all 0.3s ease !important;
      }
      
      .vfrc-button--secondary:hover {
        border-color: #0070f3 !important;
        color: #0070f3 !important;
      }
      
      .vfrc-footer {
        background: #141428 !important;
        border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 0 0 16px 16px !important;
      }
      
      .vfrc-avatar {
        background: linear-gradient(135deg, #0070f3, #7c3aed) !important;
        border-radius: 50% !important;
      }
      
      .vfrc-timestamp {
        color: #a0aec0 !important;
        font-size: 11px !important;
      }
      
      .vfrc-typing-indicator {
        background: #141428 !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-radius: 18px !important;
      }
      
      .vfrc-typing-indicator--dot {
        background: #0070f3 !important;
      }
      
      /* Close button styling */
      .vfrc-close-button,
      .vfrc-minimize-button {
        color: white !important;
        opacity: 0.8 !important;
        transition: opacity 0.3s ease !important;
      }
      
      .vfrc-close-button:hover,
      .vfrc-minimize-button:hover {
        opacity: 1 !important;
      }
      
      /* Scrollbar styling */
      .vfrc-chat::-webkit-scrollbar {
        width: 6px !important;
      }
      
      .vfrc-chat::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1) !important;
        border-radius: 3px !important;
      }
      
      .vfrc-chat::-webkit-scrollbar-thumb {
        background: rgba(0, 112, 243, 0.5) !important;
        border-radius: 3px !important;
      }
      
      .vfrc-chat::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 112, 243, 0.7) !important;
      }
      
      /* Animation for message appearance */
      .vfrc-message {
        animation: slideInUp 0.3s ease-out !important;
      }
      
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Quick replies styling */
      .vfrc-quick-reply {
        background: transparent !important;
        border: 1px solid rgba(0, 112, 243, 0.5) !important;
        color: #0070f3 !important;
        border-radius: 20px !important;
        transition: all 0.3s ease !important;
      }
      
      .vfrc-quick-reply:hover {
        background: rgba(0, 112, 243, 0.1) !important;
        border-color: #0070f3 !important;
        transform: translateY(-1px) !important;
      }
      
      /* Loading animation */
      .vfrc-loading {
        background: linear-gradient(90deg, #141428, #1a1a2e, #141428) !important;
        background-size: 200% 100% !important;
        animation: loading 1.5s infinite !important;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `;
    document.head.appendChild(style);

    // Cleanup function to remove script and styles when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
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