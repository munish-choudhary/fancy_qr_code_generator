import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <PageWrapper className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Please read these terms carefully before using our services. By using Lexor Swap, you agree to these
              terms.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Last updated: January 15, 2024</p>
          </header>

          <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
            <CardContent className="p-8 prose prose-gray dark:prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      By accessing and using Lexor Swap ("the Service"), you accept and agree to be bound by the terms
                      and provision of this agreement. If you do not agree to abide by the above, please do not use this
                      service.
                    </p>
                    <p>
                      These Terms of Service ("Terms") govern your use of our website located at lexorswap.com and our
                      decentralized exchange services operated by Lexor Swap ("us", "we", or "our").
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      Lexor Swap is a decentralized exchange (DEX) platform that allows users to swap cryptocurrencies
                      directly from their wallets. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Token swapping across multiple blockchain networks</li>
                      <li>Liquidity provision and yield farming opportunities</li>
                      <li>Portfolio tracking and analytics tools</li>
                      <li>API access for developers and institutional users</li>
                      <li>Educational resources and market insights</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Eligibility</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>To use our services, you must:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                      <li>Have the legal capacity to enter into binding agreements</li>
                      <li>Not be located in a jurisdiction where our services are prohibited</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Not be on any sanctions lists or prohibited persons lists</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Wallet Connection and Security
                  </h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>When using our services, you are responsible for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Maintaining the security of your wallet and private keys</li>
                      <li>Ensuring your wallet software is up to date and secure</li>
                      <li>Verifying transaction details before confirming</li>
                      <li>Understanding the risks associated with blockchain transactions</li>
                      <li>Keeping your account information confidential</li>
                    </ul>
                    <p>
                      We are not custodians of your funds and cannot recover lost private keys or reverse transactions.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Fees and Payments</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>Our fee structure includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Trading fees: Variable based on trading volume and token pair</li>
                      <li>Network fees: Paid directly to blockchain networks (gas fees)</li>
                      <li>Premium features: Additional fees may apply for advanced services</li>
                    </ul>
                    <p>
                      All fees are clearly displayed before transaction confirmation. Fees are subject to change with
                      reasonable notice.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Prohibited Activities</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>You agree not to engage in any of the following prohibited activities:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Money laundering or financing of terrorism</li>
                      <li>Market manipulation or fraudulent trading practices</li>
                      <li>Violating any applicable laws or regulations</li>
                      <li>Attempting to hack, disrupt, or damage our systems</li>
                      <li>Creating multiple accounts to circumvent restrictions</li>
                      <li>Using our services for illegal purposes</li>
                      <li>Impersonating others or providing false information</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Risks and Disclaimers</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>Cryptocurrency trading involves significant risks, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Price volatility and potential loss of funds</li>
                      <li>Smart contract risks and potential bugs</li>
                      <li>Regulatory changes affecting cryptocurrency markets</li>
                      <li>Network congestion and failed transactions</li>
                      <li>Impermanent loss in liquidity provision</li>
                    </ul>
                    <p>You acknowledge these risks and agree that you use our services at your own risk.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      To the maximum extent permitted by law, Lexor Swap shall not be liable for any indirect,
                      incidental, special, consequential, or punitive damages, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Loss of profits, data, or business opportunities</li>
                      <li>Trading losses or investment decisions</li>
                      <li>Network failures or smart contract bugs</li>
                      <li>Third-party actions or omissions</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Intellectual Property</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      All content, features, and functionality of our service are owned by Lexor Swap and are protected
                      by copyright, trademark, and other intellectual property laws. You may not:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Copy, modify, or distribute our content without permission</li>
                      <li>Use our trademarks or branding without authorization</li>
                      <li>Reverse engineer or attempt to extract source code</li>
                      <li>Create derivative works based on our services</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Termination</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      We may terminate or suspend your access to our services immediately, without prior notice, for any
                      reason, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Violation of these Terms of Service</li>
                      <li>Fraudulent or illegal activity</li>
                      <li>Risk to our platform or other users</li>
                      <li>Regulatory requirements</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction],
                      without regard to its conflict of law provisions. Any disputes arising from these Terms shall be
                      resolved through binding arbitration.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Changes to Terms</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                      We reserve the right to modify these Terms at any time. We will notify users of material changes
                      through our website or email. Continued use of our services after such changes constitutes
                      acceptance of the new Terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Contact Information</h2>
                  <div className="text-gray-600 dark:text-gray-400 space-y-4">
                    <p>If you have any questions about these Terms of Service, please contact us:</p>
                    <ul className="list-none space-y-2">
                      <li>Email: legal@lexorswap.com</li>
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
