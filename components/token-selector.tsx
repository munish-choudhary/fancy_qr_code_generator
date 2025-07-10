"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, ChevronDown } from "lucide-react"
import Image from "next/image"

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

interface TokenSelectorProps {
  selectedToken: Token | null
  onTokenSelect: (token: Token) => void
  label: string
}

export function TokenSelector({ selectedToken, onTokenSelect, label }: TokenSelectorProps) {
  const [tokens, setTokens] = useState<Token[]>([])
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTokens = async () => {
      setLoading(true)
      try {
        const response = await fetch("/api/tokens")
        const data = await response.json()
        if (data.status && data.data) {
          setTokens(data.data)
          setFilteredTokens(data.data)
        }
      } catch (error) {
        console.error("Error fetching tokens:", error)
      } finally {
        setLoading(false)
      }
    }

    if (isOpen && tokens.length === 0) {
      fetchTokens()
    }
  }, [isOpen, tokens.length])

  useEffect(() => {
    const filtered = tokens.filter(
      (token) =>
        token.coin_data.coin_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.coin_data.coin_symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.coin_code.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredTokens(filtered)
  }, [searchQuery, tokens])

  const handleTokenSelect = (token: Token) => {
    onTokenSelect(token)
    setIsOpen(false)
    setSearchQuery("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between h-12 px-4 bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10"
        >
          <div className="flex items-center gap-3">
            {selectedToken ? (
              <>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src={selectedToken.coin_data.coin_image || "/placeholder.svg"}
                    alt={selectedToken.coin_data.coin_name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      target.nextElementSibling?.classList.remove("hidden")
                    }}
                  />
                  <div className="hidden w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {selectedToken.coin_data.coin_symbol.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">{selectedToken.coin_code}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{selectedToken.coin_data.coin_name}</div>
                </div>
              </>
            ) : (
              <span className="text-gray-600 dark:text-gray-400">{label}</span>
            )}
          </div>
          <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-gray-900 dark:text-white">Select Token</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600 dark:text-gray-400" />
            <Input
              placeholder="Search tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <ScrollArea className="h-80">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="space-y-1">
                {filteredTokens.map((token) => (
                  <button
                    key={token.id}
                    onClick={() => handleTokenSelect(token)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center relative">
                      <Image
                        src={token.coin_data.coin_image || "/placeholder.svg"}
                        alt={token.coin_data.coin_name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const fallback = target.parentElement?.querySelector(".fallback-icon") as HTMLElement
                          if (fallback) {
                            fallback.classList.remove("hidden")
                          }
                        }}
                      />
                      <div className="fallback-icon hidden absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {token.coin_data.coin_symbol.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">{token.coin_code}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{token.coin_data.coin_name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">{token.coin_data.network}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
