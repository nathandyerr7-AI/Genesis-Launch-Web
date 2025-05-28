import React from "react";
import { motion } from "framer-motion";

export function LampContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-slate-950 ${className}`}>
      <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-56 w-[30rem] bg-gradient-to-r from-primary to-secondary [mask-image:radial-gradient(ellipse_at_center,white,transparent)] group-hover:w-[40rem]"
        ></motion.div>
        <div className="relative z-40 flex flex-col items-center px-5">
          {children}
        </div>
      </div>
    </div>
  );
}