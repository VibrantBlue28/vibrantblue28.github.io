# 情趣時光網站維護指南

本資料夾是「情趣時光 24H 無人自助店」靜態網站的唯一發布來源。

- 本機來源：`D:\CASE\SC行銷\WebSite`
- GitHub Repository：`VibrantBlue28/vibrantblue28.github.io`
- 公開網站：<https://vibrantblue28.github.io/>
- 一鍵發布工具：`D:\CASE\SC行銷\tools\PublishWebsite.cmd`

> 本 README 會隨網站一起上傳到公開 Repository。禁止在此資料夾放入密碼、Token、金鑰、連線字串、個資或其他不應公開的資料。

## AI agent 必讀規則

使用者要求新增消息、替換公告圖片或上傳門市圖片時，AI agent 必須先讀本 README，再檢查現有 `site-content.js`、`index.html` 與 `images` 內容。

1. 先確認圖片用途：最新消息、門市相簿、首頁主圖、購買說明、Logo 或 LINE QR Code。
2. 先檢視使用者提供的圖片，確認內容、方向、尺寸及是否含不應公開的資訊。
3. 新圖片統一放在 `images` 資料夾，不可使用本機絕對路徑或 Base64 直接嵌入 HTML。
4. 使用小寫英文字母、數字、連字號命名，避免空白、中文和覆蓋舊檔，例如 `news-2026-07-summer-event.jpg`。
5. 除非使用者明確要求替換，新增圖片時不得刪除或覆蓋既有圖片。
6. 圖片引用一律使用相對路徑，例如 `images/news-2026-07-summer-event.jpg`。
7. 所有顯示圖片都要有能描述內容的繁體中文替代文字，不可只寫「圖片」或檔名。
8. 修改後要檢查引用檔案存在、JavaScript 無語法錯誤、HTML 圖片路徑正確。
9. 只有使用者明確要求「發布、上傳、更新 GitHub」時，才可執行一鍵發布工具。只要求修改或預覽時，不得自行 push。

## Google Ads 公開文案原則

網站公開文案需維持真實、客觀且以門市服務資訊為主：

1. 優先描述營業時間、門市位置、交通、停車、自助流程及客服方式。
2. 避免露骨性行為、身體器官、性功能、性能力、刺激效果或醫療療效等文字。
3. 避免「何時需要」、「立即補給」、「挑逗」、「激情」等可能形成性暗示的促銷語氣。
4. 不可使用「保證」、「100%」等無法客觀證明的絕對性承諾。
5. 圖片不得出現裸露、性姿勢、成人商品特寫或可辨識的露骨包裝；僅調整文字不能消除圖片造成的政策風險。
6. 不可為通過審查而隱瞞實際商業性質，且不得宣稱修改後保證通過 Google Ads 審核。

## 新專案交接與待辦事項（2026-08）

本網站目前位於 `D:\CASE\SC行銷\WebSite`，是 SC行銷工作區中唯一的公開網站來源。新 AI agent 開始工作時，必須先讀本 README、檢查 `index.html`、`site-content.js`、`styles.css` 與 `Product_Images`，再進行任何修改。

### 目前已知 SEO 狀態與待辦

正式網站為 <https://vibrantblue28.github.io/>。首頁已提供 canonical URL、`robots.txt` 與 `sitemap.xml`；2026-08-12 已以 `vibrantblue28@gmail.com` 完成 Search Console 網址前綴資源驗證，並提交 `sitemap.xml`。首頁網址審查當時仍顯示尚未收錄；索引申請曾回傳暫時性錯誤，應於數小時後或隔日重試。不可只用搜尋排名推測索引狀態，應以 Search Console 的「網址審查」確認。

SEO 工作順序：

1. 維持首頁 canonical：`https://vibrantblue28.github.io/`。
2. 維持 `robots.txt` 允許搜尋引擎檢索，並列出 Sitemap URL。
3. 維持 `sitemap.xml` 收錄首頁、`/store/` 與 `/line/`。
4. 維持首頁 `og:url`、`og:image`，並確認結構化資料包含正式 `url` 與適當的 `image`。
5. 已建立並驗證 Google Search Console 的 URL-prefix 資源：`https://vibrantblue28.github.io/`。
6. 已提交 Sitemap；待 Google 讀取後確認狀態，並重試首頁的索引申請。
7. 在 Google 商家檔案加入正式官網網址。

SEO 變更完成後，要以正式網站檢查 HTTP 回應、Canonical、robots、Sitemap，並提醒使用者建立索引可能需要數天到數週，且不保證立即出現在搜尋結果。

### 商品展示管理規格（2026-08-14）

首頁商品展示區位於「門市特色」之後、「門市環境」之前；目前已建立 `KISSTOY Doris` 商品卡，使用 7 張使用者提供的展示圖片。商品資料集中於 `site-content.js`，圖片放在 `images/products/<商品代號>/`；不可直接引用 `Product_Images/`。

