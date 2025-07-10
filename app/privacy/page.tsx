import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <PageWrapper className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Last updated: January 15, 2024</p>
          </header>

          <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
                    <p>We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Create an account or register for our services</li>
                      <li>Contact us for customer support</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Participate in surveys, contests, or promotions</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
                      Automatically Collected Information
                    </h3>
                    <p>When you visit our website or use our services, we automatically collect certain information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Device information and operating system</li>
                      <li>Usage patterns and preferences</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. How We Use Your Information
                  </h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>We use the information we collect for various purposes, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Providing and maintaining our services</li>
                      <li>Processing transactions and managing your account</li>
                      <li>Communicating with you about our services</li>
                      <li>Improving our website and user experience</li>
                      <li>Detecting and preventing fraud or security issues</li>
                      <li>Complying with legal obligations</li>
                      <li>Sending marketing communications (with your consent)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    3. Information Sharing and Disclosure
                  </h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without
                      your consent, except in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With service providers who assist us in operating our website and services</li>
                      <li>When required by law or to respond to legal process</li>
                      <li>To protect our rights, property, or safety, or that of our users</li>
                      <li>In connection with a merger, acquisition, or sale of assets</li>
                      <li>With your explicit consent for specific purposes</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal
                      information against unauthorized access, alteration, disclosure, or destruction. These measures
                      include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Employee training on data protection practices</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Your Rights and Choices</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access: Request access to your personal information</li>
                      <li>Rectification: Request correction of inaccurate information</li>
                      <li>Erasure: Request deletion of your personal information</li>
                      <li>Portability: Request transfer of your data to another service</li>
                      <li>Objection: Object to processing of your personal information</li>
                      <li>Restriction: Request restriction of processing</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Cookies and Tracking Technologies
                  </h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      We use cookies and similar tracking technologies to enhance your experience on our website. You
                      can control cookie settings through your browser preferences. Types of cookies we use include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Essential cookies for website functionality</li>
                      <li>Analytics cookies to understand usage patterns</li>
                      <li>Preference cookies to remember your settings</li>
                      <li>Marketing cookies for targeted advertising</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    7. International Data Transfers
                  </h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      Your information may be transferred to and processed in countries other than your own. We ensure
                      appropriate safeguards are in place to protect your personal information in accordance with
                      applicable data protection laws.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Changes to This Policy</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by
                      posting the new policy on this page and updating the "Last updated" date. Your continued use of
                      our services after such changes constitutes acceptance of the updated policy.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Us</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                    <ul className="list-none space-y-2">
                      <li>Email: privacy@lexorswap.com</li>
                      <li>Address: 123 Blockchain Street, Crypto City, CC 12345</li>
                      <li>Phone: +1 (555) 123-4567</li>
                    </ul>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  )
}
