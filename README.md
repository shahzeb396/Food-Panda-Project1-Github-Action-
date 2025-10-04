# 🚀 Foodpanda Pakistan – Static Website CI/CD with GitHub Actions  

## 📌 Project Purpose  
This project demonstrates **DevOps automation** by building and deploying a **static HTML/CSS website** (Foodpanda Pakistan inspired) using **GitHub Actions**. The main goal is to simulate a **real DevOps workflow** where code changes are automatically deployed without manual steps.  

---

## 🛠️ Tech Languages & Tools  
- **HTML / CSS** → Static website structure & styling  
- **GitHub Actions** → CI/CD pipeline automation  
- **GitHub Pages** → Hosting platform for static site  
- **GitHub Secrets** → Securely store sensitive credentials  
- **Concurrency** → Prevent overlapping deployments  

---

## ❌ Problem (DevOps Scenario)  
In a real DevOps environment, manual deployments can cause:  
- **Delays** in delivering new features  
- **Errors** when deploying code manually  
- **Overlapping jobs** causing conflicts in production  

---

## ✅ Solution  
I built a **CI/CD pipeline** that:  
1. Automatically builds & deploys the static site to **GitHub Pages** whenever changes are pushed to `main`.  
2. Uses **GitHub Secrets** to store sensitive credentials securely.  
3. Prevents conflicts with **job concurrency control**.  

---

## ⚙️ Implementation Steps  
1. **Created repository** with HTML/CSS files.  
2. **Configured GitHub Actions workflow (`deploy.yml`)** with:  
   - Build → Deploy jobs  
   - GitHub Pages deployment  
3. **Added required secrets** in GitHub repository.  
4. **Enabled GitHub Pages** from branch `gh-pages`.  
5. **Tested the workflow** by pushing changes → pipeline ran → website deployed automatically.  

---

## 🎯 Results / Outcome  
- Every push to `main` **triggers CI/CD pipeline**.  
- Static site **deploys automatically** to GitHub Pages.  
- No overlapping deployments due to concurrency settings.  

This project showcases **practical DevOps automation** for a simple static website — simulating how professional teams ensure fast, reliable, and automated delivery.  
