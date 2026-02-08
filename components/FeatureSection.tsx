'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/products';
import { Coffee } from 'lucide-react';

export default function FeatureSection() {
    return (
        <section className="py-32 px-4 md:px-8 relative overflow-hidden bg-[#1A0F0A]">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(transparent_0%,#1A0F0A_100%)] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A] via-[#2D1810]/30 to-[#1A0F0A]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

                    {/* Left Features */}
                    <div className="space-y-16">
                        {features.filter(f => f.position === 'left').map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="text-right lg:text-right text-center"
                            >
                                <div className="inline-block p-3 rounded-2xl bg-[#3D2820]/50 backdrop-blur-sm border border-[#5A4034]/30 mb-4">
                                    <Coffee className="w-8 h-8 text-[#4F9C8F]" />
                                </div>
                                <h3 className="text-3xl font-['Playfair_Display'] font-semibold text-[#F5E6D3] mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-[#C9B8A0] font-['Inter'] leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center: Conceptual Display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] flex items-center justify-center"
                    >
                        {/* Animated Rings */}
                        {[1, 2, 3].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20 + i * 5, ease: 'linear', repeatType: i % 2 === 0 ? 'reverse' : 'loop' }}
                                className="absolute inset-0 border border-[#4F9C8F]/10 rounded-full"
                                style={{ margin: `${i * 40}px`, borderStyle: i === 1 ? 'dashed' : 'solid' }}
                            />
                        ))}

                        <div className="relative z-10 text-center">
                            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[#3D2820] to-[#1A0F0A] rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(79,156,143,0.2)] border border-[#5A4034]">
                                <span className="text-9xl">☕</span>
                            </div>
                            <h2 className="mt-8 text-4xl font-['Playfair_Display'] font-bold text-[#F5E6D3]">FPF Special</h2>
                        </div>

                        {/* Glowing orb background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4F9C8F]/10 rounded-full blur-[100px]" />
                    </motion.div>

                    {/* Right Features */}
                    <div className="space-y-16">
                        {features.filter(f => f.position === 'right').map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="text-left lg:text-left text-center"
                            >
                                <div className="inline-block p-3 rounded-2xl bg-[#3D2820]/50 backdrop-blur-sm border border-[#5A4034]/30 mb-4">
                                    <Coffee className="w-8 h-8 text-[#D4A574]" />
                                </div>
                                <h3 className="text-3xl font-['Playfair_Display'] font-semibold text-[#F5E6D3] mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-[#C9B8A0] font-['Inter'] leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
