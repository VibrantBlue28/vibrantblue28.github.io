# 專案需求規格書：蔚藍工作坊 24H 無人自助店 

## 1. 專案背景與目標
* **店家名稱**：蔚藍工作坊 24H 無人自助店
* **產業類型**：情趣用品 / 成人用品 24 小時無人自助商店
* **核心目標**：
  1. 引導線上顧客直接使用 Google 地圖導航至實體門市購物。
  2. 提供線上 LINE 官方帳號 24H 即時客服，解答購物與機台疑慮。
  3. 建立高度隱私、安心、現代化且明亮的門市形象。
* **設計風格**：深色/質感極簡風，強調「隱密不尷尬」、「24H 隨時取貨」、「便利停車」。全站支援響應式網頁設計（RWD），以手機版閱讀體驗為最優先。

---

## 2. 頁面結構與內容規劃 (Page Structure)

### 區塊一：首頁 Header & Hero Banner
* **主標題**：蔚藍工作坊 24H 無人自助店
* **副標題**：全程無人打擾 ‧ 100% 隱私購物 ‧ 24 小時隨時取貨
* **行動呼籲按鈕 (CTA Buttons)**：
  1. `[按鈕 1]` **Google 地圖導航** (點擊直接開啟 Google Maps)
  2. `[按鈕 2]` **LINE 24H 線上客服** (點擊加入 LINE 官方帳號)

### 區塊二：門市三大核心特色 (Key Features)
* **特色 1：100% 隱私安心體驗**
  * *描述*：全程採用無人自助服務，現場挑選無壓力、不尷尬。兩人一同前往挑選更能增添甜蜜樂趣，打造專屬您的浪漫時光。
* **特色 2：24 小時隨時取貨**
  * *描述*：全天候 24H 營業不打烊！即刻補給浪漫 Buff，熱門裝備與商品一次帶齊，讓今晚戰力瞬間 Max！
* **特色 3：極致便利的停車空間**
  * *描述*：門口設有便利停車位，無論騎車或開車前來都非常方便，停好車即可快速選購，補給完畢馬上直奔目的地。

### 區塊三：門市實景與商品展示 (Gallery)
* *說明*：展示門市明亮乾淨的環境、自動販販機與入口實景，給予顧客安心感的視覺呈現。
* *圖片佔位*：預留 3~4 張圖片卡片位置，支援點擊放大或輪播展示。

### 區塊四：顧客評價與評價引導 (Customer Reviews)
* **Google 商家好評**：展示 4.9~5.0 星級評價卡片。
* **評價內容範例**：
  * *"環境乾淨明亮，無人結帳隱密性很高，完全不尷尬！"*
  * *"門口停車方便，24小時都能買到所需商品，補貨速度很快。"*
* **評價按鈕**：`[前往 Google 給予五星好評]` (連結至 Google 商家留評頁面)

### 區塊五：門市位置與交通資訊 (Location & Navigation)
* **門市地址**：[請在此填寫您的實體地址，例如：台中市潭子區... ]
* **營業時間**：24 小時全天候營業
* **停車資訊**：門口設有專屬/便利汽機車停車位
* **Google 地圖嵌入**：嵌入互動式 Google 地圖 (`<iframe>`)

---

## 3. Google Maps 與外部連結參數設定 (URL & Map Configuration)

請在生成網頁時，將以下連結設定至對應按鈕：

1. **Google 地圖導航連結**：
   `https://maps.app.goo.gl/zUao8hMHBztkieY29`
2. **Google 地圖 Embed 碼**：
   ```html
   <!-- 請貼上從 Google 地圖 > 分享 > 嵌入地圖 取得的 <iframe> 程式碼 -->
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.9494735206436!2d120.70226660000002!3d24.1874976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691770f2423239%3A0x102a597e204395!2z5oOF6Laj5pmC5YWJ!5e1!3m2!1szh-TW!2stw!4v1784782967415!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
   
Google 商家留評專屬連結：
https://g.page/r/CZVDIH5ZKhAAEBM/review

LINE 官方帳號連結：
https://lin.ee/qoSX4QN


<img src="https://qr-official.line.me/gs/M_795jdnhx_GW.png?oat_content=qr">

加入好連結
<a href="https://lin.ee/Qhy5qVE"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36" border="0"></a>





4. 技術與 SEO 需求 (Technical & SEO Requirements)
前端技術：純 HTML5 + CSS3 (使用 Tailwind CSS 或 Bootstrap) + Vanilla JavaScript。

SEO Meta 標籤：

title: 蔚藍工作坊 24H 無人自助店 | 隱私購物 ‧ 24H 隨時取貨 ‧ 便利停車

description: 蔚藍工作坊提供 24 小時無人自助購物體驗，100% 隱私不尷尬，門口設有便利車位，歡迎隨時親臨門市或透過 LINE 線上客服諮詢。

Google Ads 合規設定：

頁面底部需附上完整的版權聲明：© 2026 蔚藍工作坊 All Rights Reserved.

無任何自動跨網域轉址（Redirect）行為，符合 Google Ads 到達網頁規範。


   
   









