'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';

export default function SimulatorHome() {
  return (
    <div className="min-h-screen bg-gray-100 ">
     <Header />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to the Trading Simulator</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Link to Start Game */}
        <Link
          href="/simulator/game"
          className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-4 rounded-lg text-center text-lg font-semibold shadow-md"
        >
          Start Game
        </Link>

        {/* Link to Portfolio */}
        <Link
          href="/simulator/portfolio"
          className="bg-green-600 text-white hover:bg-green-700 px-6 py-4 rounded-lg text-center text-lg font-semibold shadow-md"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  );
}
