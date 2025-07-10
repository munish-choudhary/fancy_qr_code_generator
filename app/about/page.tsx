import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Zap, Globe, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <PageWrapper className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Lexor Swap
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing the cryptocurrency exchange experience with cutting-edge technology, unmatched
              security, and user-centric design. Join millions of users who trust Lexor Swap for their digital asset
              trading needs.
            </p>
          </header>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To democratize access to decentralized finance by providing the most secure, efficient, and
                  user-friendly cryptocurrency exchange platform. We believe everyone should have the power to control
                  their financial future through blockchain technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To become the world's leading decentralized exchange platform, fostering financial inclusion and
                  empowering individuals globally. We envision a future where traditional financial barriers are
                  eliminated through innovative blockchain solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Security First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your assets are protected by enterprise-grade security measures, multi-signature wallets, and regular
                  security audits by leading blockchain security firms.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User-Centric</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every feature is designed with our users in mind. We prioritize intuitive interfaces, fast
                  transactions, and responsive customer support to ensure the best experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We continuously push the boundaries of what's possible in DeFi, implementing cutting-edge technologies
                  to provide faster, cheaper, and more efficient trading solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Lexor Swap by Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$2.5B+</div>
                <div className="text-gray-600 dark:text-gray-400">Total Volume Traded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">500K+</div>
                <div className="text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">150+</div>
                <div className="text-gray-600 dark:text-gray-400">Supported Tokens</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Built by Experts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Our team consists of blockchain engineers, security experts, and financial technology veterans from
              leading companies like Coinbase, Binance, and traditional finance institutions.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
