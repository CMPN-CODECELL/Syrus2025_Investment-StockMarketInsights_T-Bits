'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import { FaGamepad, FaChartPie } from 'react-icons/fa';

export default function SimulatorHome() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center p-4">Welcome to the Trading Simulator</h1>

      {/* Container Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Start Game Container */}
        <div
          className="border-2 border-indigo-500 p-6 rounded-xl shadow-md bg-white hover:bg-indigo-50 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Start Game</h2>
            <FaGamepad size={40} className="text-indigo-600" />
          </div>
          <Link
            href="/simulator/game"
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-4 rounded-lg text-center text-lg font-semibold shadow-md w-full block"
          >
            Start Game
          </Link>
        </div>

        {/* View Portfolio Container */}
        <div
          className="border-2 border-green-500 p-6 rounded-xl shadow-md bg-white hover:bg-green-50 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">View Portfolio</h2>
            <FaChartPie size={40} className="text-green-600" />
          </div>
          <Link
            href="/simulator/portfolio"
            className="bg-green-600 text-white hover:bg-green-700 px-6 py-4 rounded-lg text-center text-lg font-semibold shadow-md w-full block"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
