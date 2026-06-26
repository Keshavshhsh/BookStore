import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="dark:bg-slate-900 dark:text-white">
        <div
          className="relative min-h-screen bg-base-100 text-base-content overflow-hidden
       "
        >
          {/* Background Glow Effects */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary opacity-20 rounded-full blur-3xl animate-pulse "></div>

          <div className="relative z-10 ">
            {/* Hero Section */}
            <div className="text-center py-20 px-6 dark:bg-slate-900 dark:text-white ">
              <div className="flex justify-center mb-10 dark:bg-slate-900 dark:text-white ">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                  alt="Library"
                  className="w-full max-w-4xl h-72 object-cover rounded-3xl shadow-2xl"
                />
              </div>

              <h1
                className="
              dark:bg-slate-900 dark:text-white
            text-5xl md:text-6xl
            font-extrabold
            mb-6
            bg-gradient-to-r
            from-primary
            to-secondary
            bg-clip-text
            text-transparent
                  "
              >
                About Our BookStore
              </h1>

              <p className="max-w-2xl mx-auto text-lg opacity-80">
                Discover thousands of books from your favorite authors. Our
                mission is to connect readers with stories that inspire,
                educate, and entertain.
              </p>
            </div>

            {/* Mission Section */}

            <div className="dark:bg-slate-900 dark:text-white dark:border ">
              <div className="max-w-5xl mx-auto px-6 mb-16 dark:bg-slate-900 dark:text-white mt-5">
                <div
                  className="
              dark:bg-slate-900 dark:text-white
            bg-base-200
            rounded-2xl
            shadow-2xl
            p-10 
            border border-base-300"
                >
                  <h2 className="text-3xl font-bold mb-4 ">Our Mission</h2>

                  <p className="leading-8 text-lg">
                    We believe books have the power to transform lives. Our goal
                    is to provide an easy and enjoyable platform where readers
                    can explore, discover, and purchase books from various
                    categories. Whether you're a student, professional, or
                    passionate reader, we strive to help you find your next
                    favorite book.
                  </p>
                </div>
              </div>

              <div className="divider max-w-4xl mx-auto mb-16 dark:bg-slate-900 dark:text-white"></div>
            </div>

            {/* Features Section */}

            <div className="dark:bg-slate-900 dark:text-white dark:border  ">
              <div className="max-w-6xl mx-auto px-6 mb-20 dark:bg-slate-900 dark:text-white mt-6 ">
                <h2 className="text-4xl font-bold text-center mb-10  ">
                  What We Offer
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                  <div
                    className="
              bg-base-200
              p-6
              rounded-xl
              shadow-lg
              text-center
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl dark:bg-slate-900 dark:text-white dark:border"
                  >
                    <h3 className="text-5xl mb-4">📚</h3>
                    <h4 className="font-semibold text-xl">
                      Thousands of Books
                    </h4>
                    <p className="mt-3 text-sm opacity-80">
                      Explore books from various categories and genres.
                    </p>
                  </div>

                  <div
                    className="
              bg-base-200
              p-6
              rounded-xl
              shadow-lg
              text-center
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl dark:bg-slate-900 dark:text-white dark:border"
                  >
                    <h3 className="text-5xl mb-4">⭐</h3>
                    <h4 className="font-semibold text-xl">Top Authors</h4>
                    <p className="mt-3 text-sm opacity-80">
                      Discover books from renowned writers worldwide.
                    </p>
                  </div>

                  <div
                    className="
              bg-base-200
              p-6
              rounded-xl
              shadow-lg
              text-center
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl dark:bg-slate-900 dark:text-white dark:border"
                  >
                    <h3 className="text-5xl mb-4">🚚</h3>
                    <h4 className="font-semibold text-xl">Fast Delivery</h4>
                    <p className="mt-3 text-sm opacity-80">
                      Quick and reliable shipping for your orders.
                    </p>
                  </div>

                  <div
                    className="
              bg-base-200
              p-6
              rounded-xl
              shadow-lg
              text-center
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl dark:bg-slate-900 dark:text-white dark:border"
                  >
                    <h3 className="text-5xl mb-4">💳</h3>
                    <h4 className="font-semibold text-xl">Secure Payments</h4>
                    <p className="mt-3 text-sm opacity-80">
                      Safe and trusted checkout experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divider max-w-4xl mx-auto mb-16 dark:bg-slate-900 dark:text-white dark:border"></div>
            </div>

            {/* Statistics Section */}
            <div className="dark:bg-slate-900 dark:text-white dark:border ">
              <div className="max-w-5xl mx-auto px-6 mb-20 dark:bg-slate-900 dark:text-white dark:border mt-9  ">
                <h2 className="text-4xl font-bold text-center mb-10 mt-4">
                  Our Impact
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div
                    className="
                dark:bg-slate-900 dark:text-white dark:border
              bg-base-200
              p-8
              rounded-2xl
              shadow-lg
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl mb-6"
                  >
                    <h3 className="text-5xl font-bold text-primary">5000+</h3>
                    <p className="mt-3 text-lg ">Books Available</p>
                  </div>

                  <div
                    className="
              bg-base-200
              p-8
              rounded-2xl
              shadow-lg
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl  dark:bg-slate-900 dark:text-white dark:border mb-6"
                  >
                    <h3 className="text-5xl font-bold text-primary">1000+</h3>
                    <p className="mt-3 text-lg">Happy Readers</p>
                  </div>

                  <div
                    className="
              bg-base-200
              p-8
              rounded-2xl
              shadow-lg
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl  dark:bg-slate-900 dark:text-white dark:border mb-6"
                  >
                    <h3 className="text-5xl font-bold text-primary">200+</h3>
                    <p className="mt-3 text-lg">Popular Authors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}

            <div className="text-center pb-24 px-6  dark:bg-slate-900 dark:text-white dark:border">
              <h2 className="text-4xl font-bold mb-4 mt-5">
                Ready to Start Reading?
              </h2>

              <p className="text-lg opacity-80 mb-8">
                Join thousands of readers discovering amazing books every day.
              </p>

              <button
                className="
            btn btn-primary btn-lg
            transition-all
            duration-300
            hover:scale-110"
              >
                Browse Books
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default About;
