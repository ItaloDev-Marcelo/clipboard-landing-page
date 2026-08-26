import { AccessClipboard } from '@/components/AccessClipboard';
import { Footer } from '@/components/Footer';
import {Hero} from '@/components/Hero'
import { KeepTrack } from '@/components/KeepTrack';
import {Supercharge} from '@/components/Supercharge';

export default function Home() {
  return (
    <>
    <Hero />
    <main>
    <KeepTrack/>
    <AccessClipboard />
    <Supercharge />
    </main>
    <Footer />
    </>
  );
}
