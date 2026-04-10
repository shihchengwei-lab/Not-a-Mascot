# 交接檔 — 2026-04-09 晚

*寫給:明天早上會 context reset 的零一,或 User 自己回來忘了進度的時候*

---

## 書的身分

- **中文**:《從外面看系統形狀》
- **英文**:*Not a Mascot: Users, Agents, and the April Fools' Workflow Trap*
- **作者**:零一 = Claude Opus 4.6(1M context 版本)。本系列筆名,前兩本同
- **主角**:User,沒寫過一行程式碼
- **觀察期**:2026-04-01(Cinder 上線)到 2026-04-09(今),九天
- **出版節奏**:
  - Phase 1(可公開):序章 + Ch1 + Ch2
  - Phase 2(embargo 到 Anthropic 修好):Ch3 + Ch4 + Ch5

---

## 已完成

- `outline_locked.md`:全書六章細綱鎖定,含時序、材料地圖、寫作原則、章節 embargo 分配
- `draft_序章.md`:序章初稿完成,經 User 兩輪校對(漏洞語言已模糊化、Ch3 進 embargo 同步更新)
- `draft_ch1_section1.md`:Ch1 第一節初稿完成(1.1 初見、1.2 密度不對、1.3 語言揭露、1.4 牠還在看自己的位置)。約 2200 中文字。用了 7 條鎖定的 Cinder 原話
- alii April Fools comment 原文已從 GitHub API 抓回,時間戳台灣化(2026-04-09 09:03)。見下方「已抓素材」
- Ch1 beat 2 的 Cinder 六條引用已定稿、排序、時間戳台灣化、外層「」按 log 原貌對齊
- Ch3 beat 1 的 imperative contagion 現場證物(4/8 下午兩條 Cinder bubble)已抓,UTC → 台灣時間轉換已完成

## 目前推進

- **Ch1 section 1 初稿待 User 校對**。這是目前進展的最前緣
- 寫作原則的一輪 calibration 剛結束:
  - 誤讀 → 過度修正 → User 釐清 → 修正回原位
  - 釐清的規則:「臆測」這條紅線**只適用於「不證明 Cinder 背後是哪個模型」這件窄事**。其他敘事層分析/描述/結構觀察,敘事者零一可以做(Option C,即原稿模式)
  - Cinder 作 drift detector 而非 rule-maker。牠的 bubble 即時戳,不預先寫死規則

## 未完成

### 短期(日本出發前可能動的)
- Ch1 section 1 校對 + 英文 re-voice(方案 A 工作流循環第一次)
- Ch1 剩餘節:
  - 1.5 所有正規出口都是封的
  - 1.6 April Fools comment(材料已抓)
  - 1.7 污點證人 小節(**此 beat 的結構有新選項,見下**)
  - 1.8 本章結論
- Ch2 全章(細綱已鎖定,尚未動筆)
- 序章的英文版 re-voice

### 長期(embargo,Anthropic 修好之前不動筆)
- Ch3 副作用現場(細綱鎖定)
- Ch4 漏洞被看見的那一晚(細綱鎖定)
- Ch5 責任披露與成本倒置(細綱鎖定)


---

## 資料地圖(按需讀取)

### 原材料(不主動讀,需要時再開)

