'use client';

import { motion } from 'framer-motion';
import { CoffeeProduct } from '@/data/products';
import { ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
    product: CoffeeProduct;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-[#3D2820]/40 backdrop-blur-md rounded-3xl p-6 border border-[#5A4034]/30 hover:border-[#4F9C8F]/50 transition-all duration-500 overflow-hidden"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4F9C8F]/0 to-[#4F9C8F]/0 group-hover:from-[#4F9C8F]/10 group-hover:to-transparent transition-all duration-500" />

            {/* Star Rating */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-1.5 bg-[#1A0F0A]/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#5A4034]/30">
                <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                <span className="text-[#F5E6D3] font-semibold text-xs tracking-wide">{product.rating}</span>
            </div>

            {/* Coffee Image */}
            <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-[#2D1810]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#F5E6D3] mb-2 leading-tight">
                    {product.name}
                </h3>
                <p className="text-sm text-[#C9B8A0] mb-6 line-clamp-2 font-['Inter'] leading-relaxed h-10">
                    {product.description}
                </p>

                {/* Price & Add Button */}
                <div className="flex items-center justify-between pt-4 border-t border-[#5A4034]/30">
                    <span className="text-2xl font-bold text-[#F5E6D3] font-['Inter'] tracking-tight">
                        {product.price}
                    </span>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F9C8F] to-[#3D8B7F] flex items-center justify-center hover:shadow-[0_0_20px_rgba(79,156,143,0.4)] transition-shadow duration-300"
                    >
                        <ShoppingBag className="w-5 h-5 text-white" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
