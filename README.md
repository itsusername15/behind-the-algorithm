# Behind the Algorithm

Netflix 和 Spotify 怎麼知道你喜歡什麼？這是給初學者的推薦系統課程專案。九頁 HTML 簡報以已驗證的 LLM Wiki 為知識依據，介紹推薦訊號、過濾、排序和兩個平台的公開案例，並提供可操作的教學示範與小測驗。

## 專案內容

| 位置 | 用途 |
| --- | --- |
| [Wiki 索引](wiki/index.md) | 七篇主題文章，區分一般技術原理、平台官方公開資訊與虛構教學示範。 |
| [來源索引](sources/index.md) | 五篇成功讀取的來源及來源卡，提供原始網址、讀取日期和摘錄定位。 |
| [HTML 簡報](slides/index.html) | 九頁投影片，附 CSS、原生 JavaScript 和網頁版引用定位。 |
| [AGENTS.md](AGENTS.md) 與 [workflow.md](workflow.md) | 規範來源追蹤、主張預檢、驗證和失敗回退。 |
| [執行紀錄](logs/) | 記錄 Wiki、簡報及發布前檢查的實際結果、問題、修正和重試。 |

## 在本機閱讀

用瀏覽器開啟 `slides/index.html`。用上一頁、下一頁或鍵盤左右鍵翻頁。簡報頁腳列出對應的 Wiki 小節與來源 ID。若要讓瀏覽器直接顯示引用小節，在專案根目錄執行 `python -m http.server 8000 --bind 127.0.0.1`，再開啟 `http://127.0.0.1:8000/slides/`。也可在 GitHub 儲存庫介面閱讀有格式的 Markdown。

## 使用 GitHub Pages

1. 將專案檔案與目錄結構上傳至儲存庫的 `main` 分支，包含根目錄的 `.nojekyll` 和 `index.html`，以及 `slides/`、`wiki/`、`sources/` 與 `logs/`。
2. 在儲存庫 **Settings → Pages → Build and deployment** 選擇 **Deploy from a branch**。選取 **main** 與 **/(root)**，儲存設定。[GitHub Pages 官方設定說明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
3. 部署完成後，以 Pages 顯示的網站網址為準，在網址尾端加上 `/slides/`。一般專案網站的格式為 `https://<owner>.github.io/<repository>/slides/`，例如儲存庫名稱為 `behind-the-algorithm` 時，路徑為 `/behind-the-algorithm/slides/`。網站首頁也提供簡報入口。
4. 在公開網址開啟簡報，驗證翻頁、示範、測驗，以及「投影片 → Wiki 小節 → 來源卡摘錄」的引用路徑。

`.nojekyll` 讓 Pages 直接提供靜態檔案。網頁版引用從同站讀取原始 Wiki 與來源卡，因此請保留目錄結構。修改教材時，依工作流程重新核對 Wiki 版本、簡報引用及實際瀏覽器結果。
