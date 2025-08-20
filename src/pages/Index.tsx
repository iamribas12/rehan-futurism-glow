import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Applications from "@/components/Applications";
import ClientsReviews from "@/components/ClientsReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
  );
};

export default Index;