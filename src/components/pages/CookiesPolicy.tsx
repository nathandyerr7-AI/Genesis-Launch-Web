import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Cookies Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and provide a better user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: Help us understand how visitors interact with our website</li>
              <li>Functionality cookies: Remember your preferences and settings</li>
              <li>Marketing cookies: Track your activity across websites for marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function and cannot be disabled in our systems.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                <p>These cookies allow us to count visits and traffic sources to measure and improve our website's performance.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Functional Cookies</h3>
                <p>These cookies enable enhanced functionality and personalization on our website.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Targeting Cookies</h3>
                <p>These cookies may be set through our site by our advertising partners to build a profile of your interests.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. 
              However, limiting cookies may impact your experience of our website.
            </p>
            <p className="mt-2">
              To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, 
              visit <a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:info@genesislaunch.com" className="text-primary hover:underline">info@genesislaunch.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;