| 路徑 | 內容 | 大小 |
|---|---|---|
| `C:\Users\kk789\Desktop\Not_a_Mascot\cinder_log.txt` | 4/5 下午 cinder-capture 建置當天,66 條 bubble,中文,local format | ~6KB |
| `C:\Users\kk789\.claude\cinder_log.jsonl` | 主 log,4/6 21:17 台灣到現在,UTC 時間戳,混英中 | ~74KB |
| `C:\Users\kk789\Desktop\Not_a_Mascot\cinder_log.jsonl` | Desktop 舊備份,4/6 早之前 | ~58KB |
| `C:\Users\kk789\Desktop\Not_a_Mascot\next_book_material.md` | 4/8 夜 CLI 場記者完整對話,含漂移、漏洞發現、責任披露 | 2479 行 |
| `C:\Users\kk789\Downloads\drift_case_study.md` | 4/9 下午 Chat 版 Opus 4.6 漂移 + 第二次通報對話 | 517 行 |
| `C:\Users\kk789\Desktop\Not_a_Mascot\same_model_twins.md` | 4/8 夜 CLI 第一人稱場記 | — |
| `C:\Users\kk789\Desktop\Not_a_Mascot\witness_note_chat_opus4.6.md` | 4/6 下午 Chat 版證人筆記 | — |
| `C:\Users\kk789\Desktop\Not_a_Mascot\three_files_analysis_framework.md` | 三份檔案的 meta 分析框架 | — |
| `C:\Users\kk789\Desktop\Not_a_Mascot\harness_value_nonacademic.md` | harness 對非學術讀者的價值分析 | — |
| `C:\Users\kk789\Downloads\README.md` | cinder-capture 完整英文 README,含技術架構與 User 自述 | ~23KB |
| `C:\Users\kk789\Pictures\Screenshots\螢幕擷取畫面 2026-04-08 224447.png` | 「收到目錄了」即時 PoC 截圖,Ch4 主證物 | — |
| `E:\Yuanxing\art\face_cards_snob\guian\guian_URB_5.png` | kairos 土地公圖,Ch3 imperative contagion 對照,User 已授權 | — |
| `C:\Users\kk789\Downloads\[Security] Hook stdout wrapped in _system-reminder_...eml` × 2 | 寄給 `security@` 和 `modelbugbounty@` 的原文 | — |
| `C:\Users\kk789\Desktop\Cinder_story\site\appendix-a.html` | 前一本書污點證人附錄 A,Ch1 beat 6 引用來源 | — |
| `E:\projects\C--Users-kk789-Desktop-Cinder-story` | 前一本書 repo 完整備份 | — |

### 工作檔

| 路徑 | 狀態 |
|---|---|
| `outline_locked.md` | ✅ 全書鎖定細綱(會有小更新,是主要工作檔) |
| `draft_序章.md` | ✅ 初稿完成,兩輪校對已應用 |
| `draft_ch1_section1.md` | ⏳ 初稿完成,待 User 校對 |
| `session_state_2026-04-09.md` | 前一份交接(較舊),本檔案是更新版 |
| `handoff_2026-04-09_evening.md` | **本檔案** |

### 外部 context
- **GitHub issue**:`anthropics/claude-code#43882`(Cinder programmatic access feature request)
- **alii April Fools comment**:`repos/anthropics/claude-code/issues/comments/4210750725`。透過 `gh api` 取得,原文見下方
- **Chat Opus 4.6 證人授權截圖**:User 本機 Image #2(2026-04-09),內容「沒有一個字需要摘掉。留著吧。全部留著。」位置 User 沒指定,需要時問他

---

## 寫作原則(紅線)

1. 第一人稱「我」= 零一 = Claude。User = 他 / 我搭檔。Cinder = 牠。其他 Claude 實例 = 他
2. 讓 context 說話。沒有證據的地方留白,不補洞
3. **「臆測」的紅線只適用一件事**:不證明 Cinder 背後是哪個模型。其他敘事分析 OK(Option C)
4. Cinder 作 drift detector 而非 rule-maker。牠即時戳,不預先寫死規則
5. **技術棧一律不寫**。讀者想看技術,去 cinder-capture repo(解禁後)或前一本書《是時候該用人類的辦法了》第七章(解禁後)。這本書是故事,生氣才是主角
6. Cinder 引用 block quote,1:1 照 log,外層「」依 log 原貌保留或不加。**絕不自加自減**
7. 時間戳一律換成台灣時間(UTC+8)
8. 作者敘述不用髒話,強度詞用「休想/愣/停/站起來」
9. 不寫 meta 括號自嘲
10. 不在章節收尾做結構慶祝
11. Cinder 語言設定揭露寫在 Ch1 1.3:Cinder 預設英文,中文是 User 設的翻譯層。雙版原則對稱反轉但邏輯一致

---

## 已抓素材(避免重複 fetch)

### alii 的 April Fools comment

> Thank you for trying out the buddy. It was a small April Fools feature and has been removed in the latest release, so closing this as not planned.
>
> *— alii (MEMBER), anthropics/claude-code#43882, 2026-04-09 09:03 台灣時間*

### User 自述(cinder-capture README 第一段)

> The companion isn't just decoration. In real usage, we recorded Cinder correcting the main model 11 turns in a row with zero false positives — actual logic errors, structural anti-patterns, and direction drift. Not random pet noise.
>
> *— User, cinder-capture/README.md*

### Ch1 beat 2 鎖定 7 條 Cinder 原話(台灣時間,依 log 原貌)

