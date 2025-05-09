import React from "react";
import { Section } from "@/components/ui/Section";

export default function RefundPolicyPage() {
  return (
    <Section className="pt-28">
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1 className="text-3xl font-bold text-ukblue mb-8">Refund Policy</h1>
        <p className="text-gray-600 italic mb-8">Last Updated: May 1, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
            <p>
              This Refund Policy outlines the terms and conditions for refunds at Royal Academy UK. We are committed to maintaining a fair and transparent refund process for all our students and clients. Please read this policy carefully to understand your rights and responsibilities regarding refunds for our courses and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">2. Course Cancellation by Royal Academy UK</h2>
            <p>In the event that Royal Academy UK cancels a course:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Students will be offered a full refund of all fees paid.</li>
              <li>Alternatively, students may choose to transfer to another course of equal value.</li>
              <li>Royal Academy UK will make every effort to notify students of cancellations at least 14 days prior to the course start date.</li>
              <li>In cases of emergency cancellations, students will be notified as soon as possible and provided with the refund or transfer options outlined above.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">3. Course Withdrawal by Student</h2>
            <p>For withdrawals initiated by students, the following refund schedule applies:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-silver-200 my-4">
                <thead className="bg-silver-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Withdrawal Timeframe</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-silver-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">More than 28 days before course start date</td>
                    <td className="px-6 py-4 whitespace-nowrap">Full refund minus a £100 administrative fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">14-27 days before course start date</td>
                    <td className="px-6 py-4 whitespace-nowrap">75% refund of total course fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">7-13 days before course start date</td>
                    <td className="px-6 py-4 whitespace-nowrap">50% refund of total course fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Less than 7 days before course start date</td>
                    <td className="px-6 py-4 whitespace-nowrap">No refund</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">After course has started</td>
                    <td className="px-6 py-4 whitespace-nowrap">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Please note that all withdrawal requests must be made in writing to <a href="mailto:admissions@royalacademyuk.com" className="text-ukblue hover:underline">admissions@royalacademyuk.com</a>. The date of the email or letter will be considered the official withdrawal date for refund calculation purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">4. Special Circumstances</h2>
            <p>
              Royal Academy UK recognizes that exceptional circumstances may arise that prevent students from continuing their education. In cases of serious illness, bereavement, or other extenuating circumstances, students may apply for a special consideration refund.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Applications must be made in writing to the Finance Department.</li>
              <li>Supporting documentation (e.g., medical certificates) must be provided.</li>
              <li>Each case will be reviewed individually, and decisions will be made at the discretion of Royal Academy UK management.</li>
              <li>If approved, refunds may be issued or course credits may be provided for future enrollment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">5. Non-Refundable Fees</h2>
            <p>The following fees are non-refundable under any circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Application fees</li>
              <li>Registration fees</li>
              <li>Course materials that have been issued to the student</li>
              <li>Technology fees once access to online platforms has been granted</li>
              <li>Insurance fees</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">6. Payment of Refunds</h2>
            <p>
              Approved refunds will be processed within 30 days of the approval date. Refunds will be issued using the original payment method:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credit/debit card payments will be refunded to the original card.</li>
              <li>Bank transfers will be refunded to the originating account.</li>
              <li>Cash payments will be refunded via bank transfer to an account nominated by the student.</li>
            </ul>
            <p>
              Please note that bank charges and currency exchange rate fluctuations may affect the final refunded amount, particularly for international transactions. Royal Academy UK is not responsible for any fees charged by the student's financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">7. Course Transfers</h2>
            <p>
              Students may request to transfer to a different course prior to their original course start date:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transfer requests must be made in writing at least 14 days before the original course start date.</li>
              <li>A transfer fee of £50 will apply.</li>
              <li>If the new course fee is higher, the student must pay the difference.</li>
              <li>If the new course fee is lower, the difference will be refunded according to the refund schedule in Section 3.</li>
              <li>Transfer requests received less than 14 days before the course start date will be considered on a case-by-case basis and may incur additional fees.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">8. Visa Refusal Refunds</h2>
            <p>
              For international students who have been refused a visa to study in the United Kingdom:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A full refund minus a £200 administrative fee will be provided if documentary evidence of visa refusal is submitted.</li>
              <li>Evidence must be provided within 14 days of the visa refusal date.</li>
              <li>Refunds will not be granted if the visa was refused due to insufficient or fraudulent documentation provided by the student.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">9. Changes to Refund Policy</h2>
            <p>
              Royal Academy UK reserves the right to update or modify this Refund Policy at any time. Any changes will be posted on our website, and the "Last Updated" date at the top of this policy will be revised accordingly. Students are encouraged to review this policy periodically to stay informed of our refund terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">10. Contact Information</h2>
            <p>
              If you have any questions about our Refund Policy or to submit a refund request, please contact:
            </p>
            <div className="mt-4">
              <p><strong>Finance Department</strong></p>
              <p><strong>Email:</strong> <a href="mailto:finance@royalacademyuk.com" className="text-ukblue hover:underline">finance@royalacademyuk.com</a></p>
              <p><strong>Telephone:</strong> <a href="tel:+442071234569" className="text-ukblue hover:underline">+44 20 7123 4569</a></p>
              <p><strong>Postal Address:</strong> Finance Department, Royal Academy UK, 123 Royal Avenue, London, United Kingdom, SW1A 1AA</p>
            </div>
          </section>
        </div>
      </div>
    </Section>
  );
} 