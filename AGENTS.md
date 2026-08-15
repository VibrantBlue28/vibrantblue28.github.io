# WebSite Codex 接手指引

## 先讀文件

1. `README.md`：目前維護契約、SEO、商品目錄、發布與回復流程。
2. `demand.md`：初始需求史料，不是目前公開文案的唯一依據；與 README 或程式不一致時，先查明差異。
3. 修改前檢查 `index.html`、`site-content.js`、`script.js`、`styles.css`、`images/products/catalog.js` 與受影響圖片。

## 專案與公開環境

- 本機路徑：`D:\CASE\SC行銷\WebSite`
- Repository：`VibrantBlue28/vibrantblue28.github.io`
- 分支：`main`
- 公開站：<https://vibrantblue28.github.io/>
- 技術：純 HTML5 + CSS3 + Vanilla JavaScript，GitHub Pages 靜態托管，沒有 Node 建置流程。
- 公開頁面：`/`、`/line/`、`/store/`。
- SEO：首頁已有 canonical、Open Graph、Store JSON-LD、Search Console 驗證；`robots.txt` 允許索引，`sitemap.xml` 收錄三個公開頁面。
- Google Ads 基礎標籤：`AW-18315827651`；LINE conversion：`AW-18315827651/TjSfCIqmyNUcEMOz1Z1E`。不可自行更換或將 LINE conversion 套用到導航按鈕。

## 2026-08-15 內容狀態

- `site-content.js` 的 `latestNews.enabled` 為 `false`，首頁最新消息區目前隱藏。
- `images/products/catalog.js` 為商品唯一資料來源，目前依新到舊有：
  1. `2026-08-14｜新品展示`—玻尿酸潤滑液，8 張 1024×1024 圖片。
  2. `2026-08-14｜首次商品展示`—KISSTOY Doris，7 張 1000×1000 圖片。
- 程式只渲染前 3 筆；Studio 產生目錄時也必須主動維持最多 3 筆。
- 商品圖片不用於付費廣告；使用者目前規劃用於 Facebook 粉絲團自然貼文。若圖片同時放在官網，仍屬公開內容，不可宣稱因此適合付費廣告。
- 首頁以行動裝置為主；`logo_1.png` 用於 Header / favicon，`logo_2.png` 用於行動版 Hero，桌面版 Hero 改用 `store_front_2.jpg`。

## 內容修改契約

- 最新消息：優先修改 `site-content.js`，並同步更新圖片、標題、說明、alt 與註記。
- 商品展示：只修改 `images/products/`；資料契約為 `updatedLabel`、`name`、`description`、`footnote`、`images`。
- 商品短說明必須是已確認的客觀文字。資料不足時使用「商品與包裝外觀展示，圖片內容僅供辨識與參考。」，不可將「請填寫…」類佔位文字公開。
- 相簿圖片寫在 `index.html` 的 `#gallery`；`data-gallery-src`、`src`、alt、caption 與實際尺寸必須一致。
- 圖片使用相對路徑、繁體中文 alt、小寫英數與連字號檔名。未明確要求清理時不刪除舊圖。
- 公開官網文案以門市位置、時間、停車、自助流程與客服為主；不隱瞞商業類型，不使用保證、醫療或無法證實的功效宣稱。

## 驗證

修改後至少完成：

1. `node --check site-content.js`、`node --check script.js`、`node --check images/products/catalog.js`。
2. 檢查所有新增或修改的相對路徑存在。
3. 檢查圖片尺寸、格式、透明度、alt 與畫面含義。
4. 修改 CSS / 互動時檢查行動版與桌面版，並確認瀏覽器主控台無錯誤。
5. 執行 `git diff --check` 與 `git status --short --branch`。
6. 不可將密碼、Token、私鑰、連線字串、個資或內部作業素材加入本 public repository。

## 發布邊界

- `WebSite` repository 只是待發布來源；修改或預覽不等於發布。
- 使用者必須明確要求「發布、上傳、更新 GitHub」後才能 push。
- 預期工具路徑是 `D:\CASE\SC行銷\tools\PublishWebsite.ps1` 與 `.cmd`；工具不在本 repository 內，使用前必須驗證檔案存在。
- 優先執行 `PublishWebsite.ps1 -DryRun`；只有在內容、預覽、Dry Run 與使用者最終確認都完成後才能正式發布。

