# AI Agents Documentation

This document provides comprehensive information about the AI agents integrated into the Genesis Launch website, including setup, configuration, and customization options.

## 🤖 Overview

The Genesis Launch website features two primary AI agents:

1. **Voice Agent** - Powered by Vapi AI for real-time voice conversations
2. **Chat Agent** - Powered by Voiceflow for text-based customer support

## 🎙️ Voice Agent (Vapi AI)

### Description
The voice agent provides real-time voice interaction capabilities, allowing visitors to have natural conversations about Genesis Launch services, pricing, and general inquiries.

### Features
- Real-time voice recognition and synthesis
- Natural language processing
- Contextual conversation handling
- Seamless integration with website UI
- Mobile and desktop compatibility

### Setup Instructions

1. **Create Vapi Account**
   ```bash
   # Visit https://vapi.ai and create an account
   ```

2. **Get API Credentials**
   - Navigate to your Vapi dashboard
   - Copy your Public Key
   - Create or select an assistant and copy the Assistant ID

3. **Configure Environment Variables**
   ```env
   VITE_VAPI_PUBLIC_KEY=your-vapi-public-key-here
   VITE_VAPI_ASSISTANT_ID=your-assistant-id-here
   ```

4. **Assistant Configuration**
   In your Vapi dashboard, configure your assistant with:
   - **Name**: Genesis Launch AI Assistant
   - **Voice**: Choose a professional, clear voice
   - **Personality**: Professional, helpful, knowledgeable about AI services
   - **Knowledge Base**: Upload information about Genesis Launch services

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

**Voice Settings**:
- Adjust voice speed, pitch, and tone in Vapi dashboard
- Configure response latency and interruption handling
- Set conversation timeout and fallback responses

**UI Customization**:
```css
/* Button styling in background-paths.tsx */
.voice-button {
  background: linear-gradient(to right, var(--primary), var(--accent));
  box-shadow: 0 0 20px rgba(0,112,243,0.5);
}
```

**Conversation Flow**:
- Greeting: Professional introduction to Genesis Launch
- Service Inquiry: Detailed information about AI solutions
- Pricing: General pricing structure and consultation offers
- Contact: Seamless handoff to human representatives

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

### Setup Instructions

1. **Create Voiceflow Account**
   ```bash
   # Visit https://voiceflow.com and create an account
   ```

2. **Build Your Chat Agent**
   - Create a new project in Voiceflow
   - Design conversation flows for common inquiries
   - Add knowledge base with Genesis Launch information
   - Configure lead capture forms

3. **Get Project Credentials**
   - Navigate to Integrations → Web Chat
   - Copy your Project ID
   - Note your Version ID (usually 'production')

4. **Update Configuration**
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

**Conversation Design**:
- **Welcome Flow**: Greet visitors and offer assistance options
- **Service Information**: Detailed explanations of AI solutions
- **Lead Qualification**: Capture contact information and project details
- **Handoff**: Transfer to human agents when needed

**Advanced Features**:
- **Variables**: Store user information across conversation
- **Conditions**: Dynamic responses based on user input
- **Integrations**: Connect to external APIs and databases
- **Analytics**: Track conversation metrics and user satisfaction

## 🔧 Configuration Best Practices

### Voice Agent Best Practices

1. **Conversation Design**
   - Keep responses concise and clear
   - Use natural, conversational language
   - Provide clear next steps and options
   - Handle interruptions gracefully

2. **Technical Optimization**
   - Test on various devices and browsers
   - Optimize for different network conditions
   - Implement proper error handling
   - Monitor call quality and latency

3. **Content Strategy**
   - Regular updates to knowledge base
   - A/B testing of conversation flows
   - User feedback collection and analysis
   - Continuous improvement based on analytics

### Chat Agent Best Practices

1. **User Experience**
   - Quick response times (< 2 seconds)
   - Clear conversation paths
   - Easy access to human handoff
   - Mobile-optimized interface

2. **Content Management**
   - Regular content updates
   - Consistent brand voice and tone
   - Comprehensive FAQ coverage
   - Multilingual support planning

3. **Lead Generation**
   - Strategic lead capture points
   - Progressive information gathering
   - CRM integration for follow-up
   - Qualification scoring system

## 📊 Analytics and Monitoring

### Voice Agent Metrics
- Call duration and completion rates
- User satisfaction scores
- Common conversation topics
- Technical performance metrics

### Chat Agent Metrics
- Message volume and response times
- Conversation completion rates
- Lead conversion rates
- User satisfaction ratings

### Monitoring Tools
- Vapi AI dashboard for voice analytics
- Voiceflow analytics for chat metrics
- Custom event tracking in Google Analytics
- User feedback collection systems

## 🚀 Deployment Considerations

### Environment Variables
```env
# Production
VITE_VAPI_PUBLIC_KEY=prod_key_here
VITE_VAPI_ASSISTANT_ID=prod_assistant_id

# Staging
VITE_VAPI_PUBLIC_KEY=staging_key_here
VITE_VAPI_ASSISTANT_ID=staging_assistant_id
```

### Performance Optimization
- Lazy loading of agent scripts
- Efficient state management
- Proper cleanup and memory management
- CDN optimization for global performance

### Security Considerations
- API key protection and rotation
- User data privacy compliance
- Secure conversation logging
- GDPR and privacy regulation adherence

## 🔄 Maintenance and Updates

### Regular Tasks
- **Weekly**: Review conversation analytics and user feedback
- **Monthly**: Update knowledge bases and conversation flows
- **Quarterly**: Performance optimization and feature updates
- **Annually**: Complete agent strategy review and planning

### Version Control
- Track agent configuration changes
- Document conversation flow updates
- Maintain staging and production environments
- Regular backup of agent configurations

## 📞 Support and Troubleshooting

### Common Issues

**Voice Agent**:
- Microphone permission issues
- Network connectivity problems
- Browser compatibility concerns
- Audio quality optimization

**Chat Agent**:
- Widget loading failures
- Styling conflicts
- Conversation flow errors
- Integration connectivity issues

### Support Contacts
- **Technical Issues**: info@genesislaunch.com
- **Agent Configuration**: Contact Genesis Launch AI team
- **Platform Support**: Refer to Vapi AI and Voiceflow documentation

---

*This documentation is maintained by the Genesis Launch AI team. Last updated: [Current Date]*