後續以 Shop Ads Studio 新增商品時，必須遵守以下規格：

1. 首頁商品展示最多保留 **3 個商品**。
2. 新增商品一律放在清單最上方；既有商品依時間排列在下方。
3. 新增第 4 個商品時，Studio 必須同時移除清單中最舊的商品及其網站展示設定，使清單維持 3 個商品。實際檔案是否清理須另有明確操作，不可因更新展示而自行刪除來源素材。
4. 每個商品卡片上方要有小標題，紀錄該商品的新增／更新日期與簡短說明，例如：`2026-08-14｜新品展示`。後續資料結構應以明確欄位保存，不可只將日期散落在 HTML。
5. 商品圖片由 Studio 產出或整理後，統一使用 **1024 × 1024** 正方形素材。網站圖片必須完整以 1:1 顯示、不可裁切；手機版一次顯示一張完整圖片，可左右滑動切換下一張。
6. 每項商品須保留：名稱、客觀短說明、圖片、更新小標題，以及「實際庫存、售價與包裝版本以門市現場為準」註記。不得猜測商品名稱、效果、價格、成分、活動日期或庫存。
7. Studio 的「新增商品」與「移除最舊商品」是網站內容管理操作，不等於發布；仍須由使用者明確要求後，才能使用發布工具更新 GitHub Pages。

接手 agent 在將素材公開前，仍必須逐張檢視圖片與包裝文字，並依本 README 的 Google Ads／Meta 公開內容限制提出風險說明；不可宣稱一定可通過平台審核。

### Google 與 Meta 的公開內容限制

成人／情趣用品屬於平台限制性商品。文案與圖片優先採門市位置、營業時間、停車、自助流程與客服資訊；不可將中性頁面作為跳板或隱瞞實際商業性質。

公開文案與圖片不得包含或暗示：

- 裸露、性行為、性姿勢、身體器官、性刺激、性體液或未成年人相關成人內容。
- 壯陽、持久、性能力、性慾、療效、治療或保證有效等宣稱。
- 「挑逗、激情、慾望、高峰、立即補給」等性暗示促銷語氣，或針對使用者的性功能、身體、感情與伴侶問題。
- 成人商品特寫、商品使用示意、露骨包裝，及圖片中可辨識的「成人用品」或 `ADULT TOYS` 文字。
- 錯字、符號、同音字、emoji、打碼或模糊等規避審查方式。
- 「100%、絕對、保證」等無法客觀證明的承諾。

Meta 的付費廣告尤其不應直接或間接推銷成人商品，例如商品價格、折扣、立即購買、私訊購買或導向成交頁；粉絲頁可提供客觀品牌與門市資訊，但可發布不代表可投放廣告。修改後必須列出已移除的高風險內容與仍存在的商業類型風險，且不得宣稱保證通過 Google 或 Meta 審核。

## 檔案用途

| 路徑 | 用途 | 常見修改時機 |
| --- | --- | --- |
| `site-content.js` | 最新消息的開關、標籤、標題、說明、圖片及註記 | 新增或替換最新消息時優先修改 |
| `images/` | 所有公開圖片 | 收到新公告圖、門市照片、Logo 或說明圖時 |
| `index.html` | 網站固定內容與門市相簿項目 | 新增相簿圖片、固定區塊或變更固定文案時 |
| `line/index.html` | Google Ads 使用的 LINE 專屬引導頁 | 修改 LINE 頁面文案、按鈕或追蹤設定時 |
| `line/line.css` | LINE 專屬引導頁樣式 | 調整 LINE 頁面的桌面或行動版版面時 |
| `store/index.html` | Google Ads 使用的門市地圖導航頁 | 修改門市資料、地圖或導航連結時 |
| `store/store.css` | 門市地圖導航頁樣式 | 調整門市頁面的桌面或行動版版面時 |
| `styles.css` | 頁面樣式與響應式版面 | 新增區塊或版面需要調整時 |
| `script.js` | 導覽、最新消息套用及燈箱互動 | 只有互動行為需要改變時 |
| `demand.md` | 原始需求與內容來源 | 需求本身有更新時 |

## 新增或更新「最新消息」

網站目前顯示一則最新消息。AI agent 應採以下流程：

1. 將新公告圖片放到 `images`，使用新的描述性檔名。
2. 修改 `site-content.js` 的 `latestNews`。
3. 保持 `enabled: true`；如果使用者要求暫時隱藏最新消息，改成 `false`。
4. 同步更新 `title`、`description`、`imagePath`、`imageAlt` 與 `footnote`，不可只換圖片而留下不相符的文字。

設定範例：

```javascript
window.SITE_CONTENT = {
    latestNews: {
        enabled: true,
        badge: "門市公告",
        title: "七月門市活動",
        description: "活動期間與注意事項請參考公告圖片。",
        imagePath: "images/news-2026-07-store-event.jpg",
        imageAlt: "情趣時光七月門市活動公告",
        footnote: "活動內容如有異動，以門市現場為準"
    }
};
```

