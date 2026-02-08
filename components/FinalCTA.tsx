'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-32 px-4 relative overflow-hidden bg-[#1A0F0A]">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A] to-[#2D1810]" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ repeat: Infinity, duration: 8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F9C8F]/10 rounded-full blur-[120px]"
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-[#F5E6D3] mb-8"
                >
                    Find the Perfect Coffee for You
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-[#C9B8A0] mb-12 font-['Inter'] max-w-2xl mx-auto"
                >
                    Visit FPF (Coffee Wale Bhaiya) at Lalkothi, Jaipur for an unforgettable experience.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#4F9C8F] to-[#3D8B7F] text-white rounded-full text-xl font-semibold font-['Inter'] shadow-[0_20px_50px_rgba(79,156,143,0.3)] hover:shadow-[0_20px_60px_rgba(79,156,143,0.5)] transition-all duration-300"
                >
                    <span>Get Directions</span>
                    <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Decorative Sparkle */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="mt-16 text-[#D4A574] text-5xl inline-block opacity-80"
                >
                    ✦
                </motion.div>

                <div className="mt-2 text-sm text-[#C9B8A0]/40 font-['Inter']">
                    © {new Date().getFullYear()} FPF Coffee. All rights reserved.
                </div>
            </div>
        </section>
    );
}
