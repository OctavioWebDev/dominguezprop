import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid from '../components/GalleryGrid';
import LogoSection from '../components/LogoSection';
import { getCachedPhotos } from '@/lib/gallery/cached';

export const metadata: Metadata = {
  title: 'Gallery | Dominguez Properties',
  description: 'Photos of commercial properties managed by Dominguez Properties in Northwest Ohio.',
};

export default async function GalleryPage() {
  const photos = await getCachedPhotos();
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <Link href="/" className="text-white hover:underline">&larr; Back to home</Link>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white text-center mt-6 mb-3">Gallery</h1>
        <p className="text-white text-xl text-center">Tap or point at a photo to see the details.</p>
      </section>
      <GalleryGrid photos={photos} />
      <div className="py-12 text-center">
        <Link href="/Contact" className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          Contact Us
        </Link>
      </div>
      <LogoSection />
    </main>
  );
}
