'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import { useRouter } from 'next/navigation';

export default function TradePage() {
  const searchParams = useSearchParams();
  const stockName = searchParams.get('page') || 'Stock';
  const router = useRouter();

  // Dummy stock details (For Demo Purposes)
  const stockDetails = {
    name: stockName,
    price: 200.0,
    change: '+1.25%',
    volume: '89M',
    high: 220.5,
    low: 190.2,
  };

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState<'buy' | 'sell' | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Handle Buy/Sell Click to Open Modal
  const openModal = (type: 'buy' | 'sell') => {
    setActionType(type);
    setShowModal(true);
    setQuantity(1); // Reset quantity on open
  };

  // Handle Buy/Sell Confirmation
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      setIsConfirmed(false);
      setShowModal(false);
    }, 2000);
  };

  // Handle stop game (redirect to home page)
  const stopGame = () => {
    router.push('/simulator');
  };

  // Calculate total cost
  const totalCost = (stockDetails.price * quantity).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <div className="min-h-screen bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 relative">
          {/* Stop Game Button (Top-Right) */}
          <button
            onClick={stopGame}
            className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-300"
          >
            ⏹️ Stop Game
          </button>

          {/* Stock Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">{stockDetails.name}</h1>

          {/* Dummy Stock Graph */}
          <div className="bg-gray-200 h-48 w-full rounded-lg mb-6 flex items-center justify-center">
            📊 Stock Price Chart (Coming Soon)
          </div>

          {/* Stock Info */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="text-lg font-semibold text-gray-700">
              Current Price: <span className="text-indigo-600">${stockDetails.price.toFixed(2)}</span>
            </div>
            <div className="text-lg font-semibold text-gray-700">
              Change: <span className={stockDetails.change.includes('+') ? 'text-green-600' : 'text-red-600'}>
                {stockDetails.change}
              </span>
            </div>
            <div className="text-lg font-semibold text-gray-700">
              Volume: <span className="text-gray-500">{stockDetails.volume}</span>
            </div>
            <div className="text-lg font-semibold text-gray-700">
              High: <span className="text-green-600">${stockDetails.high.toFixed(2)}</span>
            </div>
            <div className="text-lg font-semibold text-gray-700">
              Low: <span className="text-red-600">${stockDetails.low.toFixed(2)}</span>
            </div>
          </div>

          {/* Buy and Sell Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Buy Section */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-center text-slate-600">💸 Buy Stock</h3>
              <button
                onClick={() => openModal('buy')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md w-full"
              >
                ✅ Buy Now
              </button>
            </div>

            {/* Sell Section */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-center text-slate-600">📉 Sell Stock</h3>
              <button
                onClick={() => openModal('sell')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md w-full"
              >
                🔻 Sell Now
              </button>
            </div>
          </div>

          {/* Return to Game Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/simulator')}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
            >
              🔙 Return to Game
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Buy/Sell */}
      {showModal && (
        <div className="absolute inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200 w-96 relative">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-600">
              {actionType === 'buy' ? '💸 Confirm Buy' : '📉 Confirm Sell'}
            </h2>

            {/* Quantity Counter */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
              >
                ➖
              </button>
              <span className="text-2xl font-semibold text-gray-800">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
              >
                ➕
              </button>
            </div>

            {/* Total Cost */}
            <p className="text-lg text-gray-600 mb-4 text-center">
              Total: <strong>${totalCost}</strong>
            </p>

            {/* Confirm Buy/Sell Button */}
            <button
              onClick={handleConfirm}
              className={`${
                actionType === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
              } text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md w-full`}
            >
              {actionType === 'buy' ? '✅ Confirm Buy' : '🔻 Confirm Sell'}
            </button>

            {/* Success Message */}
            {isConfirmed && (
              <div
                className={`mt-4 text-center font-bold text-xl ${
                  actionType === 'buy' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {actionType === 'buy' ? '🎉 Stock Bought Successfully!' : '📉 Stock Sold Successfully!'}
              </div>
            )}

            {/* Close Modal Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✖️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
