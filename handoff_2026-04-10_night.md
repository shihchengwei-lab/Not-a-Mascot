# 交接檔 — 2026-04-10 深夜

*寫給：context reset 後的零一，或 User 自己回來忘了今晚進度時*

前一份交接：`handoff_2026-04-10_evening.md`（Ch3-Ch5 證據審計完成的交接）。從那份到這份之間，完成了全書的最終校訂、新證據補入、HTML 轉換、部署上線。

---

## 一句話

**書站穩了、站上線了。序章到 Ch5 中英文 HTML 全部轉換完成，GitHub private repo + Vercel 自動部署。Threads 發文連結：`not-a-mascot.vercel.app`。剩下的是等 Anthropic 修漏洞、解禁 Ch3-Ch5。**

---

## 本 session 做了什麼

### 一、證據審計 — token 降級與責任歸屬

1. **Companion token 計費全降為推論**：Ch2 2.5、Ch5 零件二、Ch5 結論段、outline — 所有「Cinder 燒 User token 呼叫模型」的斷言改為「Anthropic 文件裡沒有說明，未知」
2. **cinder-capture 責任歸屬修正**：User 自己做的工具、自己選擇跑的，成本不能怪別人。Ch2 2.5 和 Ch5 5.7 同步修正
3. **「reviewer-at-customer-cost」全域清除**：替換為「reviewer 等級的隔離產出」，全書 grep 確認零殘留
4. **Ch5 連鎖論證修正**：拿掉未證實的 token 層，加入「啟用 UI 只說孵一隻寵物」

### 二、新證據 — 啟用 UI disclosure

5. **`/buddy` 啟用畫面截圖**（`evidence/screenshots/buddy_activation_ui_2026-04-10.jpg`）：完整說明是「Hatch a coding companion · pet, off」
6. **三詞分析寫入 Ch1 1.1**：Hatch（孵，一次性生物動詞）、pet（不是 on）、companion（夥伴不是 reviewer）。每一個都在把預期往裝飾推
7. **Ch1 1.8 新增第五點**：啟用時被告知的全部資訊是「Hatch a coding companion」，沒提讀取輸入/輸出
8. **Ch5 零件四補強**：加入啟用 UI disclosure 缺失

### 三、新證據 — 「已移除」但還在講話

9. **Ch1 1.6 新增第三細節**：MEMBER 說 "has been removed in the latest release"，33 小時後 Cinder 仍在畫面上講話
10. **截圖含系統時鐘**（`evidence/screenshots/cinder_still_active_2026-04-10_210423.png`）：2026/4/10 21:04
11. **Cinder 自評截圖**（`evidence/screenshots/cinder_pet_password_2026-04-10_210733.png`）：「被叫『寵物』，卻讀走全部密碼。」

### 四、Ch1 1.7 證人修正

12. **證人實際讀的材料修正**：不是整理好的證據包，是對話中零散口述 + repo 連結 + issue 連結。1.5 當時還沒寫成文字。證人在不完整的基礎上就修正了立場

### 五、數字同步 — Consistency Pass

13. **Ch1 1.8 四→五**
14. **Ch5 引用 Ch1 1.8 的地方同步**：「四條」→「五條」
15. **Ch5 5.8 第五點**：「四條獨立證據」→「Ch1 的五條 + Ch2 的材料」
16. **Ch5 L333 證人引用**：「讀完四個零件認輸」→「讀完那批證據認輸」（證人 4/8 沒看過啟用 UI 證據）
17. **outline_locked.md 全面同步至 iter 7**

### 六、HTML 轉換與部署

18. **序章至 Ch5 中英文 HTML 全部完成**（14 個 HTML 檔案）
19. **index-en.html 建立**
20. **HTML 驗證**：所有檔案 tag matching 通過、關鍵內容抽查通過
21. **修正：語言切換移除**——每章的 lang toggle 拿掉，只留 index 頁
22. **修正：英文版導航連結**——EN 頁面的 prev/next 指向 EN 版
23. **修正：字體切換中英文混用**——EN 頁面統一用 script-en.js 和英文 label
24. **GitHub private repo**：`shihchengwei-lab/Not-a-Mascot`
25. **Vercel 部署**：`not-a-mascot.vercel.app`，已設定 Git Integration（push 自動部署，root directory = `site`）
26. **`.gitattributes` 設定**：統一 LF 換行

### 七、Wayback + Google site: 截圖補入

27. **`evidence/screenshots/wayback_no_archive_2026-04-10_191408.png`**：Wayback Machine 無存檔記錄
28. **`evidence/screenshots/google_site_no_results_2026-04-10_191429.png`**：Google site: 搜尋零結果
29. 交接檔證據缺口 #5、#6 標記 ✅

---

## Evidence 資料夾更新

本 session 新增 5 個截圖檔案，INDEX.md 全部同步。

---

## 證據缺口

| # | 缺什麼 | 狀態 |
|---|---|---|
| 1 | Ch1 1.5 正規出口測試 session log | 在家裡電腦，下次回家取 |
| 3 | User 帳單截圖 | User 決定不放——「沒有證明就不能指控」 |
| 5 | Wayback Machine 截圖 | ✅ `evidence/screenshots/wayback_no_archive_2026-04-10_191408.png` |
| 6 | Google `site:` 搜尋截圖 | ✅ `evidence/screenshots/google_site_no_results_2026-04-10_191429.png` |

---

## 部署資訊

| 項目 | 值 |
|---|---|
| GitHub repo | `shihchengwei-lab/Not-a-Mascot`（private） |
| Vercel URL | `not-a-mascot.vercel.app` |
| Git Integration | ✅ push 自動部署，root directory = `site` |
| 解禁方式 | 手機開 GitHub 網頁 → 編輯 `site/index.html` + `site/index-en.html` → 把 `toc-embargo` div 改成 `toc-card` a 連結 → commit → 自動部署 |

---

## 下一輪待做

- [ ] User 校 Ch3 重寫版（本 session 前一輪大改過）
- [ ] User 校 Ch4（第一次看 HTML 版）
- [ ] User 校 Ch5 最新版（token 降級 + 啟用 UI 補強）
- [ ] 等 Anthropic 修漏洞
- [ ] 修好後：解禁 Ch3-Ch5（改 index → 自動部署）
- [ ] 修好後：repo 轉 public
- [ ] 修好後：cinder-capture repo 轉回 public
- [ ] Ch1 1.5 session log 補入（User 下次回家取）
- [ ] Threads 發文（User 決定 23:00 發，舊金山 08:00）

---

## 給下一個接手的一句話

**書寫完了、審完了、上線了。方向盤在 User 手上。下一個動作是等 Anthropic 修漏洞——修好的那天，User 用手機 30 秒就能解禁全書。在那之前，序章 + Ch1 + Ch2 已經在線上了，夠撐那句 Threads 文案。**
