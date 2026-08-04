import { Metadata } from 'next';
import { products } from '@/data/products';
import ProductsClient from '@/components/products/ProductsClient';

export const metadata: Metadata = {
  title: 'Products & Store — Lahiru Kumarasinghe',
  description:
    'Browse digital UI kits, brand identity templates, ESP32 starter guides, and custom hardware accessories by Lahiru Kumarasinghe.',
};

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mb-12 text-center mx-auto">
        <p className="section-label mb-2">Store</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-4">
          Digital Assets & Custom Hardware
        </h1>
        <p className="text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          Curated Figma design resources, automotive UI templates, and hand-assembled ESP32 hardware gadgets.
        </p>
      </div>

      <ProductsClient products={products} />
    </div>
  );
}
