import Hero from "./Hero";
import ConverterCard from "../components/ConverterCard";
import AdsBanner from "../components/AdBanner";
import Features from "../components/Features";
import { BigAds } from "../components/BigAds";

export default function Home() {
  return (
    <main className="bg-neutral-light dark:bg-neutral-dark min-h-screen">
      <Hero />
      <section className="py-8">
        <ConverterCard />
      </section>

      <AdsBanner />

      <Features />

      <BigAds />
    </main>
  );
}
