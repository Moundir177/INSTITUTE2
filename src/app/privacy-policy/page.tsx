import React from "react";
import { Section } from "@/components/ui/Section";

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-28">
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1 className="text-3xl font-bold text-ukblue mb-8">Privacy Policy</h1>
        <p className="text-gray-600 italic mb-8">Last Updated: May 1, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
            <p>
              Welcome to Royal Academy UK's Privacy Policy. At Royal Academy UK, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and inform you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, date of birth, and gender.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
              <li><strong>Educational Data</strong> includes your educational history, qualifications, certifications, and academic records.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of courses or services you have purchased from us.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">3. How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
              <li>With your consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
            </p>
            <p>
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">6. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Request access</strong> to your personal data.</li>
              <li><strong>Request correction</strong> of your personal data.</li>
              <li><strong>Request erasure</strong> of your personal data.</li>
              <li><strong>Object to processing</strong> of your personal data.</li>
              <li><strong>Request restriction of processing</strong> your personal data.</li>
              <li><strong>Request transfer</strong> of your personal data.</li>
              <li><strong>Right to withdraw consent</strong>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">7. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them, see our Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">8. Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">9. Changes to the Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top. You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at:
            </p>
            <div className="mt-4">
              <p><strong>Email:</strong> <a href="mailto:privacy@royalacademyuk.com" className="text-ukblue hover:underline">privacy@royalacademyuk.com</a></p>
              <p><strong>Postal Address:</strong> Data Protection Officer, Royal Academy UK, 123 Royal Avenue, London, United Kingdom, SW1A 1AA</p>
              <p><strong>Telephone:</strong> <a href="tel:+442071234570" className="text-ukblue hover:underline">+44 20 7123 4570</a></p>
            </div>
          </section>
        </div>
      </div>
    </Section>
  );
} 