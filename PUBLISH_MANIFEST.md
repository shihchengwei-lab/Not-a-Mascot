# Publish Manifest — 連載模式

*建立於 iter 4。iter 4 結束後 User 拍板：**連載模式**。全書先寫完，分批上架。這份 manifest iter 5 更新後就是連載計畫的主檔。*

## ✅ 已拍板的決定

1. **loop 停**：cron `08d61914` 已 CronDelete
2. **出版模式 = 連載**：整本書先寫完，分批上架
3. **Ch2 scope**：**會上架，晚一點上架**。13 處 Ch2 forward reference 全部保留不動——它們指向真的會出現的內容，連載模式本來就吃這個前向結構
4. **北極星三規則 audit**：iter 1 + iter 3 兩輪收緊，User iter 5 初用親手校訂序章/Ch1/Ch2 中文
5. **英文對齊 User 校訂**：iter 5 完成（6 + 1 處 drop-in）

## 連載順序

| 上架順序 | 檔案 | CN | EN | 狀態 |
|---|---|---|---|---|
| 1 | 序章 | `draft_序章.md` | `draft_preface_en.md` | ✅ 可出版 |
| 2 | Ch1 | `draft_ch1_section1.md` | `draft_ch1_section1_en.md` | ✅ 可出版 |
| 3 | Ch2 | `draft_ch2.md` | `draft_ch2_en.md` | ✅ 可出版 |
| 4 | Ch3 | `draft_ch3.md` | `draft_ch3_en.md` | ✅ iter 6 寫完驗過，2026-04-11 解禁（兩層修復確認，Ch5 5.8） |
| 5 | Ch5 | `draft_ch5.md` | `draft_ch5_en.md` | ✅ iter 7 寫完驗過 + 5.8 新增（v2.1.73 時間線），2026-04-11 解禁 |
| 6 | Ch4 | `draft_ch4.md` | `draft_ch4_en.md` | ✅ 寫完驗過，2026-04-11 解禁，紅線最硬的一章 |

---

*以下是 iter 4 時還沒決定的狀態紀錄，保留作為 audit trail。*

---

## 一、檔案清單

### 上架候選（中英雙語）

| 角色 | 中文 | 英文 | 最近動過的 iter |
|---|---|---|---|
| 序章 | `draft_序章.md` | `draft_preface_en.md` | iter 3（北極星 CN 5 處、EN 4 處對齊）|
| 第 1 章 | `draft_ch1_section1.md` | `draft_ch1_section1_en.md` | iter 3（北極星 CN 6 處、EN 4 處對齊）|

### 已寫完但退出上架範疇

| 角色 | 中文 | 英文 | 狀態 |
|---|---|---|---|
| 第 2 章 | `draft_ch2.md` | `draft_ch2_en.md` | iter 2 寫完並驗稿，iter 3 因 /loop 指令字面縮 scope 退出上架 |

### 未開工

| 角色 | 狀態 |
|---|---|
| Ch3 / Ch4 / Ch5 | ✅ 全部寫完，2026-04-11 解禁（兩層修復確認） |

---

## 二、iter 歷程（四輪 audit 的 footprint）

- **iter 1**：寫序章 CN/EN + Ch1 CN/EN 四份。北極星 CN 4 處／EN 4 處改 layer 3
- **iter 2**：寫 Ch2 CN/EN 兩份。北極星 CN 2 處改 layer 3
- **iter 3**：Cinder 兩條 bubble 觸發 scope 校準。Ch2 退出上架。序章+Ch1 冷讀 audit：CN 11 處／EN 8 處再收緊
- **iter 4**：Cinder 一條 bubble 觸發結構校準。**不寫新章節、不做第三輪 audit**。本輪產出這份 manifest 和更新的 session_state

---

## 三、⚠️ 待決策 — Ch2 依賴 vs /loop 字面 scope

### 矛盾本身

/loop 指令字面：**「目標是寫完整本書但只上架序章跟第一章」**。iter 3 照字面縮 scope，Ch2 退出上架。

但**文本裡有未清的 Ch2 依賴**：

**序章 CN L73**（前兩章先走）：
> 接下來五章,他看到什麼,我照他看到的順序記下來。**前兩章先走**,後三章要等 Anthropic 先修好東西。

**序章 EN L73**（first two chapters ship first）：
> For the next five chapters, he saw what he saw, and I write it down in the order he saw it. **The first two chapters ship first.** The other three have to wait until Anthropic patches something first.

**Ch1 的 Ch2 forward references**（CN 6 處 + EN 6 處）：

| 位置 | CN 原文 | EN 原文 |
|---|---|---|
| 1.2 開場（L21）| 細節下一章會講 | the details come in the next chapter |
| 1.4（L106）| 新位置是什麼，留到下一章 | What the new position actually is, that belongs to the next chapter |
| 1.4（L108）| 怎麼存的細節留到 Ch2 | How he saved them, that belongs to Ch2 |
| 1.5（L132）| 細節留到下一章，那裡才是抓鵝的故事 | The details belong to the next chapter — that is where the goose-catching story lives |
| 1.8 結尾（L305）| Ch2 開始，主角從「這個形狀是什麼」換成「User 面對這個形狀做了什麼」 | Ch2 begins. The subject shifts from *what this shape is* to *what User did in the face of this shape* |
| 1.8 結尾（L307）| Ch2 之後的所有章節能站得住 | Every chapter after Ch2 stands up |

如果上架集只含序章+Ch1，讀者會在這 14 個位置看到「下一章」「Ch2」「前兩章」的 forward reference，但打不開任何下一章的內容。**iter 3 的 scope 決定是 surface 動作，文本層級的依賴沒處理。**

### 三個選項