若使用者只提供圖片、沒有提供標題或活動日期，AI agent 不可猜測；應保留為待確認資訊，或在修改前向使用者確認必要文案。

## 新增門市相簿圖片

門市相簿項目目前直接寫在 `index.html` 的 `#gallery` 區塊。新增圖片時：

1. 將圖片放入 `images`。
2. 參考既有 `.gallery-item`，在 `index.html` 新增一個按鈕項目。
3. `data-gallery-src` 與內部 `<img src>` 必須指向同一張圖片。
4. `data-gallery-caption` 與 `alt` 必須具體描述圖片內容。
5. 寬圖可使用 `gallery-wide`；是否使用需依圖片比例與現有版面判斷。
6. 填入圖片實際 `width`、`height`，並保留 `loading="lazy"` 與 `decoding="async"`。

範例：

```html
<button class="gallery-item" type="button"
        data-gallery-src="images/store-display-2026-07.jpg"
        data-gallery-caption="情趣時光七月門市展示區">
    <img src="images/store-display-2026-07.jpg"
         alt="情趣時光七月門市展示區"
         width="1600"
         height="1200"
         loading="lazy"
         decoding="async">
</button>
```

## 替換其他固定圖片

固定圖片與目前位置如下：

| 用途 | 目前檔案 | 主要引用位置 |
| --- | --- | --- |
| 品牌 Logo | `images/logo_1.png` | `index.html` Header |
| 首頁門市主圖 | `images/store_front_2.jpg` | `index.html` Hero |
| 購買方式說明 | `images/purch_nethor_1.png` | `index.html` Guide |
| LINE QR Code | `images/line_logo.png` | `index.html` Contact |

## LINE 專屬引導頁

Google Ads 的 LINE 最終到達頁為：

```text
https://vibrantblue28.github.io/line/
```

頁面來源為 `line/index.html`，樣式為 `line/line.css`，並沿用 `images/line_logo.png` 與官網既有 LINE 好友連結。修改時必須保留明顯的「點我加 LINE 諮詢」按鈕、可掃描的 QR Code、返回官網入口與既有 Google Ads conversion event；除非使用者提供新的正式 LINE 連結或 conversion ID，否則不可自行更換。

## 門市地圖導航頁

Google Ads 的「門市位置與導航」最終到達頁為：

```text
https://vibrantblue28.github.io/store/
```

頁面來源為 `store/index.html`，樣式為 `store/store.css`。修改時必須保留嵌入式 Google 地圖、明顯的「開啟 Google 地圖導航」按鈕、完整門市地址、營業時間、停車資訊及返回官網入口。導航按鈕目前使用 Google Maps 商家連結；除非使用者提供新的正式商家網址，否則不可自行更換。此頁目前只有 Google Ads 基礎標籤，尚未設定導航按鈕的 conversion event，不可自行套用 LINE 的 conversion ID。

替換固定圖片時，優先新增新檔案並修改引用，不直接覆蓋舊檔。確認新版本正常後，只有在使用者要求清理時才刪除未使用圖片。

## 修改後驗證

AI agent 至少要完成：

- 確認 `index.html` 存在。
- 確認所有新增的 `images/...` 路徑都有對應檔案。
- 確認 `site-content.js` 可被 JavaScript parser 正常解析。
- 確認圖片 `alt`、標題和說明與實際圖片一致。
- 確認未加入密碼、Token、私鑰、內部連線資訊或不應公開的個資。
- 若有改動版面或互動，使用瀏覽器檢查桌面版與行動版。

## 發布到 GitHub Pages

使用者確認內容並明確要求發布後，可雙擊：

```text
D:\CASE\SC行銷\tools\PublishWebsite.cmd
```

或在 PowerShell 執行：

```powershell
& 'D:\CASE\SC行銷\tools\PublishWebsite.ps1'
```

只想檢查異動、不建立 commit 或 push 時：

```powershell
& 'D:\CASE\SC行銷\tools\PublishWebsite.ps1' -DryRun
```

發布工具會：

1. 檢查 GitHub CLI 登入狀態。
2. 下載遠端 `main` 最新版本。
3. 將本資料夾同步到暫存 Repository。
4. 沒有異動時直接結束。
5. 有異動時建立 commit 並推送到 `main`。

GitHub Pages 通常需要數十秒完成建置。發布後應開啟公開網站確認 HTTP 回應、最新消息、圖片與行動版版面正常。

## 回復方式

若發布後發現問題，不要直接刪除 GitHub Repository 或 Pages 設定。應優先：

1. 修正本機 `WebSite` 內容後重新發布；或
2. 從 GitHub commit 歷史找出上一個正常版本並 revert。

Repository 與 GitHub Pages 設定是部署基礎，不得因單一圖片或文案錯誤而重建。
