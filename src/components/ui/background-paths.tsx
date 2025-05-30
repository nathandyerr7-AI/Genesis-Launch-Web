"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import Vapi from "@vapi-ai/web";

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
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isCallActive, setIsCallActive] = useState(false);
    const [vapi, setVapi] = useState<any>(null);

    useEffect(() => {
        const vapiInstance = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);
        
        vapiInstance.on("call-start", () => {
            setIsCallActive(true);
        });

        vapiInstance.on("call-end", () => {
            setIsCallActive(false);
        });

        vapiInstance.on("error", (error) => {
            console.error("Vapi error:", error);
            setIsCallActive(false);
        });

        setVapi(vapiInstance);

        return () => {
            if (vapiInstance) {
                vapiInstance.stop();
            }
        };
    }, []);

    const handleNavigation = (path: string) => {
        setIsOpen(false);
        if (path.startsWith('/#')) {
            const element = document.querySelector(path.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(path);
        }
    };

    const handleCallToggle = async () => {
        if (isCallActive) {
            vapi.stop();
        } else {
            try {
                await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID);
            } catch (error) {
                console.error("Failed to start call:", error);
            }
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
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
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
                        {/* <Link to="/#contact">
                            <Button
                                onClick={() => handleNavigation('/#contact')}
                                className="rounded-2xl px-8 py-6 text-lg font-semibold 
                                bg-primary hover:bg-primary/90 text-white transition-all duration-300 
                                hover:-translate-y-0.5 border border-primary/20"
                            >
                                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                    Get Started
                                </span>
                                <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                    transition-all duration-300">
                                    →
                                </span>
                            </Button>
                        </Link> */}

                        <Button
                            onClick={handleCallToggle}
                            className={`rounded-1xl px-20 py-8 text-lg font-semibold 
                            transition-all duration-300 hover:-translate-y-0.5 border
                            flex items-center gap-2 ${
                                isCallActive 
                                ? "bg-red-500 hover:bg-red-600 text-white border-red-400/20" 
                                : "bg-primary hover:bg-accent/90 text-white border-accent/20"
                            }`}
                        >
                            <Phone className="w-5 h-5" />
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                {isCallActive ? "End Call" : "Talk to AI"}
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}