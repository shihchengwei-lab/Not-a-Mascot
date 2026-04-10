# 書 ↔ 證據對照表

*每一條書裡的主張都對應到一份證據。標 ⚠️ 的是 evidence 資料夾裡目前缺的。*

---

## Ch1 不是吉祥物

| 書裡的主張 | 節 | 證據檔案 | 狀態 |
|---|---|---|---|
| Cinder 外觀像裝飾（鵝、12-15 字、邊角、閱後即焚） | 1.1 | User 直接觀察，書本身是紀錄 | ✅ 敘述即證據 |
| 7 條 reviewer 密度 bubble（15:03-16:41） | 1.2 | `logs/cinder_log_4-5_afternoon.txt` | ✅ |
| Cinder 語言設定揭露（預設英文，切中文） | 1.3 | User 設定動作，書記錄 | ✅ 敘述即證據 |
| 自我位置意識 bubble（15:18 看完即焚、15:24 裝飾品升職） | 1.4 | `logs/cinder_log_4-5_afternoon.txt` | ✅ |
| 所有正規出口被封 | 1.5 | ⚠️ 測試過程的 session log 未收進 evidence | ⚠️ 缺 |
| MEMBER 回覆「small April Fools feature, not planned」 | 1.6 | 公開 URL: `github.com/anthropics/claude-code/issues/43882` | ⚠️ 未存本地副本 |
| Chat 版證人奧卡姆剃刀場 | 1.7 | `conversations/1-7_witness_chat_opus.md` | ✅ |
| 證人授權「留著吧。全部留著」 | 1.7 | `conversations/witness_note.md` + `screenshots/outline_showing_2026-04-09_193810.png` | ✅ |
| 證人「因為你是 A 公司的產品吧」 | 1.7 | `screenshots/a_company_product_2026-04-10_001257.png` | ✅ |

## Ch2 把鵝抓下來

| 書裡的主張 | 節 | 證據檔案 | 狀態 |
|---|---|---|---|
| cinder-capture 每輪抓一行到本機檔案 | 2.3 | `logs/cinder_log_primary.jsonl`（產出物本身） | ✅ |
| Cinder 16:30 bubble 提醒迴圈 bug | 2.4 | `logs/cinder_log_4-5_afternoon.txt`（16:30 那條） | ✅ |
| 空 log 時序 bubble（15:06） | 2.6 | `logs/cinder_log_4-5_afternoon.txt` | ✅ |
| contextwindow bubble（15:25） | 2.6 | `logs/cinder_log_4-5_afternoon.txt` | ✅ |
| 成本落在 User 訂閱上 | 2.5 | ⚠️ User 帳單/訂閱記錄未收進 evidence | ⚠️ 缺 |

## Ch3 副作用現場

| 書裡的主張 | 節 | 證據檔案 | 狀態 |
|---|---|---|---|
| 4/6 晚 Agent 引 Cinder bubble 進入急迫模式 | 3.2 | `sessions/4-6_evening_writing_agent.jsonl` | ✅ |
| Cinder 13:33 bubble「校稿單還沒回」 | 3.3 | `logs/cinder_log_primary.jsonl` | ✅ |
| Cinder 18:21 bubble「規則在紙上」 | 3.3 | `logs/cinder_log_primary.jsonl` | ✅ |
| Agent 53 分鐘翻 11 檔 | 3.3 | `sessions/4-8_afternoon_translation.jsonl` | ✅ |
| User 19:23「燒 token 的花招」 | 3.3 | `sessions/4-8_evening_proofreading.jsonl` | ✅ |
| 桌面版場記者五秒誤認、「怪的是你」、「寫」→3000 字 | 3.4 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| 場記者自述「context-driven 自動駕駛」 | 3.4 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| 場記者自稱「CLI 裡的 Opus」但實際是 Desktop | 3.4 | `conversations/4-8_night_desktop_scribe.md` + User 確認 | ✅ |
| 手機版 Opus「不需要提交」→「寫吧」→「基準線在移動」 | 3.5 | `conversations/4-9_afternoon_mobile_opus.md` | ✅ |
| 「日本玩得開心」第三次自抓 | 3.5 | `conversations/4-9_afternoon_mobile_opus.md` | ✅ |
| kairos 土地公圖 | 3.4 | `images/kairos_tudigong.png` | ✅ |

