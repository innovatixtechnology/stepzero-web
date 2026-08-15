import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | Step Zero", description: "How Step Zero with Palasha collects, uses and protects information shared through this website." };

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-[720px] mx-auto px-6 md:px-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[36px] font-bold text-[#2C2C2C] mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-[#2C2C2C]/80 leading-[1.8]">
          <p>
            At Step Zero with Palasha, your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our website or use our services.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Information We Collect
          </h2>
          <p>
            We collect information that you voluntarily provide to us when
            you:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Fill out a contact form</li>
            <li>Subscribe to our newsletter or free guide</li>
            <li>Book a consultation through our website</li>
            <li>Contact us directly</li>
          </ul>
          <p>This may include your name, email address, and any other information you choose to share.</p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            How We Use Your Information
          </h2>
          <p>We use your information solely to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Respond to your inquiries</li>
            <li>Provide you with the services you requested</li>
            <li>Send you relevant updates and content (with your consent)</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Data Protection
          </h2>
          <p>
            We take reasonable precautions to protect your personal information.
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Cookies
          </h2>
          <p>
            Our website may use cookies and similar technologies to enhance your
            browsing experience. You can control cookie preferences through your
            browser settings.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. To exercise these rights, please contact us at
            hello@stepzerowithpalasha.com.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date.
          </p>

          <p className="text-sm text-[#2C2C2C]/60 mt-8">
            Last updated: May 2026
          </p>
        </div>
      </div>
    </section>
  );
}
