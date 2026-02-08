'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { coffeeProducts } from '@/data/products';

export default function ProductShowcase() {
    return (
        <section id="showcase" className="py-32 px-4 md:px-8 relative z-20 bg-[#1A0F0A]">

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-[#4F9C8F] font-['Inter'] tracking-[0.2em] text-sm uppercase mb-4 block">
                        Our Menu
                    </span>
                    <h2 className="text-6xl md:text-7xl font-['Playfair_Display'] font-bold text-[#F5E6D3] mb-6">
                        Signature Blends
                    </h2>
                    <p className="text-[#C9B8A0] max-w-2xl mx-auto text-lg font-['Inter']">
                        Discover the rich flavors that make FPF (Coffee Wale Bhaiya) the most beloved spot in town.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coffeeProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
