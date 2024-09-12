import Companies from "@/Components/HomePage/Companies";
import Courses from "@/Components/HomePage/Courses";
import Footer from "@/Components/HomePage/Footer/Footer";
import Hero from "@/Components/HomePage/Hero";
import Navbar from "@/Components/HomePage/Navbar/Navbar";
import Paycheck from "@/Components/HomePage/Paycheck";
import Register from "@/Components/HomePage/Register";
import Skills from "@/Components/HomePage/Skills";
import TryApp from "@/Components/HomePage/TryApp";
import WeHelpwith from "@/Components/HomePage/WeHelpwith";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Paycheck/>
      <Courses/>
      <Companies/>
      <WeHelpwith/>
      <Skills/>
      <Register/>
      <TryApp/>
      <Footer/>      
    </>
  );
}
