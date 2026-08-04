'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featured = products.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-surface-border dark:border-surface-border-dark">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="section-label mb-2">Store</p>
          <h2 className="section-title">Featured Products</h2>
        </div>
        <Link
          href="/products"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-ink-muted dark:text-ink-muted-dark hover:text-ink-DEFAULT dark:hover:text-ink-dark transition-colors group"
        >
          Shop all
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
