
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Activities from "@/components/Activities";
import CourseDesHeros from "@/components/CourseDesHeros";
import Participate from "@/components/Participate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-dm-sans">
      <Header />
      <Hero />
      <Mission />
      <Activities />
      <CourseDesHeros />
      <Participate />
      <Footer />
    </div>
  );
};

export default Index;
