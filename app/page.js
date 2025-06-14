// import Image from "next/image";

import Header from '@/components/Header';
import HeroSection from "@/components/HeroSection";
import InfoCardsSection from "@/components/InfoCardsSection";
import JobSection from "@/components/JobSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <InfoCardsSection />
      <JobSection />
      {/* <Image src="/images/svg/globe.svg" alt="Globe" width={400} height={300} /> */}
      <p className='text-center'>This is your homepage.</p>
    </div>
  );
}
