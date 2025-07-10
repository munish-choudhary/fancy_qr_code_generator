import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Phone, Clock, HelpCircle, Users, Zap } from "lucide-react"

export default function SupportPage() {
  return (
    <PageWrapper className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get the help you need, when you need it. Our dedicated support team is here to assist you with any
              questions or issues you may have.
            </p>
          </header>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Get instant help from our support team. Available 24/7 for urgent issues.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Send us a detailed message and we'll get back to you within 24 hours.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Speak directly with our support team for complex issues or account assistance.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Send us a Message</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <Input
                        placeholder="John"
                        className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        placeholder="Doe"
                        className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <Input
                      placeholder="How can we help you?"
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <Textarea
                      placeholder="Please describe your issue or question in detail..."
                      rows={6}
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How do I start trading?</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Simply connect your wallet, select the tokens you want to swap, enter the amount, and confirm the
                      transaction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What are the trading fees?</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Our trading fees start at 0.3% and decrease based on your trading volume. Network fees apply
                      separately.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Is my wallet secure?</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Yes, we use non-custodial smart contracts. Your funds remain in your wallet until the swap is
                      executed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Which wallets are supported?</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      We support MetaMask, WalletConnect, Coinbase Wallet, and most popular Web3 wallets.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Support Stats */}
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Support Promise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{"<2min"}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Average Response</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Issues Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
