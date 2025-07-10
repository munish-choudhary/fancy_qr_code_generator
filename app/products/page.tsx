import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, BracketsIcon as Bridge, BarChart3, Code, Smartphone, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <PageWrapper className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of DeFi products designed to meet all your cryptocurrency trading and
              investment needs. From simple swaps to advanced trading tools.
            </p>
          </header>

          {/* Main Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Token Swap */}
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <ArrowUpDown className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Token Swap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Instantly swap between 150+ cryptocurrencies with the best rates and lowest fees. Our smart routing
                  ensures optimal pricing across multiple liquidity sources.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Best market rates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Instant execution
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    No registration required
                  </li>
                </ul>
                <Link href="/">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    Start Swapping
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Cross-Chain Bridge */}
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Bridge className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Cross-Chain Bridge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Move your assets seamlessly between different blockchains. Support for Ethereum, BSC, Polygon,
                  Avalanche, and more with secure and fast transfers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Multi-chain support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Secure transfers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Low fees
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* Portfolio Tracker */}
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Portfolio Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Track your cryptocurrency portfolio across multiple wallets and exchanges. Get real-time insights,
                  performance analytics, and tax reporting tools.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Real-time tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Performance analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Tax reporting
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* Developer API */}
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Developer API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Integrate Lexor Swap's functionality into your applications with our comprehensive REST API. Build
                  custom trading bots, DeFi applications, and more.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    RESTful API
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    WebSocket support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Comprehensive docs
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                  View Docs
                </Button>
              </CardContent>
            </Card>

            {/* Mobile App */}
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Trade on the go with our native mobile applications for iOS and Android. Full functionality with
                  biometric security and push notifications.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    iOS & Android
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    Biometric security
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    Push notifications
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Solutions */}
            <Card className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">Enterprise Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Custom DeFi solutions for institutions and enterprises. White-label exchanges, liquidity provision,
                  and dedicated support for high-volume traders.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    White-label solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    Dedicated support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                    Custom integrations
                  </li>
                </ul>
                <Link href="/support">
                  <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Why Choose Lexor Swap?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Execute trades in seconds with our optimized smart contracts and advanced routing algorithms.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Bank-Grade Security</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your funds are protected by multi-signature wallets, regular audits, and insurance coverage.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Global Access</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Available worldwide with support for multiple languages and local payment methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
