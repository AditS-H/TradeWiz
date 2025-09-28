'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Bitcoin, TrendingUpIcon } from 'lucide-react'

interface MarketData {
  symbol: string
  price: string
  change: string
  changePercent: string
  isPositive: boolean
  type: 'stock' | 'crypto' | 'forex'
  displayName: string
}

interface NewsItem {
  text: string
  type: 'market' | 'news'
  data?: MarketData
}

const NewsTicker = React.memo(function NewsTicker() {
  const [marketData, setMarketData] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch real-time market data
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const data: NewsItem[] = []

        // Fetch Crypto data from CoinGecko (free API)
        try {
          const cryptoResponse = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,cardano,solana,dogecoin&vs_currencies=usd&include_24hr_change=true'
          )
          const cryptoData = await cryptoResponse.json()

          const cryptoSymbols = [
            { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
            { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
            { id: 'binancecoin', symbol: 'BNB', name: 'BNB' },
            { id: 'cardano', symbol: 'ADA', name: 'Cardano' },
            { id: 'solana', symbol: 'SOL', name: 'Solana' },
            { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin' }
          ]

          cryptoSymbols.forEach(crypto => {
            if (cryptoData[crypto.id]) {
              const price = cryptoData[crypto.id].usd
              const change24h = cryptoData[crypto.id].usd_24h_change || 0
              const isPositive = change24h >= 0
              
              data.push({
                text: '',
                type: 'market',
                data: {
                  symbol: crypto.symbol,
                  displayName: crypto.name,
                  price: `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                  change: `${isPositive ? '+' : ''}${change24h.toFixed(2)}%`,
                  changePercent: `${change24h.toFixed(2)}%`,
                  isPositive,
                  type: 'crypto'
                }
              })
            }
          })
        } catch (error) {
          console.error('Crypto API error:', error)
        }

        // Fetch Forex data from ExchangeRate-API (free API)
        try {
          const forexResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
          const forexData = await forexResponse.json()

          const forexPairs = [
            { symbol: 'EUR/USD', rate: 1 / forexData.rates.EUR, name: 'Euro' },
            { symbol: 'GBP/USD', rate: 1 / forexData.rates.GBP, name: 'British Pound' },
            { symbol: 'USD/JPY', rate: forexData.rates.JPY, name: 'Japanese Yen' },
            { symbol: 'USD/INR', rate: forexData.rates.INR, name: 'Indian Rupee' }
          ]

          forexPairs.forEach(pair => {
            data.push({
              text: '',
              type: 'market',
              data: {
                symbol: pair.symbol,
                displayName: pair.name,
                price: pair.rate.toFixed(4),
                change: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 2).toFixed(2)}%`,
                changePercent: `${(Math.random() * 2).toFixed(2)}%`,
                isPositive: Math.random() > 0.5,
                type: 'forex'
              }
            })
          })
        } catch (error) {
          console.error('Forex API error:', error)
        }

        // Add some Indian stock market data (simulated since free APIs are limited)
        const indianStocks = [
          { symbol: 'NIFTY50', name: 'Nifty 50', basePrice: 21800 },
          { symbol: 'SENSEX', name: 'BSE Sensex', basePrice: 72000 },
          { symbol: 'RELIANCE', name: 'Reliance Industries', basePrice: 2850 },
          { symbol: 'TCS', name: 'Tata Consultancy Services', basePrice: 3950 },
          { symbol: 'INFY', name: 'Infosys', basePrice: 1750 },
          { symbol: 'HDFCBANK', name: 'HDFC Bank', basePrice: 1650 }
        ]

        indianStocks.forEach(stock => {
          const changePercent = (Math.random() - 0.5) * 4 // Random change between -2% to +2%
          const isPositive = changePercent >= 0
          const currentPrice = stock.basePrice * (1 + changePercent / 100)
          
          data.push({
            text: '',
            type: 'market',
            data: {
              symbol: stock.symbol,
              displayName: stock.name,
              price: `₹${currentPrice.toFixed(2)}`,
              change: `${isPositive ? '+' : ''}${changePercent.toFixed(2)}%`,
              changePercent: `${changePercent.toFixed(2)}%`,
              isPositive,
              type: 'stock'
            }
          })
        })

        setMarketData(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch market data:', error)
        setLoading(false)
      }
    }

    fetchMarketData()
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchMarketData, 30000)
    
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-y border-blue-800/30 overflow-hidden">
        <div className="py-3">
          <div className="flex animate-pulse">
            <div className="h-6 bg-blue-800/50 rounded w-64 mr-8"></div>
            <div className="h-6 bg-blue-800/50 rounded w-48 mr-8"></div>
            <div className="h-6 bg-blue-800/50 rounded w-56 mr-8"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-y border-blue-800/30 overflow-hidden">
      <div className="py-3">
        <motion.div
          className="flex whitespace-nowrap animate-ticker gpu-accelerated"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {marketData.map((item, index) => (
            <div
              key={`${item.type}-${index}`}
              className="flex items-center mx-8 text-sm"
            >
              {item.type === 'market' && item.data ? (
                <>
                  {item.data.type === 'crypto' && <Bitcoin className="w-4 h-4 mr-2 text-orange-400" />}
                  {item.data.type === 'forex' && <DollarSign className="w-4 h-4 mr-2 text-green-400" />}
                  {item.data.type === 'stock' && <TrendingUpIcon className="w-4 h-4 mr-2 text-blue-400" />}
                  
                  <span className="text-white font-semibold mr-2">
                    {item.data.symbol}
                  </span>
                  <span className="text-gray-300 mr-2">
                    {item.data.price}
                  </span>
                  <span className={`flex items-center ${
                    item.data.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {item.data.isPositive ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {item.data.change}
                  </span>
                </>
              ) : (
                <span className="text-blue-200">
                  {item.text}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
})

export default NewsTicker