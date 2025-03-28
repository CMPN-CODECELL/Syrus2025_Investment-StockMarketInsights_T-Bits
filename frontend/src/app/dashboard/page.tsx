'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';

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
    { id: 1, title: 'Plan Your Goal', content: 'Set financial goals and receive AI-driven suggestions to achieve them.' },
    { id: 2, title: 'Automatic Trading Strategy Evaluator', content: 'Evaluate different trading strategies automatically based on market trends.' },
    { id: 3, title: 'AI-Powered Market Sentiment Analyzer', content: 'Analyze market sentiment using AI to determine bullish or bearish trends.' },
    { id: 4, title: 'Simulated Trading Platform', content: 'Practice trading in a risk-free simulated environment with real-time market data.' },
  ];

  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome, {user?.email}!</h1>

        {/* Horizontal Tabs */}
        <div className="w-full bg-white shadow rounded-xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'bg-indigo-100 text-indigo-700 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                } focus:outline-none`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 bg-white">
            <p className="text-lg text-gray-700">{tabs.find((tab) => tab.id === activeTab)?.content}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
