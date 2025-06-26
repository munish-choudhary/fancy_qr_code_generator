"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, ChevronDown } from "lucide-react"

interface Token {
  symbol: string
  name: string
  coinCode: string
  mainNetwork: string
  contact?: string
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
        if (data.data) {
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
        (token.symbol?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        (token.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()),
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
          className="w-full justify-between h-12 px-4 bg-white/5 border-white/10 hover:bg-white/10"
        >
          <div className="flex items-center gap-3">
            {selectedToken ? (
              <>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {selectedToken.symbol?.charAt(0) || "?"}
                </div>
                <div className="text-left">
                  <div className="font-medium text-white">{selectedToken.symbol || "Unknown"}</div>
                  <div className="text-xs text-gray-400">{selectedToken.name || "Unknown Token"}</div>
                </div>
              </>
            ) : (
              <span className="text-gray-400">{label}</span>
            )}
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-white">Select Token</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <ScrollArea className="h-80">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="space-y-1">
                {filteredTokens.map((token, index) => (
                  <button
                    key={`${token.symbol || "unknown"}-${token.mainNetwork || "network"}-${index}`}
                    onClick={() => handleTokenSelect(token)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {token.symbol?.charAt(0) || "?"}
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-medium text-white">{token.symbol || "Unknown"}</div>
                      <div className="text-sm text-gray-400">{token.name || "Unknown Token"}</div>
                      <div className="text-xs text-gray-500">{token.mainNetwork || "Unknown Network"}</div>
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
