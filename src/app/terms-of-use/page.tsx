import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use | Step Zero", description: "Terms governing use of the Step Zero with Palasha website and its educational content." };

export default function TermsOfUsePage() {
  return (
    <section className="bg-[#FAF7F2] pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-[720px] mx-auto px-6 md:px-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[36px] font-bold text-[#2C2C2C] mb-8">
          Terms of Use
        </h1>
        <div className="space-y-6 text-[#2C2C2C]/80 leading-[1.8]">
          <p>
            Welcome to Step Zero with Palasha. By accessing or using this
            website, you agree to be bound by these Terms of Use. If you do not
            agree with any part of these terms, please do not use this website.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Use of Website
          </h2>
          <p>
            This website and its content are provided for informational and
            educational purposes only. You may use this website for personal,
            non-commercial purposes. You may not modify, reproduce, distribute,
            or create derivative works from any content without express written
            permission.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Intellectual Property
          </h2>
          <p>
            All content on this website, including text, images, logos, and
            design elements, is the property of Step Zero with Palasha and is
            protected by copyright and other intellectual property laws.
            Unauthorized use or reproduction of any content is prohibited.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            User Conduct
          </h2>
          <p>
            You agree not to use this website in any way that:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Violates any applicable laws or regulations</li>
            <li>Is fraudulent, deceptive, or misleading</li>
            <li>Harasses, abuses, or harms others</li>
            <li>Interferes with the operation of the website</li>
            <li>Attempts to gain unauthorized access to the website or its systems</li>
          </ul>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Limitation of Liability
          </h2>
          <p>
            Step Zero with Palasha and its coaches are not liable for any direct,
            indirect, incidental, consequential, or punitive damages arising from
            your use of this website or its content. This includes, but is not
            limited to, damages for loss of profits, data, or other intangible
            losses.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Third-Party Links
          </h2>
          <p>
            This website may contain links to third-party websites. We do not
            endorse or assume responsibility for the content, products, or services
            of any linked websites. Visiting these links is at your own risk.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Changes to These Terms
          </h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. Any
            changes will be posted on this page with an updated effective date.
            Your continued use of the website after such changes constitutes
            acceptance of the new terms.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Governing Law
          </h2>
          <p>
            These Terms of Use are governed by and construed in accordance with
            the laws of India, without regard to its conflict of law provisions.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C2C2C] mt-8">
            Contact
          </h2>
          <p>
            If you have any questions about these Terms of Use, please contact
            us at <a href="mailto:palasha@stepzero.life" className="text-[#C17B5C] hover:underline">palasha@stepzero.life</a>.
          </p>

          <p className="text-sm text-[#2C2C2C]/60 mt-8">
            Last updated: May 2026
          </p>
        </div>
      </div>
    </section>
  );
}
