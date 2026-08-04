import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import NewsletterBlock from '@/components/home/NewsletterBlock';
import { getAllArticles } from '@/lib/mdx';
import { projects } from '@/data/projects';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Lahiru Kumarasinghe — Automotive Technician, Designer & Creator',
  description:
    'Personal website of Lahiru Kumarasinghe — automotive technician, UI/UX designer, embedded systems enthusiast, and creator from Sri Lanka.',
};

export default function HomePage() {
  const articles = getAllArticles();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <FeaturedArticles articles={articles} />
      <FeaturedProjects projects={featuredProjects} />
      <FeaturedProducts products={products} />
      <NewsletterBlock />
    </>
  );
}
