import Header from "./components/Header";
import Hero from "./components/Hero";
import ConverterCard from "./components/ConverterCard";
import AdsBanner from "./components/AdBanner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { BigAds } from "./components/BigAds";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header></Header>

      <main className="pt-32">
        <Hero />
        <ConverterCard />
        <AdsBanner />
        <Features />
        <BigAds />
      </main>

      <Footer />
    </div>
  );
}
