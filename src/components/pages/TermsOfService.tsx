import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree 
              with any part of these terms, you may not access our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on Genesis Launch's website for personal, 
              non-commercial transitory viewing only.
            </p>
            <p className="mt-2">This license shall automatically terminate if you violate any of these restrictions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p>
              The materials on Genesis Launch's website are provided on an 'as is' basis. Genesis Launch makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p>
              In no event shall Genesis Launch or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the 
              use or inability to use the materials on Genesis Launch's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Materials</h2>
            <p>
              The materials appearing on Genesis Launch's website could include technical, typographical, or 
              photographic errors. Genesis Launch does not warrant that any of the materials on its website are 
              accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <p>
              Genesis Launch has not reviewed all of the sites linked to its website and is not responsible for 
              the contents of any such linked site. The inclusion of any link does not imply endorsement by 
              Genesis Launch of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p>
              Genesis Launch may revise these terms of service at any time without notice. By using this website, 
              you are agreeing to be bound by the current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Canada and 
              you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:hello@genesislaunch.com" className="text-primary hover:underline">
                hello@genesislaunch.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;