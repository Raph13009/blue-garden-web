
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Activities from "@/components/Activities";
import CourseDesHeros from "@/components/CourseDesHeros";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-dm-sans">
      <Header />
      <Hero />
      <Mission />
      <Activities />
      <CourseDesHeros />
      <Footer />
    </div>
  );
};

export default Index;