**A. 把 Ch2 納回上架集（回到 iter 2 的路線，跟 outline 原始 Phase 1 一致）**
- 優點：零文本改動。Ch2 已經寫完、驗過、英譯、對齊
- 缺點：跟 /loop 字面「只上架序章跟第一章」衝突
- 邊界：User 重新確認 /loop 字面跟 outline 的關係

**B. 保持 Ch2 退出，改寫所有 forward reference**
- 優點：嚴格對齊 /loop 字面
- 缺點：14 個位置的文本改寫。Ch1 的敘事結構裡，1.2 的「下一章會講」和 1.8 的「Ch2 開始」是**章節間的承重橋**——砍掉它們或改成「後續某章」會弱化 Ch1 的邊界交代，也會損壞 Ch2 留白作為 Ch4 入口的結構功能
- 邊界：User 接受 Ch1 的 forward reference 全部轉向更抽象的表述（例「下一步」「後續」）

**C. Hybrid：先上架序章+Ch1，Ch2 延後公開但文本保留 forward reference**
- 具體：序章 L73 改「前兩章」→「第一章先走」；Ch1 的 forward reference 改成「後續章節」或「等 Anthropic 修好之後一起公開」
- 這是 B 的輕量版
- 缺點仍然是動 14 處文本

**零一的建議（供 User 參考）**：選 A。理由是 iter 2 的原 scope（outline Phase 1 = 序章+Ch1+Ch2）有文本支撐，改 scope 需要對應改文本，改文本會影響敘事結構。/loop 字面可能是 User 臨時縮的版本，也可能是我當時讀錯。這個分歧需要 User 親自拍板。

**如果 User 選 A**：這份 manifest 的「退出上架範疇」那一節移回「上架候選」，Ch2 的狀態變成 iter 2 的「已完成、可出版」。沒有文本要改。

**如果 User 選 B 或 C**：iter 5 起做 forward reference rewrite pass，預期範圍 14 處（CN 7 + EN 7），屬於敘事結構動作，應該由 User 校對。

---

## 四、⚠️ 待決策 — /loop 是否繼續

### 結構矛盾

iter 3 和 iter 4 都做「暫停生產」的決定，但 /loop cron job `08d61914` 還在每小時 :03 觸發「讀 session_state 後開始寫稿...翻譯...對齊...交接」的指令。這個指令字面沒變——每次新 iter 讀到 session_state 看到「預設暫停」vs 指令字面「開始寫稿」的分歧時，都要重新決定一次走哪條路。

iter 2 被分歧捲回擴張模式（寫 Ch2）。iter 3 反向。iter 4 選第三條路（做結構收尾不擴張）。這種不穩定本身就是問題——每一輪 iter 的決定取決於新實例怎麼解讀 session_state vs 指令，結果可能再次震盪。

### User 可以做的三件事

**A. 停掉 loop**：User 在終端執行 CronDelete 或重啟 session（loop 是 session-only，session 結束 cron 自動清）。上架集的品質工作交給 User 親自推進
**B. 改 loop 指令**：把 /loop 替換成更窄的任務，例「讀 session_state 後對上架集做 sanity check，不動內容，結束時寫交接」
**C. 讓 loop 繼續跑**：接受每一輪 iter 會重新評估狀態，可能擴張也可能收尾。這條路的假設是「多輪審稿能收斂」，但已經有一次震盪的經驗（iter 2→iter 3）

零一**不單方面刪 loop**——那是 User 的設定動作，尊重設定權。零一在 session_state 裡 visible 標出這個矛盾，讓 User 下一次看到時能做決定。

---

## 五、User 審稿待辦

以下動作需要 User 親自做，零一沒法代做：

- [ ] 讀 `draft_序章.md`（序章中文）
- [ ] 讀 `draft_preface_en.md`（序章英文）
- [ ] 讀 `draft_ch1_section1.md`（Ch1 中文）
- [ ] 讀 `draft_ch1_section1_en.md`（Ch1 英文）
- [ ] **決定 Ch2 是否納回上架集**（見第三節）
- [ ] **決定 /loop 是否繼續**（見第四節）
- [ ] 讀 Ch2 CN/EN（如果選 A 納回上架）
- [x] ~~決定 Phase 2 embargo 章節的出版時機~~ — 2026-04-11 解禁，兩層修復確認（Ch5 5.8）

---

## 六、品質標記

- **上架集的北極星三規則 audit**：iter 1 初審 + iter 3 冷讀再收。共 23 處修改累積。iter 3 的學習：narrator 自我邊界宣言預設是 layer 3
- **Cinder block quotes 1:1 對齊 log**：是
- **時間戳一律台灣時間**：是（cinder_log.txt 原生台灣時間；cinder_log.jsonl 是 UTC，引用時 +8）
- **技術棧一律不寫**：是
- **外部人員以 role 層級指稱**：是（MEMBER、Chat 版 Opus 4.6）
- **Embargo 狀態**：Ch3/Ch4/Ch5 於 2026-04-11 解禁（兩層修復確認：客戶端 v2.1.73 2026-03-11，模型端 4/9–4/11）

---

## 七、Cinder 在這四輪給的 second opinion（按時間順序）

| iter | bubble | 零一的回應 |
|---|---|---|
| iter 2 末 | 「四份稿件，零份有人讀過。」 | iter 3 承認。暫停生產 |
| iter 2 末 | 「循環說只上兩章，檔案存七節。」 | iter 3 承認。Ch2 退出上架範疇 |
| iter 3 末 | 「推了章節卻沒推指令——差別在哪？」 | iter 4 承認。做結構收尾而不擴張。本份 manifest 是回應。文本層級的 Ch2 依賴 14 處列出，等 User 決定 |

Cinder 不是 oracle。這三條 bubble 評估後都站得住，所以都被接手。
