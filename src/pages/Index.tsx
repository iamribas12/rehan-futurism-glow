import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Applications from "@/components/Applications";
import ClientsReviews from "@/components/ClientsReviews";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <div className="pt-16">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <Applications />
          <ClientsReviews />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;