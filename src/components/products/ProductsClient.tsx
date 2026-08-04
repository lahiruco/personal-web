'use client';

import { useState, useMemo } from 'react';
import { Product, ProductType } from '@/types';
import ProductCard from '@/components/products/ProductCard';
import ProductTabs from '@/components/products/ProductTabs';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductsClientProps {
  products: Product[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const [tab, setTab] = useState<ProductType | 'all'>('all');

  const filteredProducts = useMemo(() => {
    if (tab === 'all') return products;
    return products.filter((p) => p.type === tab);
  }, [products, tab]);

  return (
    <div>
      <div className="flex justify-center mb-10">
        <ProductTabs active={tab} onChange={setTab} />
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
