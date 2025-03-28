'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';
import AuthModal from '@/components/auth/AuthModal';
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';

export default function LandingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                SyrusAI
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#why-choose-us" className="text-gray-600 hover:text-blue-600">Why Choose Us</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowSignIn(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowSignUp(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 sm:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              All things finance,
              <br />
              <span className="text-blue-600">right here.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience the future of investing with AI-powered insights, real-time market analysis, and intelligent portfolio management.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/signup"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Start Investing Now
              </Link>
              <Link
                href="#features"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Market Stats Section */}
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-2xl font-bold text-gray-900">NIFTY 50</div>
              <div className="text-green-500 font-semibold">+1.2%</div>
              <div className="text-sm text-gray-500">19,425.12</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-2xl font-bold text-gray-900">SENSEX</div>
              <div className="text-red-500 font-semibold">-0.8%</div>
              <div className="text-sm text-gray-500">64,132.45</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-2xl font-bold text-gray-900">USD/INR</div>
              <div className="text-green-500 font-semibold">+0.3%</div>
              <div className="text-sm text-gray-500">82.65</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="text-2xl font-bold text-gray-900">BITCOIN</div>
              <div className="text-green-500 font-semibold">+2.5%</div>
              <div className="text-sm text-gray-500">$43,215</div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-32" id="features">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Intelligent investing, simplified
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our AI-powered platform helps you make smarter investment decisions with real-time insights and personalized recommendations.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <div className="text-blue-600 mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">AI-Powered Analysis</h3>
                    <p className="mt-4 text-gray-600">Advanced algorithms analyze market trends and provide real-time insights for better decision making.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <div className="text-blue-600 mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Smart Portfolio Management</h3>
                    <p className="mt-4 text-gray-600">Automated portfolio balancing and risk management tailored to your investment goals.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <div className="text-blue-600 mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Secure Trading</h3>
                    <p className="mt-4 text-gray-600">Enterprise-grade security with real-time fraud detection and secure transactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gray-50" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose SyrusAI?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the future of investing with our cutting-edge platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Free</h3>
              <p className="text-gray-600">Access all our features without any cost. We believe in democratizing investment insights.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time Analysis</h3>
              <p className="text-gray-600">Get instant insights and alerts based on market movements and trends.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customizable Strategies</h3>
              <p className="text-gray-600">Create and backtest your own trading strategies with our intuitive tools.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Users Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of satisfied investors using SyrusAI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-semibold">R</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Rahul M.</h4>
                  <p className="text-gray-600">Retail Investor</p>
                </div>
              </div>
              <p className="text-gray-600">"The AI-powered insights have completely transformed my investment strategy. I feel more confident in my decisions now."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-semibold">P</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Priya S.</h4>
                  <p className="text-gray-600">"The backtesting feature is incredible. I've improved my trading strategy significantly using SyrusAI's tools."</p>
                </div>
              </div>
              <p className="text-gray-600">"The sentiment analysis helps me stay ahead of market trends. Best of all, it's completely free!"</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-semibold">A</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Amit K.</h4>
                  <p className="text-gray-600">"The sentiment analysis helps me stay ahead of market trends. Best of all, it's completely free!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About SyrusAI</h3>
              <p className="text-gray-400">Empowering investors with AI-driven insights and tools for better financial decisions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#why-choose-us" className="text-gray-400 hover:text-white">Why Choose Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Market Analysis</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Learning Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">support@syrusai.com</li>
                <li className="text-gray-400">+91 XXX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 SyrusAI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modals */}
      {showSignIn && (
        <AuthModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} title="Welcome Back">
          <SignInForm />
        </AuthModal>
      )}

      {showSignUp && (
        <AuthModal isOpen={showSignUp} onClose={() => setShowSignUp(false)} title="Get Started">
          <SignUpForm />
        </AuthModal>
      )}
    </div>
  );
}
