'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Download, Package } from 'lucide-react';
import { Product } from '@/types';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isDigital = product.type === 'digital';

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="h-full"
      id={`product-card-${product.id}`}
    >
      <div className="flex flex-col h-full gum-card overflow-hidden group">
        {/* Image area */}
        <div className="relative aspect-video bg-gradient-to-br from-surface-card to-surface-border dark:from-surface-card-dark dark:to-surface-border-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/20 via-brand-pink/15 to-brand-purple/10 flex items-center justify-center">
            <span className="text-5xl opacity-30 select-none">
              {isDigital ? '📦' : '🔩'}
            </span>
          </div>
          {product.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageUrl}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          )}

          {/* Type + Badge */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            <Badge variant={isDigital ? 'accent' : 'success'}>
              {isDigital ? 'Digital' : 'Physical'}
            </Badge>
            {product.badge && <Badge variant="warning">{product.badge}</Badge>}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-base text-ink-DEFAULT dark:text-ink-dark mb-2 leading-snug">
            {product.title}
          </h3>
          <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed flex-1 mb-4">
            {product.description}
          </p>

          {/* Price + Buy */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-surface-border dark:border-surface-border-dark">
            <div>
              <span className="text-xl font-extrabold text-ink-DEFAULT dark:text-ink-dark">
                ${product.price}
              </span>
              <span className="ml-1 text-xs text-ink-muted dark:text-ink-muted-dark">
                {product.currency}
              </span>
            </div>
            <motion.a
              href={product.buyUrl}
              target={product.buyUrl !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={`Buy ${product.title}`}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-btn bg-brand-coral text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-glow-pink"
            >
              {isDigital ? <Download size={13} /> : <Package size={13} />}
              {isDigital ? 'Download' : 'Order'}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
