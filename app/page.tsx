import CyberpunkGrid from "@/components/CyberpunkGrid";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SpaceSection from "@/components/SpaceSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import ConnectSection from "@/components/ConnectSection";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <CyberpunkGrid />
      <Nav />
      <main>
        <Hero />
        <Divider />
        <SpaceSection />
        <Divider />
        <BlogSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
