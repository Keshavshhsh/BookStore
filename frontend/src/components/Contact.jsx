import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="dark:bg-slate-900 dark:text-white dark:border">

      <div className="relative min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 overflow-hidden ">
        {/* Background Blurs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

        {/* Main Content */}
        
        <div className="relative z-10">
          {/* Book Image */}


          <div className="dark:bg-slate-900 dark:text-white dark:border">
             <div className="flex justify-center pt-10 mb-10">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.n3sAXxDyR0gM6xT1ZwmXdQHaE8?pid=Api&P=0&h=180"
              alt="Books"
              className="w-64 rounded-xl shadow-lg"
            />
          </div>



        </div>


         

          {/* Hero Section */}

          <div className="dark:bg-slate-900 dark:text-white dark:border">

<div className="text-center py-10 ">
            <h1 className="text-5xl font-bold mb-4">
              We'd Love to Hear From You
            </h1>

            <p className="text-lg opacity-70">
              Have questions about our books? Reach out anytime.
            </p>
          </div>



          </div>
{/* Contact Section */}

          <div className="dark:bg-slate-900 dark:text-white dark:border">

 <div className="px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-10 dark:bg-slate-900
            dark:text-white
            dark:border-pink-500
            dark:shadow-pink-500/20">Contact Us</h1>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 ">
              <div className="bg-base-200 p-8 rounded-xl shadow-xl dark:bg-slate-900 dark:text-white dark:border">
                <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>

                <p className="mb-4">
                  We'd love to hear from you. Feel free to reach out with any
                  questions about our books and services.
                </p>

                <div className="space-y-3">
                  <p>📧 bookstore@gmail.com</p>
                  <p>📞 +91 9876543210</p>
                  <p>📍 Lucknow, Uttar Pradesh</p>
                </div>
              </div>

              <div className="bg-base-200 p-8 rounded-xl shadow-xl dark:bg-slate-900 dark:text-white dark:border ">
                <form className="space-y-4 ">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full dark:bg-slate-900 dark:text-white dark:border-white"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full dark:bg-slate-900 dark:text-white dark:border-white"
                  />

                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="textarea textarea-bordered w-full dark:bg-slate-900 dark:text-white dark:border-white"
                  ></textarea>

                  <button className="btn btn-primary w-full">Submit</button>
                </form>
              </div>
            </div>
          </div>



          </div>

          

          
         

          {/* FAQ Section */}
          <div className="dark:bg-slate-900 dark:text-white dark:border">

<div className="max-w-4xl mx-auto px-6 pb-20">
            <h2 className="text-3xl font-bold mb-6 text-center mt-5">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 ">
              <div className="bg-base-200 p-4 rounded-xl shadow-md dark:bg-slate-900 dark:text-white dark:border">
                <h3 className="font-semibold">How do I purchase a book?</h3>
                <p>Add the book to your cart and proceed to checkout.</p>
              </div>

              <div className="bg-base-200 p-4 rounded-xl shadow-md dark:bg-slate-900 dark:text-white dark:border">
                <h3 className="font-semibold">Can I return a book?</h3>
                <p>Yes, within 7 days of purchase.</p>
              </div>
            </div>
          </div>




          </div>

          
        </div>

      </div>

      

    </div>
    <Footer/>

      
    </>
  );
};

export default Contact;
