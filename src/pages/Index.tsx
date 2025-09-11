import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// import Barbers from "@/components/Barbers";
import BookingPreview from "@/components/BookingPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* <Barbers /> */}
        <BookingPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
