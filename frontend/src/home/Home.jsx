import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <WhyChooseUs />

      {/* Reading Quote Banner */}
      <div className="py-24 px-6 relative overflow-hidden ">
        {/* Background Glow */}
        <div className="absolute top-0 left-10 w-60 h-60 bg-pink-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-60 h-60 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

        <div
          className="
            relative
            max-w-5xl
            mx-auto
            bg-base-200
            rounded-3xl
            shadow-2xl
            p-12
            text-center
            border
            border-base-300 dark:bg-slate-900 dark:text-white dark:border"
        >
          <div className="text-6xl mb-4 opacity-40 dark:bg-slate-900 dark:text-white dark:border">
            ❝
          </div>

          <h2
            className="
            text-3xl
            md:text-5xl
            font-bold
            italic
            leading-relaxed dark:bg-slate-900 dark:text-white dark:border"
          >
            A reader lives a thousand lives before he dies.
          </h2>

          <p className="mt-6 text-lg opacity-70">
            Discover your next adventure through books and unlock worlds beyond
            imagination.
          </p>

          <div className="mt-8 dark:bg-slate-900 dark:text-white dark:border">
            <span className="badge badge-primary badge-lg">Book Lovers ❤️</span>
          </div>

        </div>
      </div>

      <FAQ />

      <Footer />
    </>
  );
};

export default Home;
