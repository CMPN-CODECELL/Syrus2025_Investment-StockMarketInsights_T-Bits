# 📊 Stock Market Insights AI – Multi-Agent System

This project is built using **UPTIQ AI Workbench** as a **multi-agent system** to provide intelligent stock market insights. Each sub-agent focuses on a specialized task such as investment recommendations, financial news summarization, sentiment analysis, and more.

---

## 🧠 Overview

**Main Agent Name**: `Stock Market Insights AI`  
**System Type**: `Multi-Agent System`

---

## 🤖 Sub-Agents Included

- ✅ Market Analysis Agent  
- ✅ Predictive Insights Agent  
- ✅ News Summarization Agent  
- ✅ Sentiment Analysis Agent  
- ✅ **Investment Recommendations Agent** ← *Detailed below*

---

# 📈 Investment Recommendations Agent

This sub-agent provides **personalized investment suggestions** based on three key user inputs:  
1. **Investment Goal**  
2. **Time Horizon**  
3. **Risk Tolerance**

It guides the user through a sequence of questions and uses an LLM to generate smart investment advice.

---

## ⚙️ Workflow Setup

Navigate to:  
`Workflows > Workflow for Recommend Investments`

### 1. Workflow Type

- Set as: **Conversational**

### 2. Add Question Blocks

From `User Interaction > Question`, add three question blocks:

| Step | Question | Variable | Reference Path |
|------|----------|----------|----------------|
| Q1 | What is your investment goal? | `investment_goal` | `$.response` |
| Q2 | Are you looking for short-term or long-term investments? | `investment_horizon` | `$.response` |
| Q3 | What is your risk tolerance (Low, Medium, High)? | `risk_tolerance` | `$.response` |

🛠 You can configure these questions ahead of time in:  
`Config & Utils > Questions`

---

### 3. Add Prompt Block

From `AI / Foundational > Prompt`:

- **Model**: `GPT-4`, `LLAMA`, `Claude`, etc.

#### System Prompt

```txt
You are an expert financial advisor. Based on the user's investment goal, time horizon, and risk tolerance, recommend 3 ideal investment options.
```

#### Query

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

---

### 4. Add Display Block

From `User Interaction > Display`:

- **Text Configuration**:

```txt
Here are your personalized investment recommendations:
{{prompt_output}}
```

---

### ✅ Final Agent Flow

```text
Start → Question 1 → Question 2 → Question 3 → Prompt → Display
```

---

## 📸 Screenshots

![Main Agent Setup](Agent%20SS/Screenshot%202025-03-28%20224147.png)  
![Sub-Agents Configuration](Agent%20SS/Screenshot%202025-03-28%20224126.png)  
![Workflow Setup](Agent%20SS/Screenshot%202025-03-28%20224059.png)  
![Agent Execution](Agent%20SS/Screenshot%202025-03-28%20225149.png)

---

# 📰 News Summarization Agent

This agent allows users to **paste financial news** and get **quick summaries** explaining key updates and market impact.

---

## ⚙️ Workflow Setup

Navigate to:  
`Workflows > Workflow for Summarize Financial News`

### 1. Workflow Type

- Set as: **Conversational**

---

### 2. Add Input Block

From `User Interaction > Input`:

- Label: `News Input`
- **Input Type**: `String`
- **Agent Variable**: `news_text`  
- Reference Path: `$.response`

---

### 3. Add Prompt Block

From `AI / Foundational > Prompt`:

- **Model**: GPT-4 (or preferred LLM)

#### System Prompt

```txt
You are a financial analyst AI.
Summarize any financial news text clearly and explain potential market impact.
```

#### Query

```txt
Summarize this financial news: {{news_text}}
```

---

### 4. Add Display Block

From `User Interaction > Display`:

- **Text Configuration**:

```txt
📌 Here's the summarized news update:
{{prompt_output}}
```

---

### ✅ Final Agent Flow

```text
Start → Input → Prompt → Display
```

---

## 📸 Screenshots

![NAgent Execution](Agent%20SS/Screenshot%202025-03-28%20235515.png)

---

## ✅ Status

Both agents tested and verified in the UPTIQ console via conversational interface.

---

## 🚀 Future Enhancements

- Add external news scraping via API
- Automate market trend forecasting using historical price datasets
- Include reinforcement learning for investment optimization