"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TokenSelector } from "./token-selector"
import { ArrowUpDown, Settings, Zap } from "lucide-react"

interface Token {
  symbol: string
  name: string
  coinCode: string
  mainNetwork: string
  contact?: string
}

interface QuoteData {
  instantRate: string
  depositMin: string
  depositMax: string
  minerFee: string
  receiveCoinFee: string
  estimatedTime: string
  isSupport: boolean
}

export function SwapInterface() {
  const [fromToken, setFromToken] = useState<Token | null>(null)
  const [toToken, setToToken] = useState<Token | null>(null)
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [isSwapping, setIsSwapping] = useState(false)
  const [quote, setQuote] = useState<QuoteData | null>(null)
  const [loadingQuote, setLoadingQuote] = useState(false)

  // Fetch quote when tokens and amount change
  useEffect(() => {
    const fetchQuote = async () => {
      if (!fromToken || !toToken || !fromAmount) {
        setQuote(null)
        setToAmount("")
        return
      }

      setLoadingQuote(true)
      try {
        const response = await fetch("/api/quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            depositCoinCode: fromToken.coinCode,
            receiveCoinCode: toToken.coinCode,
          }),
        })

        const data = await response.json()
        if (data.data && data.data.isSupport) {
          setQuote(data.data)
          // Calculate estimated receive amount
          const estimatedAmount = (Number.parseFloat(fromAmount) * Number.parseFloat(data.data.instantRate)).toFixed(6)
          setToAmount(estimatedAmount)
        } else {
          setQuote(null)
          setToAmount("")
        }
      } catch (error) {
        console.error("Error fetching quote:", error)
        setQuote(null)
        setToAmount("")
      } finally {
        setLoadingQuote(false)
      }
    }

    const debounceTimer = setTimeout(fetchQuote, 500)
    return () => clearTimeout(debounceTimer)
  }, [fromToken, toToken, fromAmount])

  const handleSwapTokens = () => {
    const tempToken = fromToken
    const tempAmount = fromAmount
    setFromToken(toToken)
    setToToken(tempToken)
    setFromAmount(toAmount)
    setToAmount(tempAmount)
  }

  const handleSwap = async () => {
    if (!fromToken || !toToken || !fromAmount || !quote) return

    setIsSwapping(true)
    // Here you would implement the actual swap logic with SWFT API
    setTimeout(() => {
      setIsSwapping(false)
      // Show success message
    }, 2000)
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900/50 backdrop-blur-xl border-gray-800/50 shadow-2xl">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Swap Tokens</h2>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        {/* From Token */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">From</label>
          <div className="relative">
            <Input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="h-16 text-2xl font-medium bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 pr-4"
            />
            <div className="absolute right-2 top-2">
              <TokenSelector selectedToken={fromToken} onTokenSelect={setFromToken} label="Select token" />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center py-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSwapTokens}
            className="rounded-full bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 text-white"
          >
            <ArrowUpDown className="h-5 w-5" />
          </Button>
        </div>

        {/* To Token */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">To</label>
          <div className="relative">
            <Input
              type="number"
              placeholder="0.0"
              value={toAmount}
              readOnly
              className="h-16 text-2xl font-medium bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 pr-4"
            />
            <div className="absolute right-2 top-2">
              <TokenSelector selectedToken={toToken} onTokenSelect={setToToken} label="Select token" />
            </div>
            {loadingQuote && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>
        </div>

        {/* Swap Info */}
        {quote && fromToken && toToken && fromAmount && (
          <div className="bg-gray-800/30 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Rate</span>
              <span className="text-white">
                1 {fromToken.symbol} = {Number.parseFloat(quote.instantRate).toFixed(6)} {toToken.symbol}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Network Fee</span>
              <span className="text-white">
                {quote.receiveCoinFee} {toToken.symbol}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Estimated Time</span>
              <span className="text-white">~{quote.estimatedTime} minutes</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Min Amount</span>
              <span className="text-white">
                {quote.depositMin} {fromToken.symbol}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Max Amount</span>
              <span className="text-white">
                {quote.depositMax} {fromToken.symbol}
              </span>
            </div>
          </div>
        )}

        {/* Swap Button */}
        <Button
          onClick={handleSwap}
          disabled={!fromToken || !toToken || !fromAmount || !quote || isSwapping || loadingQuote}
          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSwapping ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Swapping...
            </div>
          ) : !quote && fromToken && toToken ? (
            "Pair not supported"
          ) : (
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Swap Tokens
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
