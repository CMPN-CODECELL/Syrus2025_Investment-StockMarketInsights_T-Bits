'use client';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';

export default function Game() {
  const { user } = useAuth();
  const router = useRouter();

  // Redirect to sign-in if user is not authenticated
  if (!user) {
    router.push('/auth/signin');
    return null;
  }

  // Dummy stock data
  const stocks = [
    {
      name: 'Apple Inc. (AAPL)',
      price: 175.23,
      change: '+1.25%',
      volume: '89M',
      high: 178.5,
      low: 173.8,
    },
    {
      name: 'Microsoft Corp. (MSFT)',
      price: 321.45,
      change: '-0.52%',
      volume: '65M',
      high: 325.3,
      low: 319.7,
    },
    {
      name: 'Tesla Inc. (TSLA)',
      price: 813.78,
      change: '+2.15%',
      volume: '48M',
      high: 820.2,
      low: 805.1,
    },
    {
      name: 'Amazon.com Inc. (AMZN)',
      price: 128.95,
      change: '+0.75%',
      volume: '34M',
      high: 130.2,
      low: 127.4,
    },
    {
      name: 'Alphabet Inc. (GOOGLE)',
      price: 142.67,
      change: '-1.32%',
      volume: '29M',
      high: 145.0,
      low: 141.8,
    },
    {
      name: 'Meta Platforms Inc. (META)',
      price: 267.45,
      change: '+0.98%',
      volume: '20M',
      high: 270.0,
      low: 265.9,
    },
  ];

  // Handle stop game (redirect to home page)
  const stopGame = () => {
    router.push('/simulator');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto p-8 relative">
        {/* Stop Game Button */}
        <button
          onClick={stopGame}
          className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-300"
        >
          ⏹️ Stop Game
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-2">
          📈 Stock Market Simulator
        </h1>

        {/* Stock Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stocks.map((stock, index) => (
            <Link
              href={`/simulator/trade?page=${encodeURIComponent(stock.name)}`}
              key={index}
            >
              <div
                className="bg-white p-6 rounded-2xl shadow-md border-2 border-transparent hover:border-blue-500 hover:bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{stock.name}</h2>

                <div className="grid grid-cols-2 gap-4">
                  {/* Stock Price */}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Current Price</span>
                    <span className="text-xl font-bold text-indigo-600">${stock.price.toFixed(2)}</span>
                  </div>

                  {/* Change (Green/Red based on change) */}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Change</span>
                    <span
                      className={`text-xl font-bold ${
                        stock.change.includes('+') ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stock.change}
                    </span>
                  </div>

                  {/* Volume */}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Volume</span>
                    <span className="text-lg font-bold text-gray-700">{stock.volume}</span>
                  </div>

                  {/* Day High */}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Day High</span>
                    <span className="text-lg font-bold text-green-600">${stock.high.toFixed(2)}</span>
                  </div>

                  {/* Day Low */}
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Day Low</span>
                    <span className="text-lg font-bold text-red-600">${stock.low.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>⚠️ Stock data is for demo purposes only. Prices may vary in the live market.</p>
        </div>
      </div>
    </div>
  );
}
