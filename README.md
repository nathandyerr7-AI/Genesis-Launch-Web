# Genesis Launch AI - Website

A modern, responsive website for Genesis Launch AI Agency, showcasing AI solutions including automations, chat agents, voice agents, and more.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations and micro-interactions
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **AI Voice Integration**: Interactive voice agent powered by Vapi AI
- **Chat Widget**: Integrated Voiceflow chat agent for customer support
- **Contact Forms**: Functional contact forms with webhook integration
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Cookie Consent**: GDPR-compliant cookie management
- **Legal Pages**: Privacy policy, terms of service, and cookie policy

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **AI Integration**: Vapi AI for voice agents, Voiceflow for chat
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Navigation and footer components
│   ├── pages/           # Legal pages (privacy, terms, etc.)
│   ├── sections/        # Main page sections
│   ├── ui/              # Reusable UI components
│   └── widgets/         # Chat and cookie consent widgets
├── lib/                 # Utility functions
└── styles/             # Global CSS and Tailwind config
```

## 🎨 Design System

### Colors
- **Primary**: `#0070f3` (Blue)
- **Secondary**: `#5eead4` (Teal)
- **Accent**: `#7c3aed` (Purple)
- **Background**: `#0a0a14` (Dark)
- **Background Light**: `#141428` (Lighter Dark)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Cards with hover effects and glow shadows
- Gradient buttons with animations
- Glass morphism effects
- Smooth section transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd genesis-launch-web
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Add your API keys to `.env`:
```env
VITE_VAPI_PUBLIC_KEY=your-vapi-public-key
VITE_VAPI_ASSISTANT_ID=your-vapi-assistant-id
```

5. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Vapi AI Voice Agent
1. Sign up at [Vapi AI](https://vapi.ai)
2. Create a voice assistant
3. Add your public key and assistant ID to `.env`

### Voiceflow Chat Widget
1. Update the project ID in `src/components/widgets/ChatWidget.tsx`
2. Customize styling in `src/components/widgets/VoiceflowAgent.css`

### Contact Form Webhook
Update the webhook URL in `src/components/sections/ContactSection.tsx` to your preferred form handler (Make.com)

## 📱 Sections Overview

### Hero Section (`BackgroundPaths`)
- Animated background with floating paths
- Interactive voice agent button
- Responsive typography with staggered animations

### Services Section
- Grid layout showcasing AI services
- Hover effects and micro-interactions
- Call-to-action buttons

### Technologies Section
- Tech stack showcase with icons
- Animated reveals on scroll

### Testimonials/Case Studies
- Client success stories
- Image galleries with project details

### About Section
- Company information and values
- Feature highlights with icons

### Contact Section
- Contact form with validation
- Contact information display
- Success/error state handling

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Responsive images with proper loading
- **Bundle Analysis**: Optimized dependencies and tree shaking
- **CSS Optimization**: Tailwind CSS purging and minification

## 📊 SEO Features

- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data markup
- XML sitemap
- Robots.txt configuration
- Semantic HTML structure

## 🔒 Privacy & Compliance

- Cookie consent management
- Privacy policy and terms of service
- GDPR-compliant data handling
- Secure form submissions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify
The project is configured for easy Netlify deployment with automatic builds from your Git repository.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Genesis Launch AI.

## 📞 Support

For support or questions about this project:
- Email: info@genesislaunch.com
- Phone: +1 (613) 862-1476

---

Built with ❤️ by Genesis Launch AI Team