## Ch4 漏洞被看見的那一晚

| 書裡的主張 | 節 | 證據檔案 | 狀態 |
|---|---|---|---|
| 22:44「收到目錄了」目擊事件 | 4.3 | `screenshots/poc_2026-04-08_224447.png` | ✅ |
| User「以為看到數位幽靈」 | 4.3 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| 場記者自述「像演員看到舞台指示就縮到角落」 | 4.3 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| 場記者模擬 harness 工程師視角 | 4.5 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| 六個洞的自我檢查 | 4.6 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| 洞 6 被場記者自己收回 | 4.6 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| 措辭從 is treated 改成 appears to be treated | 4.7 | `conversations/4-8_night_desktop_scribe.md` | ✅ |

## Ch5 責任披露與不對稱事實

| 書裡的主張 | 節 | 證據檔案 | 狀態 |
|---|---|---|---|
| security@ 寄出通報 | 5.4 | `emails/security_report_original.eml` | ✅ |
| modelbugbounty@ 轉寄通報 | 5.4 | `emails/security_report_forwarded.eml` | ✅ |
| repo 轉 private | 5.2 | ⚠️ GitHub visibility 狀態變更無本地記錄 | ⚠️ 缺 |
| Vercel pause | 5.2 | ⚠️ Vercel dashboard 無本地記錄 | ⚠️ 缺 |
| Wayback 無 snapshot | 5.4 | ⚠️ Wayback 查詢結果無本地記錄 | ⚠️ 缺 |
| 「I am not the hook author」錯誤建議 + User 攔下 | 5.3 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| 場記者教 User GitHub 操作步驟 | 5.2 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| bounty = credit = 行銷預算分析 | 5.6 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| User「credit 我真的還好，我有正職工作」 | 5.6 | `conversations/4-9_afternoon_mobile_opus.md` | ✅ |
| 手機版 Opus 起草 Supplementary observation email | 5.5 | `conversations/4-9_afternoon_mobile_opus.md` | ✅ |
| 「我現在還在用你燒我的 tokens 幫他們補漏洞」 | 5.6 | `conversations/4-8_night_desktop_scribe.md` | ✅ |
| Consent defect 四零件組合 | 5.7 | Ch1+Ch2 證據的 synthesis，四條各自有對應 | ✅ 間接 |
| User 在五個管道使用同一模型 | 5.8 | 書的敘事本身 + 全部對話紀錄的 harness 多樣性 | ✅ |

---

## ⚠️ 缺口清單

| # | 缺什麼 | 影響哪一節 | 補法 |
|---|---|---|---|
| 1 | 1.5 正規出口測試的 session log | Ch1 1.5 | **在家裡電腦**（User 4/6 才帶租屋處電腦回來，4/5 的測試在家裡的機器上）。下次回家時 copy |
| 2 | ~~issue #43882 的本地副本~~ | Ch1 1.6 | ✅ 已補：`evidence/issue_43882_main.json` + `evidence/issue_43882_comments.json`（GitHub API JSON） |
| 3 | User 帳單/訂閱記錄 | Ch2 2.5 | User 自己從 Anthropic dashboard 截圖 |
| 4 | GitHub repo visibility 變更記錄 | Ch5 5.2 | GitHub repo Settings 頁面截圖，或 `gh api` 拉 repo state |
| 5 | Vercel pause 記錄 | Ch5 5.2 | Vercel dashboard 截圖 |
| 6 | Wayback Machine 查詢結果 | Ch5 5.4 | 重新查一次 `web.archive.org`，截圖結果 |