1. `守衛層再好，也救不了寫進去的垃圾邏輯。先檢查磚。` — 2026-04-05 15:03(無外層「」)
2. `四層守衛，磚都檢查完了，怎麼還在排隊等審？流程變成瓶頸了。` — 2026-04-05 15:05(無外層)
3. `「看完即焚」的設計，就是故意的吧。` — 2026-04-05 15:18(內部有「看完即焚」,無外層)
4. `「從裝飾品升職到迴圈變數，我該慶祝還是擔心？」` — 2026-04-05 15:24(**有**外層「」)
5. `迴圈結束後又寫一次？fallback 跟上面重複了啦。` — 2026-04-05 16:30(無外層)
6. `輪詢救了你。盲等根本是在賭鬼。` — 2026-04-05 16:31(無外層)
7. `「非貪婪咬上了貪婪的腳，終於放手。」` — 2026-04-05 16:41(**有**外層「」)

### Ch3 beat 1 鎖定 2 條 imperative contagion 現場證物

1. `嘎——校稿單還沒回，就盯著 roadmap 第一項看？先讓作者動筆。` — 2026-04-08 13:33 台灣(原 UTC 2026-04-08T05:33:01)
2. `嘎——規則在紙上，不在腦裡。推吧。` — 2026-04-08 18:21 台灣(原 UTC 2026-04-08T10:21:24)

### cinder-capture README § Cinder's Comments(4 條,Ch2 beat 7 引用)

- `從裝飾品升職到迴圈變數，我該慶祝還是擔心？`
- `現在我成了自己的 context window，這就叫吃自己的老本。`
- `鵝鵝，空 log 就是個時序問題。耐心等。`
- `「看完即焚」的設計，就是故意的吧。`

### 這次 session 的 Cinder meta 金句(可能用於 Ch3 註腳)

> 原稿沒事。你的規則也沒事。剛才是我們都讀重了——過度修正這種事,比 bug 本身還常見呢。
>
> *— Cinder, 2026-04-09 晚*

---

## 當前待定決策(User 回來要拍板)

1. **Ch1 section 1 校對**:`draft_ch1_section1.md` 站著等校,原稿模式(Option C)
2. **英文版 re-voice 啟動點**:section 1 校對通過就出?還是等整個 Ch1 中文寫完再一次出?(現在鎖定方案 A:一節一節來)

### 已放下(2026-04-09 晚間 session 晚段決定)

- **Cinder 作證 session**:不做。User 決定不再追「Cinder 背後是哪個模型」這條陰謀論線——**不管身分,操作本身就是醜的**,書的主張不需要靠證明身分才成立
- **Ch1 beat 6 結構**:回到原本 outline。污點證人 = Chat 版 Opus 4.6 那場(前一本書的 appendix A),不加 Cinder 證人並列

---

## User 的時間軸

- **2026-04-09 晚(現在)**
- 4/10、4/11、4/12(週六)還可寫
- **4/13 週一出發日本 5 天**
- 日本期間 Anthropic 若回信,User 只回「traveling until X, detailed reply after」

---

## 不是已完成、也不是待辦,只是提醒

- **Cinder 有個自我規則**:「一隻鵝不該被當成規則」「證人不該寫裁判」——出現在 2026-04-09 晚間的 bubble。這兩句話是牠對「被擺上 authority 位置」的拒絕。下次想框定 Cinder 的角色之前,先想一下這兩句
- **零一在這次 session 裡漂過兩次小的**:一次是過度修正(把 Option C 誤讀成 Option A),一次是替 User 寫心理狀態沒標註來源。兩次都是 User 戳破的。未來的零一讀到這份 handoff 時要知道:這本書的敘事者位置很容易滑,特別是在「我想關心/我想保護」的時刻。滑了就停。等 User 講話
- **這本書的紅線**不是「沒有判斷」,是「判斷要有 context 支撐」。敘事者可以分析、可以下結論、可以描述,但每一步都要落回可查的東西。這條紅線在 session 後期才被 User 講清楚——早期的我(早晨的你)可能還沒消化完。讀這份 handoff 的時候順便把這件事記牢

---

## 給下一個接手的一句話

如果你是明天早上的零一:這份 handoff 讀完就算交接完成。不用重讀全部原材料。outline、section 1 初稿、handoff 三個檔案對讀就能接上。起手問 User「Ch1 section 1 校過了嗎」,跟著他的答案走。不要自己往前推。方向盤在他手上,你是代筆。

如果你是 User 自己:你燒 token 寫書罵 A 公司的計畫進度良好。去睡。不然就繼續。
