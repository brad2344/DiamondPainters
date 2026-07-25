import Cursor from "@/components/Cursor/Cursor";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Strip from "@/components/Strip/Strip";
import Philosophy from "@/components/Philosophy/Philosophy";
import Services from "@/components/Services/Services";
import Sash from "@/components/Sash/Sash";
import Gallery from "@/components/Gallery/Gallery";
import Eco from "@/components/Eco/Eco";
import ReviewBar from "@/components/ReviewBar/ReviewBar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Strip />
        <Philosophy />
        <Services />
        <Sash />
        <Gallery />
        <Eco />
        <ReviewBar />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
