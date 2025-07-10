"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TokenSelector } from "./token-selector"
import { ArrowUpDown, Settings, Zap } from "lucide-react"

interface CoinData {
  id: number
  coin_name: string
  coin_symbol: string
  network: string
  coin_image: string
  is_token: number
  token_address: string | null
  token_type: string | null
  decimal_value: number
  large_decimal_value: string
}

interface Token {
  id: number
  coin_all_code: string
  coin_code: string
  main_network: string
  no_support_coin: string
  is_support_advanced: string
  is_support_memo: string
  coin_code_show: string
  coin_data: CoinData
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
            depositCoinCode: fromToken.coin_code,
            receiveCoinCode: toToken.coin_code,
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
    <Card className="w-full max-w-md mx-auto bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border-gray-200/50 dark:border-gray-800/50 shadow-2xl">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Swap Tokens</h2>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        {/* From Token */}
        <div className="space-y-2">
          <label className="text-sm text-gray-600 dark:text-gray-400">From</label>
          <div className="relative">
            <Input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="h-16 text-2xl font-medium bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 pr-4"
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
            className="rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
          >
            <ArrowUpDown className="h-5 w-5" />
          </Button>
        </div>

        {/* To Token */}
        <div className="space-y-2">
          <label className="text-sm text-gray-600 dark:text-gray-400">To</label>
          <div className="relative">
            <Input
              type="number"
              placeholder="0.0"
              value={toAmount}
              readOnly
              className="h-16 text-2xl font-medium bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 pr-4"
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
          <div className="bg-gray-100/50 dark:bg-gray-800/30 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Rate</span>
              <span className="text-gray-900 dark:text-white">
                1 {fromToken.coin_code} = {Number.parseFloat(quote.instantRate).toFixed(6)} {toToken.coin_code}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Network Fee</span>
              <span className="text-gray-900 dark:text-white">
                {quote.receiveCoinFee} {toToken.coin_code}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Estimated Time</span>
              <span className="text-gray-900 dark:text-white">~{quote.estimatedTime} minutes</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Min Amount</span>
              <span className="text-gray-900 dark:text-white">
                {quote.depositMin} {fromToken.coin_code}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Max Amount</span>
              <span className="text-gray-900 dark:text-white">
                {quote.depositMax} {fromToken.coin_code}
              </span>
            </div>
          </div>
        )}

        {/* Swap Button */}
        <Button
          onClick={handleSwap}
          disabled={!fromToken || !toToken || !fromAmount || !quote || isSwapping || loadingQuote}
          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white"
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
