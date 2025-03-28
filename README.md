# 📈 Stock Market Insights AI – Investment Recommendations Agent

This agent provides **personalized investment recommendations** based on a user's financial goal, investment horizon, and risk tolerance. It is developed using **UPTIQ AI Workbench** under a **multi-agent system** designed for intelligent stock market insights.

---

## 🧠 Overview

**Main Agent:** `Stock Market Insights AI`  
**Sub-Agent Focus:** `Investment Recommendations Agent`

This sub-agent recommends investment opportunities by processing user intent through an LLM using goal-based prompts.

---

## 🛠️ Project Setup Steps

### 1. Create the Main Agent

- Go to: [console.uptiq.ai/ai-agents](https://console.uptiq.ai/ai-agents)
- Click **Build an AI Agent**
- Set the name: `Stock Market Insights AI`
- Choose system type: **Multi-Agent System**

---

### 2. Add Sub-Agents

Under the main agent, create the following sub-agents:

- ✅ Market Analysis Agent  
- ✅ Predictive Insights Agent  
- ✅ News Summarization Agent  
- ✅ Sentiment Analysis Agent  
- ✅ **Investment Recommendations Agent** ← *Our focus*

---

## ⚙️ Workflow for Investment Recommendations

Navigate to `Workflows > Workflow for Recommend Investments`.

### 1. Setup Workflow

- Type: `Conversational`
- Add 3 **Question blocks** from `User Interaction > Question`

#### Questions and Variables:

| Step | Question | Variable | Reference Path |
|------|----------|----------|----------------|
| Q1 | What is your investment goal? | `investment_goal` | `$.response` |
| Q2 | Are you looking for short-term or long-term investments? | `investment_horizon` | `$.response` |
| Q3 | What is your risk tolerance (Low, Medium, High)? | `risk_tolerance` | `$.response` |

You can configure questions beforehand in `Config & Utils > Questions`.

---

### 2. Add Prompt Block

- Drag from `AI / Foundational > Prompt`
- **Model**: Select your LLM (e.g., GPT-4, Claude, LLAMA, etc.)

#### Prompt Configuration

- **System Prompt**:
You are an expert financial advisor. Based on the user's investment goal, time horizon, and risk tolerance, recommend 3 ideal investment options.

- **Query**:
```txt
What are the best investment options for a user whose goal is "{{investment_goal}}", investment horizon is "{{investment_horizon}}", and risk tolerance is "{{risk_tolerance}}"?

Here are your personalized investment recommendations:
{{prompt_output}}

User: Can you suggest some good investments based on my goals?

AI: What is your investment goal?
User: Save for retirement.

AI: Are you looking for short-term or long-term investments?
User: Long-term.

AI: What is your risk tolerance (Low, Medium, High)?
User: Medium.

AI: Here are your personalized investment recommendations:
1. Mutual Funds - Good for long-term with medium risk.
2. Index Funds - Broad market exposure.
3. REITs - Passive income from real estate.
```

## 📸 Implementation Screenshots

### 1. Main Agent Setup
![Main Agent Setup](Agent%20SS/Screenshot%202025-03-28%20224147.png)

### 2. Sub-Agents Configuration
![Sub-Agents Configuration](Agent%20SS/Screenshot%202025-03-28%20224126.png)

### 3. Workflow Setup
![Workflow Setup](Agent%20SS/Screenshot%202025-03-28%20224059.png)

### 4. Agent Execution
![Agent Execution](Agent%20SS/Screenshot%202025-03-28%20225149.png)
