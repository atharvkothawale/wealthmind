import React from 'react';

export const metadata = {
  title: 'Privacy Policy | WealthMind Finserve',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#0A0F1E] min-h-screen pt-[120px] pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF6A]/10 mb-6 border border-[#D4AF6A]/20">
          <span className="text-xs font-bold tracking-[0.25em] text-[#D4AF6A] uppercase">
            LEGAL
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Privacy Policy</h1>
        <div className="w-[60px] h-1 bg-[#D4AF6A] mb-10"></div>
        
        <div className="text-[#9CA3AF] text-[18px] leading-relaxed space-y-6">
          <p>
            This privacy policy sets out how WealthMind Finserve uses and protects any information that you give WealthMind Finserve when you use this website. WealthMind Finserve is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. WealthMind Finserve may change this policy from time to time by updating this page.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What we collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>Demographic information such as postcode, preferences and interests</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What we do with the information we gather</h2>
          <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Internal record keeping.</li>
            <li>We may use the information to improve our products and services.</li>
            <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Security</h2>
          <p>
            We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Links to other websites</h2>
          <p>
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Controlling your personal information</h2>
          <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</li>
            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us.</li>
          </ul>

          <p>
            We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
          </p>

          <p>
            If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible. We will promptly correct any information found to be incorrect.
          </p>
        </div>
      </div>
    </main>
  );
}
