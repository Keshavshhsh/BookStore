import React from 'react'

const FAQ = () => {
  return (
    <>
     <div className="max-w-4xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>

      <p className="text-center opacity-70 mb-10">
        Find answers to the most common questions.
      </p>

      <div className="space-y-4 ">

        <div className="collapse collapse-plus bg-base-200 shadow-md dark:bg-slate-900 dark:text-white dark:border ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            How can I purchase a book?
          </div>
          <div className="collapse-content">
            <p>
              Browse the collection, select your favorite book,
              and proceed to checkout.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 shadow-md dark:bg-slate-900 dark:text-white dark:border">
           <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Do you provide free books?
          </div>
          <div className="collapse-content">
            <p>
              Yes! We have a dedicated Free Books section where
              readers can access selected books at no cost.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 shadow-md dark:bg-slate-900 dark:text-white dark:border">
           <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Can I return a purchased book?
          </div>
          <div className="collapse-content">
            <p>
              Yes, books can be returned within 7 days according
              to our return policy.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200 shadow-md dark:bg-slate-900 dark:text-white dark:border">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Are payments secure?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely. All transactions are processed through
              secure and trusted payment gateways.
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default FAQ