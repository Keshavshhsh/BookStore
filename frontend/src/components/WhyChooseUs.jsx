import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose Our BookStore?
          </h2>

          <p className="text-center opacity-70 mb-12">
            Discover a better reading experience with our collection and
            services.
          </p>

          <div className="grid md:grid-cols-3 gap-8 ">
            <div
              className="bg-base-200 p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300
        dark:bg-slate-900 dark:text-white
 dark:border
       "
            >
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Huge Collection</h3>
              <p>Explore books across multiple categories and genres.</p>
            </div>

            <div
              className="bg-base-200 p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300
        dark:bg-slate-900 dark:text-white
 dark:border
       "
            >
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Top Authors</h3>
              <p>Discover books from renowned authors around the world.</p>
            </div>

            <div
              className="bg-base-200 p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300
        dark:bg-slate-900 dark:text-white
 dark:border
       "
            >
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Get your favorite books delivered quickly and safely.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
