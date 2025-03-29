# Stock Market Insights - AI-Powered Investment Analysis Platform

## 🧠 Overview

Stock Market Insights is an intelligent platform that leverages a multi-agent AI system to provide comprehensive stock market analysis and personalized investment recommendations. Built using UPTIQ AI Workbench, our solution helps investors make informed decisions by analyzing market trends, financial news, and user preferences.

## 🤖 Key Features

- **Personalized Investment Recommendations** based on user goals, time horizon, and risk tolerance
- **Market Analysis** with data-driven insights and trend analysis
- **Financial News Summarization** to extract critical information from market updates
- **Sentiment Analysis** on news and social media to gauge market sentiment
- **Predictive Insights** for potential market movements
- **User-friendly Dashboard** with intuitive visualizations

## 🛠️ Technology Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Headless UI
- Lottie Animations

### Backend
- FastAPI (Python)
- Supabase for data storage
- UPTIQ AI Workbench for agent orchestration

## 🧩 System Architecture

### Multi-Agent System
Our platform employs a sophisticated multi-agent architecture where each agent specializes in a specific task:

1. **Investment Recommendations Agent** - Provides personalized investment suggestions
2. **Market Analysis Agent** - Analyzes market trends and indicators
3. **News Summarization Agent** - Condenses financial news into actionable insights
4. **Sentiment Analysis Agent** - Gauges market sentiment from various sources
5. **Predictive Insights Agent** - Forecasts potential market movements

## 📊 Agent Workflows

### Investment Recommendations Agent
This agent collects user preferences through a conversational interface:
1. Investment Goal (retirement, education, etc.)
2. Time Horizon (short-term, long-term)
3. Risk Tolerance (low, medium, high)

It then processes this information to generate tailored investment strategies using advanced LLMs.

### News Summarization Agent
This agent:
1. Accepts financial news input from users
2. Processes the content using NLP techniques
3. Extracts key points and potential market impacts
4. Presents a concise summary with actionable insights

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- UPTIQ AI Workbench account

### Installation

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### Backend Setup
```bash
cd backend
# Create and activate virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload
```

## 📈 Future Enhancements
- External news scraping integration via API
- Automated market trend forecasting using historical price datasets
- Portfolio optimization with reinforcement learning
- Mobile application for on-the-go insights
- Integration with trading platforms for one-click investments

## 📸 Screenshots

1. Goal Based Agent
![Investment Recommendation Workflow](Agent%20SS/Screenshot%202025-03-28%20224059.png)  
![Agent Configuration](Agent%20SS/Screenshot%202025-03-28%20224126.png)  
![System Dashboard](Agent%20SS/Screenshot%202025-03-28%20224147.png)
2. News Insights Agent
![News Summarization Agent](Agent%20SS/Screenshot%202025-03-28%20235515.png)  

