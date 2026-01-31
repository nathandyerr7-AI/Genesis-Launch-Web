import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { Phone } from "lucide-react";
// import Vapi from "@vapi-ai/web";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `var(--primary)`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-primary"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");
    // const navigate = useNavigate();
    // const [isOpen, setIsOpen] = useState(false);
    // const [isCallActive, setIsCallActive] = useState(false);
    // const [isConnecting, setIsConnecting] = useState(false);
    // const [vapi, setVapi] = useState<any>(null);

    // useEffect(() => {
    //     const vapiInstance = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);
    //
    //     vapiInstance.on("call-start", () => {
    //         setIsConnecting(false);
    //         setIsCallActive(true);
    //     });

    //     vapiInstance.on("call-end", () => {
    //         setIsConnecting(false);
    //         setIsCallActive(false);
    //     });

    //     vapiInstance.on("error", (error) => {
    //         console.error("Vapi error:", error);
    //         setIsConnecting(false);
    //         setIsCallActive(false);
    //     });

    //     setVapi(vapiInstance);

    //     return () => {
    //         if (vapiInstance) {
    //             vapiInstance.stop();
    //         }
    //     };
    // }, []);

    // const handleNavigation = (path: string) => {
    //     setIsOpen(false);
    //     if (path.startsWith('/#')) {
    //         const element = document.querySelector(path.substring(1));
    //         if (element) {
    //             element.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     } else {
    //         navigate(path);
    //     }
    // };

    // const handleCallToggle = async () => {
    //     if (isCallActive) {
    //         vapi.stop();
    //     } else {
    //         setIsConnecting(true);
    //         try {
    //             await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID);
    //         } catch (error) {
    //             console.error("Failed to start call:", error);
    //             setIsConnecting(false);
    //         }
    //     }
    // };

    // const getButtonState = () => {
    //     if (isConnecting) {
    //         return {
    //             text: "Connecting...",
    //             className: "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-pulse",
    //             icon: (
    //                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
    //             )
    //         };
    //     }
    //
    //     if (isCallActive) {
    //         return {
    //             text: "End Call",
    //             className: "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600",
    //             icon: <Phone className="w-5 h-5 animate-pulse" />
    //         };
    //     }
    //
    //     return {
    //         text: "Talk to AI",
    //         className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 bg-[length:200%_200%]",
    //         icon: <Phone className="w-5 h-5 animate-bounce" />
    //     };
    // };

    // const buttonState = getButtonState();

    const handleStart = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-white to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg md:text-xl text-text-secondary mb-8"
                    >
                        AI solutions for automations, lead-gen, chat agents, and business growth
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            variant="default" 
                            className="rounded-full px-12 py-8 text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-[0_0_40px_rgba(var(--primary-500),0.5)] hover:shadow-[0_0_60px_rgba(var(--primary-500),0.7)] hover:from-primary-500 hover:to-accent-500 transition-all duration-300 transform hover:scale-110 active:scale-95"
                            onClick={handleStart}
                        >
                            Get Started
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}