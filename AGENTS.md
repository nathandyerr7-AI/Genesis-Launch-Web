# AI Agents Documentation

This document provides comprehensive information about the AI agents integrated into the Genesis Launch website, including setup, configuration, and customization options.

## 🤖 Overview

The Genesis Launch website features two primary AI agents:

1. **Voice Agent** - Powered by Vapi AI for real-time voice conversations
2. **Chat Agent** - Powered by Voiceflow for text-based customer support

## 🎙️ Voice Agent (Vapi AI)

### Description
The voice agent provides real-time voice interaction capabilities, allowing visitors to have natural conversations about Genesis Launch services, general inquiries, and to schedule/reschedule/cancel bookings.

### Features
- Real-time voice recognition and synthesis
- Natural language processing
- Contextual conversation handling
- Seamless integration with website UI
- Mobile and desktop compatibility
- Schedule bookings


### Implementation Details

**Location**: `src/components/ui/background-paths.tsx`

**Key Features**:
- Call state management (idle, connecting, active)
- Visual feedback with animated buttons
- Error handling and reconnection logic
- Responsive design for all devices

**Button States**:
```typescript
// Idle state
"Talk to AI" - Blue gradient with bounce animation

// Connecting state  
"Connecting..." - Animated loading spinner

// Active call state
"End Call" - Red gradient with pulse animation
```

### Customization Options

**UI Customization**:
```css
/* Button styling in background-paths.tsx */
.voice-button {
  background: linear-gradient(to right, var(--primary), var(--accent));
  box-shadow: 0 0 20px rgba(0,112,243,0.5);
}
```

## 💬 Chat Agent (Voiceflow)

### Description
The chat widget provides 24/7 text-based customer support, handling common inquiries, service information, and lead qualification.

### Features
- Persistent chat widget
- Conversation memory across sessions
- Rich media support (images, buttons, carousels)
- Lead capture and qualification
- Integration with CRM systems
- Multi-language support capability


**Update Configuration**
   ```typescript
   // In src/components/widgets/ChatWidget.tsx
   window.voiceflow.chat.load({
     verify: { projectID: 'your-project-id-here' },
     url: 'https://general-runtime.voiceflow.com',
     versionID: 'production'
   });
   ```

### Implementation Details

**Location**: `src/components/widgets/ChatWidget.tsx`

**Loading Process**:
1. Dynamically loads Voiceflow script
2. Initializes chat widget with project configuration
3. Applies custom styling from CSS file
4. Handles cleanup on component unmount

**Custom Styling**: `src/components/widgets/VoiceflowAgent.css`

### Customization Options

**Visual Styling**:
```css
/* Launcher button customization */
.vfrc-widget--launcher:hover {
  transform: scale(1.05) !important;
  box-shadow: 0 0 30px rgba(0, 112, 243, 0.7) !important;
}

/* Header styling */
.vfrc-header {
  background: linear-gradient(135deg, #0070f3, #7c3aed) !important;
  border-radius: 16px 16px 0 0 !important;
}
```

---

*This documentation is maintained by the Genesis Launch AI team. Last updated: 2025/07/07*