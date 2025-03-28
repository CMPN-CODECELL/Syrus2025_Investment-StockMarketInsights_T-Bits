'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import { FaBullseye, FaRobot, FaChartLine, FaGamepad } from 'react-icons/fa';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  // Check if the user is not logged in, redirect to sign-in
  if (!user) {
    router.push('/auth/signin');
    return null;
  }

  // Tabs data
  const tabs = [
    {
      id: 1,
      title: 'Plan Your Goal',
      content: 'Set financial goals and receive AI-driven suggestions to achieve them.',
      icon: <FaBullseye size={40} className="text-indigo-700" />,
      bgColor: 'bg-gradient-to-r from-indigo-200 to-indigo-500',
      route: '/plan-goal',
    },
    {
      id: 2,
      title: 'Automatic Trading Strategy Evaluator',
      content: 'Evaluate different trading strategies automatically based on market trends.',
      icon: <FaRobot size={40} className="text-green-700" />,
      bgColor: 'bg-gradient-to-r from-green-200 to-green-500',
      route: '/strategy-evaluator',
    },
    {
      id: 3,
      title: 'AI-Powered Market Sentiment Analyzer',
      content: 'Analyze market sentiment using AI to determine bullish or bearish trends.',
      icon: <FaChartLine size={40} className="text-yellow-700" />,
      bgColor: 'bg-gradient-to-r from-yellow-200 to-yellow-500',
      route: '/market-sentiment',
    },
    {
      id: 4,
      title: 'Simulated Trading Platform',
      content: 'Practice trading in a risk-free simulated environment with real-time market data.',
      icon: <FaGamepad size={40} className="text-red-700" />,
      bgColor: 'bg-gradient-to-r from-red-200 to-red-500',
      route: '/simulator',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome, {user?.email}!</h1>

        {/* Vertical Block Layout */}
        <div className="space-y-6">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => router.push(tab.route)}
              className={`${tab.bgColor} p-6 rounded-xl shadow-md flex justify-between items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-lg`}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{tab.title}</h2>
                <p className="text-lg text-gray-800">{tab.content}</p>
              </div>
              <div>{tab.icon}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}