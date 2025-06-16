<h1 align="center">🎮 Game Radar API (GRAPI)</h1>
<h4 align="center">Free JSON APIs for discovering free games, DLCs, apps, and gaming deals.</h4>

<p align="center">
  <b>⚡ Simple • 🧩 Static • 🔓 Open • 🌍 Public</b><br><br>
  <a href="https://togin-dennis.github.io/GRAPI"><img src="https://img.shields.io/badge/Get-API%20Key-blue?style=for-the-badge&logo=github" alt="Get API Key"></a>
</p>

---

## 🚀 Overview

Game Radar API (GRAPI) provides **open and static JSON endpoints** for:

- 🕹️ Free Games  
- 🧩 Free DLCs  
- 📱 Free Apps  
- 💸 Top Discounts  
- 🎁 Prime Gaming Offers  
- 📰 Latest Game News  

This API is perfect for:
- Game deal trackers  
- Bot developers  
- Web or mobile apps  
- Automation scripts  
- Educational & portfolio projects

---

## 🔑 Get Started

🔹 **Click the button below to explore available API endpoints and get sample code:**

<p align="left">
  <a href="https://togin-dennis.github.io/GRAPI">
    <img src="https://img.shields.io/badge/Get%20API%20Key-Terminal--UI-blue?style=for-the-badge&logo=powerbi" alt="Get API Key">
  </a>
</p>

---

## 📦 Available API Endpoints

| Endpoint File      | Description                          |
|--------------------|--------------------------------------|
| `FreeGame.json`    | Limited-time free games              |
| `Apps.json`        | Free applications                    |
| `DLC.json`         | Free downloadable content            |
| `TopDiscount.json` | Top store-wide discounts             |
| `PrimeGaming.json` | Amazon Prime free games              |
| `News.json`        | Gaming headlines & news              |

---

## 🧩 Code Examples

> Replace `API_URL_HERE` with the actual endpoint link from the [API Terminal UI](https://togin-dennis.github.io/GRAPI).

---

### 🟦 JavaScript (React)
```javascript
useEffect(() => {
  fetch("API_URL_HERE")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
