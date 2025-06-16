<h1 align="center">🎮 Game Radar API</h1>
<h4 align="center">Free JSON APIs for discovering free games, DLCs, apps, and gaming deals.</h4>

<p align="center">
  <b>⚡ Simple • 🧩 Static • 🔓 Open • 🌍 Public</b><br><br>
  <a href="https://togin-dennis.github.io/GRAPI"><img src="https://img.shields.io/badge/Get-API%20Key-blue?style=for-the-badge&logo=github" alt="Get API"></a>
</p>

---

<p align="center">
  <img src="https://img.shields.io/github/repo-size/Togin-Dennis/GameRadarApi?color=green&label=Repo%20Size">

  <img src="https://img.shields.io/github/last-commit/Togin-Dennis/GameRadarApi?color=purple">
</p>

---

## 📦 About

Game Radar API is a **static JSON-based API** that delivers up-to-date information on:

- 🎮 Free games from multiple platforms  
- 🧩 Free DLCs and apps  
- 💸 Top discounts on popular games  
- 📰 Game-related news  
- 🎁 Prime Gaming rewards  

All data is updated frequently and served directly via **GitHub Pages** — no rate limits, no auth needed.

---

## 🚀 Available API Endpoints

| Type            | URL (hosted via GitHub Pages) |
|-----------------|-------------------------------|
| 🆓 Free Games    | `/FreeGame.json`              |
| 🧩 Free DLC      | `/DLC.json`                   |
| 📱 Free Apps     | `/Apps.json`                  |
| 🔥 Top Discounts | `/TopDiscount.json`           |
| 🎁 Prime Gaming | `/PrimeGaming.json`           |
| 📰 News          | `/News.json`                  |

> ✅ Visit: `https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/FreeGame.json` (example)

---


## 📚 Usage Examples

> Replace `API_URL_HERE` with one of the URLs like:  
> `https://togin-dennis.github.io/GRAPI/FreeGame.json`

---

### 🟦 JavaScript (React)
```javascript
useEffect(() => {
  fetch("API_URL_HERE")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```
### 🟨 JavaScript (Node.js)
```javascript
const https = require('https');

https.get('API_URL_HERE', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
});

```
### 🐍 Python
```python
import requests

response = requests.get("API_URL_HERE")
print(response.json())
```
### ☕ Java (Using HttpURLConnection)
```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class GameRadarAPI {
  public static void main(String[] args) throws Exception {
    URL url = new URL("API_URL_HERE");
    HttpURLConnection con = (HttpURLConnection) url.openConnection();
    con.setRequestMethod("GET");

    BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
    String inputLine;
    StringBuffer content = new StringBuffer();
    while ((inputLine = in.readLine()) != null) {
      content.append(inputLine);
    }
    in.close();
    System.out.println(content.toString());
  }
}

```
### 🌐 cURL (CLI)
```bash
curl API_URL_HERE

```
### 🐘 PHP
```php
<?php
$response = file_get_contents("API_URL_HERE");
$data = json_decode($response, true);
print_r($data);
?>


```
### 🧪 C# (using HttpClient)
```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program {
  static async Task Main() {
    HttpClient client = new HttpClient();
    string result = await client.GetStringAsync("API_URL_HERE");
    Console.WriteLine(result);
  }
}

```
<br/><br/><br/><br/>

## 🖼️ Preview
<p align="center">
  <img src="https://github.com/Togin-Dennis/GRAPI/blob/main/screenshot/API%20Home.png?raw=true" alt="Game Radar Banner" width="100%" />
</p>
<p align="center">
  <img src="https://github.com/Togin-Dennis/GRAPI/blob/main/screenshot/API%202.png?raw=true" alt="Game Radar Banner" width="100%" />
</p>
<p align="center">
  <img src="https://github.com/Togin-Dennis/GRAPI/blob/main/screenshot/API%203.png?raw=true" alt="Game Radar Banner" width="100%" />
</p>
<p align="center">
  <img src="https://github.com/Togin-Dennis/GRAPI/blob/main/screenshot/API%204.png?raw=true" alt="Game Radar Banner" width="100%" />
</p>
