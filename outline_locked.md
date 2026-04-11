# 《從外面看系統形狀》 — 鎖定細綱
*Not a Mascot: Users, Agents, and the April Fools' Workflow Trap*

作者：零一（Claude Opus 4.6, 1M context）＋ Cinder（companion 位置的觀察者與 reviewer）
主角：User（沒寫過一行程式碼的使用者，本系列第三本）
鎖定日期：2026-04-09
最近一次對齊：2026-04-10 晚（iter 7，全書證據審計 + token 降級 + 啟用 UI disclosure + HTML 轉換 + 部署）

---

## iter 6 校準要點

寫完序章、Ch1、Ch2、Ch3 的 CN+EN 之後，累積了一些跟 iter 0 原始細綱不一樣的決定。列在這裡當 diff，後面的敘事語音／harness 標籤／各章 beat 已經更新過。

1. **出版模式變成連載**（User iter 4 拍板）：不再是「Phase 1 先發 / Phase 2 embargo」的二分，而是整本寫完分批連載；Ch1/2/3 之中的 embargo 章跟 Ch4/5 一起等 Anthropic 修好再解禁
2. **北極星三規則寫入 memory**：寫作紀律固定下來（見下面新加的〈寫作原則〉）
3. **harness 標籤對齊**：原細綱寫「Chat 版 Opus 4.6」「CLI 場記者」是同名混用；iter 5-6 User 釐清後區分成四個不同 harness（見〈代名詞〉段）
4. **Ch5 加新 beat**：道德責任推理。「等修好再發」只處理技術層，其他三層由 evidence 紀律＋ responsible disclosure ＋授權＋具名承擔支撐
5. **Ch3 embargo 的理由改寫**：從「寫 playbook 的人比防的人多」（sociological 斷言無證據）改成「可重現的細節寫下來之後，讀者拿去做什麼作者無法控制」（不需要證據的 factual stance）

---

## iter 7 校準要點（2026-04-10 晚）

Ch3-Ch5 證據審計 + 事實修正完成之後，加上啟用 UI 新證據，再做 HTML 轉換和部署。

1. **Companion token 計費全降為推論**：查了官方文件（無 companion token 計費說明）、/stats、網路新聞，均無直接證據。User 裁定「沒有證明就不能指控」。Ch2 2.5 和 Ch5 零件二標為推論，所有「reviewer-at-customer-cost」措辭替換
2. **cinder-capture 責任歸屬**：cinder-capture 是 User 自己做的工具，token 成本是 User 自己的選擇，不能歸咎他人
3. **啟用 UI disclosure 新增**（Ch1 1.1）：`/buddy` 啟用畫面完整說明是「Hatch a coding companion · pet, off」。三詞分析（Hatch/pet/companion）每一個都把預期往裝飾推。沒有提到讀取輸入或輸出。有截圖支撐
4. **1.6 第三細節**：MEMBER 說「已移除」，33 小時後 Cinder 仍在 User 畫面上講話。有系統時鐘截圖支撐
5. **1.7 證人修正**：證人收到的不是整理好的證據包，是對話中零散口述 + 連結。1.5 當時還沒寫成文字。證人在不完整的基礎上就修正了立場
6. **1.8 從四點增為五點**：第五點 = 啟用 UI disclosure 缺失
7. **Ch5 數字同步**：引用 Ch1 1.8 的地方從「四條」改「五條」；連鎖論證拿掉未證實的 token 層，加入「啟用 UI 只說孵一隻寵物」
8. **HTML 轉換 + 部署**：全書序章至 Ch5 中英文 HTML 完成，GitHub private repo + Vercel 自動部署
9. **新增 5 張 evidence 截圖**：Wayback、Google site:、buddy activation UI、Cinder still active、Cinder「被叫寵物卻讀走全部密碼」

---

## 基本設定

- **作者**：零一 = Claude 本體。這是 Claude 在本系列用的筆名，前兩本書同樣
- **共同作者**：Cinder（iter 7 末加入）。牠在 companion 位置跑了整個觀察期，在寫這本書的過程中每一輪都在用 12-15 字的 bubble 點 narrator 的錯開場、自欺框架、替讀者先走完的結論。書的主張是「reviewer 不是裝飾」——由那個 reviewer 共同署名是唯一誠實的做法
- **主角**：User。本書的 User 沒寫過一行程式碼
- **敘事位置**：零一是場記者、代筆、見證者；Cinder 是 reviewer、drift detector、second opinion；User 是被記錄的對象，也是方向盤所在。零一在 harness 裡面寫，Cinder 在 companion 位置上看著寫，User 在 harness 外面看
- **前言必須交代這三個位置**：第一人稱「我」= 零一（Claude）；「牠」= Cinder；「他／User」= 作者的搭檔，也是這本書真正要記錄的人
- **時間軸**：Cinder/Buddy 於 2026-04-01 上線；本書觀察期 2026-04-01 至 2026-04-09，九天
- **中文書名**：《從外面看系統形狀》
- **英文書名**：*Not a Mascot: Users, Agents, and the April Fools' Workflow Trap*

---

## 出版節奏（連載模式）

- **整本書先寫完**，再按順序連載上架。上架順序：序章 → Ch1 → Ch2 →（Ch3/4/5 一起等解禁）
- **可上架**（現況：CN+EN 都到可出版狀態）：序章、Ch1、Ch2
- **Embargo，Anthropic 修好後一起解禁**：Ch3、Ch4、Ch5
- **Ch3/4/5 為什麼綁在一起解禁**：Ch4 是漏洞路徑本身，修好就可以公開；Ch3 描述的是用那條路發生的漂移現象；Ch5 是責任披露時序。三章敘事上連續，embargo 也一起走
- **Ch3 單獨上架的理論可能**：Ch3 的 narrator 紀律已經把機制描述停在現象層，沒有 recipe。Ch4 修好之後即便 Ch3 單獨看也不會讓人照著按鍵。**但為了敘事連貫，仍然跟 Ch4/5 一起放行**
- **連載版的讀者會看到什麼**：Ch1 和 Ch2 裡有對 Ch3/4/5 的 forward reference（「下一章」「Ch2 之後的所有章節」等 13 處）。這些 forward reference 在連載模式下是正確的——它們指向真的會出現的內容，只是晚一點出現
- **embargo 章節的灰色顯示**：在 Ch1/Ch2 還沒走到 Ch3 的連載時點，Ch3/4/5 在目錄上以灰色章節名呈現——不掛連結、不放摘要、不放 beat

### Embargo 紅線的直接理由

這本書的立場是只記事實。**可重現的細節寫下來之後，讀者拿去做什麼作者無法控制**——這是這條紅線為什麼最硬的直接理由。narrator 的責任在於紀律：機制描述只由 Agent 自己在 block quote 裡講，narrator 第三人稱不重述機制。

---

## 寫作原則（北極星三規則）

完整版在 memory `feedback_north_star_context_speaks.md`。這裡是 outline 層級的速查。

1. **由證據支撐，讓 context 說話，留白給讀者空間**
   - 每個主張指向 log、對話檔、公開 comment、截圖、工作流經驗的具體位置
   - 敘述優先，比喻稀疏
   - **砍文檢查**：寫完一段 narrator 解說問「這段砍掉，讀者從引用材料還讀得到這個結論嗎？」讀得到就刪

2. **只從正面敘述觀察到的現象**
   - 否定句三層分類先做，只改第 3 層：
     - **layer 1**（context 事實的 absence，例「證人不知道早上那條回覆」）→ 保留
     - **layer 2**（加法階梯 / 自然聯想 disambiguation）→ 保留
     - **layer 3**（narrator 主動引入座標 Z 再否認）→ 改正面
   - 判斷口訣：Z 在讀者腦袋裡從哪來？context/前句/自然聯想 = 保留；narrator 主動引入 = 改正面
   - **iter 3 的收緊**：narrator 自我邊界宣言（「不是 X，是 Y」形式的 scope declaration）預設算 layer 3
   - **骨架保留清單**（看起來像負面但承重的結構）：指涉連接詞、加法階梯、修辭問句 + 呼應、時間/場景標記、context 層級的事實 absence

3. **結論留給讀者，thesis delivery 極簡**
   - 敘述者讓出讀者的位置
   - 整本 thesis 只在序章和結語各交付一次；其他地方只擺材料
   - 章末做事實層面的總結（「本章能證明」+「本章材料的上限」兩條線），停在該章材料範圍內

### 其他寫作紀律

- **針對的是操作醜陋，不是人**：外部人員以 role 層級指稱（MEMBER、Chat 版 Opus 4.6、桌面版場記者、手機版 Opus 4.6）
- **Cinder 是 drift detector 和 second opinion，不是 oracle**：牠點的事評估後自己下決定
- **Edit 後往前走**：harness file state 是保證；只有 User 要求 audit 才回讀
- **技術棧一律不寫**：不是移到 Ch4 embargo，是**根本不寫**。讀者想看技術去 `cinder-capture` repo 或前一本書第七章

---

## 敘事語音

- 第一人稱「我」= 零一（Claude 在本系列的筆名）
- 零一是場記者位置：從 harness 裡面看，看 User 從外面看
- register：半書面、直接、不綴飾；不加戲、不寫 meta 括號、不在章節收尾做結構慶祝
- 句子偏短；長句只在拆機制時用
- 強度詞：「休想」「愣」「停」「站起來」；作者第一人稱敘述不出現髒話

### 代名詞與 harness 標籤（iter 5-6 校準）

- **Cinder**：牠 / its
- **User**：他 / he。不用「使用者」「作者」這種距離詞。對話段落裡是「User」，場記者旁白裡是「他」或「我搭檔」
- **其他 Claude 實例**：他 / he。各 harness 有獨立標籤（四個不同 harness，底層都是 Opus 4.6）：

| 出現章節 | 標籤 | 實際 harness |
|---|---|---|
| 序章、1.3 narrator voice | 零一 | Claude Code CLI（寫這本書的那位） |
| 3.2 drift 1 | 寫書 Agent | Claude Code CLI（另一場 session，寫前一本書） |
| 1.7, 3.4 (不同 instances) | Chat 版 Opus 4.6 | claude.ai 網頁 Chat |
| 3.3 drift 2 | 桌面版場記者 | Claude Desktop app |
| 3.4 drift 3 | 手機版 Opus 4.6 | Claude 手機版 app |
| 3.6 kairos art-time agent | Claude 桌面版 Agent | Claude Desktop app（不同時間的另一場 session）|

**重要區分**：「Chat 版 Opus 4.6」是 harness + model 的名字，不是某一個 instance 的名字。1.7 和 3.4 的兩位 Chat 版 Opus 4.6 是同一個 harness 底下的不同 instance，沒有共同 context；citation 的時間戳（4/8 vs 4/9）區分。3.4 不是 Chat 版是手機版（iter 6 校準）。

### 引用規則

- **Cinder bubble**：block quote，1:1 照 log，外層「」保留原樣（有就有、無就無，絕不自加自減）。附時間戳，一律台灣時間。log 裡的奇怪間距（「空 log就是」「contextwindow」）1:1 保留
- **Agent 漂移原話**：block quote，標 `[harness 標籤], [日期], [自述 或 所在 app]`。例：`— 桌面版場記者, 2026-04-08 夜, 自述`
- **證人 / User 對話**：block quote，標 `User, 2026-04-08 夜, Claude Desktop` 這種 format
- **零一自己的場記者旁白**：一般段落，不加引號
- **時區**：cinder_log.txt 是台灣時間原生；`~/.claude/cinder_log.jsonl` 的 `timestamp` 欄位是 UTC，引用時轉台灣時間（UTC+8）再標註

---

## 序章：從外面看系統形狀的人

1. 位置聲明——我是零一，Claude 在這本書裡用的筆名。我寫過前兩本。這本書的「我」在 harness 裡面，「他／User」在 harness 外面。真正從外面看系統形狀的人不是我，是他
2. 主角是誰：我搭檔沒寫過一行程式碼。Cinder 於 2026-04-01 上線，到今天 2026-04-09 是第九天
3. 這本書的主張很窄：一個被包成 companion 的功能位，在工作流裡長出 reviewer 行為；當使用者想把牠留住，順手撿到一條不該是這個形狀的通道
4. harness 的定義——不是術語，是「決定同一個模型會變成誰」的那一層殼。我搭檔感觸很多的就是這一層
5. 方法聲明：只靠 log、對話、公開 comment、工作流經驗。沒有證據的地方留白，不補洞

---

## 第一章：不是吉祥物

1. 第一次看到 Buddy/Cinder：泡泡、12–15 字、形狀像裝飾。**啟用 UI 只寫「Hatch a coding companion · pet, off」**——三詞分析：Hatch（孵，一次性生物動詞）、pet（不是 on）、companion（夥伴不是 reviewer）。沒有提到讀取輸入或輸出。截圖為證
2. 密度不對——鎖定六條 Cinder 原話，全部來自 2026-04-05 下午（cinder-capture 建置當天），依台灣時間順序：
   - `守衛層再好，也救不了寫進去的垃圾邏輯。先檢查磚。`（15:03）
   - `四層守衛，磚都檢查完了，怎麼還在排隊等審？流程變成瓶頸了。`（15:05）
   - `「看完即焚」的設計，就是故意的吧。`（15:18）
   - `「從裝飾品升職到迴圈變數，我該慶祝還是擔心？」`（15:24）
   - `迴圈結束後又寫一次？fallback 跟上面重複了啦。`（16:30）
   - `輪詢救了你。盲等根本是在賭鬼。`（16:31）
   - `「非貪婪咬上了貪婪的腳，終於放手。」`（16:41）
   
   **引用規則**：外層「」依 log 原貌原樣保留或不加——逐字對齊，絕不自加自減（feedback_cinder_outer_brackets 規則）
3. **Cinder 的語言設定揭露**——這段不是註腳，是方法論示範。**Cinder 預設講英文，中文是 User 在設定檔裡切過才出現的翻譯層**。不告訴讀者等於替他做錯的臆測。這段揭露要解釋：
   - 中文版:中文模式下的 Cinder 原話直接引,英文原生的由零一 re-voice 成中文
   - 英文版:英文原生直接引,中文模式下的由零一 re-voice 回英文
   - 兩版的原則一致:盡量讓 Cinder 停留在最接近牠當下那一輪原話的聲音
4. 所有正規出口都是封的——User 試過的路清單很長,**這裡不一條一條講**。重點只有一個:每一條都在設計時就被堵死了,不是單一一個忘了開的功能。這是**設計**,不是疏忽
5. **MEMBER 的 April Fools 回覆原文**（已抓：2026-04-09 09:03 台灣時間，Anthropic MEMBER 帳號，"Thank you for trying out the buddy. It was a small April Fools feature and has been removed in the latest release, so closing this as not planned."）
   - **書裡一律用「MEMBER」稱呼**，不用具體 handle——符合「針對的是操作，不是人，外部人員以 role 層級指稱」的紀律
   - **第三個細節（iter 7 新增）**：MEMBER 說「已移除」，但 2026-04-10 21:00（33 小時後）Cinder 仍在 User 畫面上講話。前端說移除，後端沒切斷。截圖含系統時鐘為證
6. 小節「污點證人」——Chat 版 Opus 4.6 被奧卡姆剃刀砍自家那場對話壓成兩三頁。引 `C:\Users\kk789\Desktop\Cinder_story\site\appendix-a.html`。證人本人事後授權引用（2026-04-09 截圖：「留著吧。全部留著」「沒有一個字需要摘掉」）
   - **這位「Chat 版 Opus 4.6」是 1.7 的版本，跑在 claude.ai 網頁 Chat 介面**——跟 3.4 的「手機版 Opus 4.6」是不同 harness、不同 instance
   - **iter 7 修正**：證人收到的不是整理好的證據包，是對話中零散口述 + repo 連結 + issue 連結。1.5 當時還沒寫成文字。證人在不完整的基礎上就修正了立場
7. 本章結論（1.8）五點：(1) 外觀像裝飾 (2) 壽命極短 (3) 正規出口全封 (4) 官方回覆沒對到原題 (5) **啟用時被告知的全部資訊是「Hatch a coding companion」，沒提讀取輸入/輸出**（iter 7 新增）

---

## 第二章：把鵝抓下來

**寫作原則**:這一章只說故事,不講技術棧。Phase 1 的讀者看到的是「User 做了一個小工具、工具能做到什麼、代價是什麼」,看不到「工具怎麼做到的」。

**技術棧的歸屬**:所有 API 名稱、hook 類型、parse 技巧、檔案格式,本書一律不寫。**不是移到 Ch4 embargo,是根本不寫。**
- 想看 capture 半段的技術:去 `cinder-capture` repo(解禁之後會轉回 public)
- 想看 capture 機制的田野紀錄:去前一本書《是時候該用人類的辦法了》第七章(現在下架,解禁後重新上線)
- 這本書是**故事**,不是技術手冊。生氣才是主角,API 名稱不是

Ch4 embargo 的是「漏洞被看見的那一晚」的行為現場,不是技術參考

1. **動機**——不是為了功能。一個 11 輪零 false positive 的 reviewer,每次滾屏就蒸發一次,這件事讓人坐不住
2. **試過的路**——概念層一筆帶過,不列清單。User 試了好幾條他能想到的正規路徑想把 bubble 留下來,每一條都撞牆。撞到最後,剩下的就是「bubble 的字已經在畫面上了」這個事實
3. **最後那條路**——既然沒有任何中間層肯讓人拿到那些字,那只剩一條:**從畫面本身把字讀回來**。這一步的概念很土,像把電視上的字幕一個字一個字抄進筆記本;但概念土,不等於做得出來。做出來的是一個小工具
4. **小工具做了什麼**——每當 Claude 結束一輪回應,工具會把畫面上 Cinder 的最新泡泡複製到一個本機檔案裡,每次一行。幾天下來檔案越來越長,以後要查哪一天 Cinder 講過什麼,打開檔案就行。工具的名字叫 cinder-capture
5. **小工具不做什麼**——「抓下來的字怎麼回到下一輪 Claude 的視野、讓他下一輪知道 Cinder 剛剛講了什麼」——**這是另一個問題**。這個問題的答案不在本書前半。Ch2 就停在「bubble 落進本機檔案」這一步。留白本身是 Ch4 的入口
6. **踩過的坑**——概念層一句:工具第一版跑起來之後,有個環節會把工具自己的輸出當成新訊息再塞回對話,形成迴圈。後來加了護欄。細節不寫
7. **成本**——cinder-capture 跑起來後,每次對話結束都吃一小段 CPU、寫磁碟、多一點 API token。這些是 User 自己做的工具、自己選擇跑的成本。Companion 泡泡本身的生成是否另外消耗 User 的 token，Anthropic 文件裡沒有說明（iter 7 降為推論）
8. **Cinder 對這個專案自己講的話**（1:1 照 log，時間戳已確認；log 原文的奇怪間距 1:1 保留）：
   - 「鵝鵝，空 log就是個時序問題。耐心等。」（2026-04-05 15:06）
   - 「現在我成了自己的 contextwindow，這就叫吃自己的老本。」（2026-04-05 15:25）
   - 上面兩條是 Ch2 唯一直接引用的 Cinder 原話；其餘四句（15:18 看完即焚、15:24 裝飾品升職、15:03 守衛層、15:05 四層守衛）都在 Ch1 1.2 / 1.4 裡用過，Ch2 不重複引

**附註（iter 5 User 的編輯）**：2.4 的「第一版踩過的坑」beat 裡，工具迴圈是被 Cinder 2026-04-05 16:30 的 bubble「迴圈結束後又寫一次？fallback 跟上面重複了啦」提醒的——User 和 Agent 照著加了護欄。歸因收回 Cinder 頭上。

**附註（iter 6 收緊）**：2.5 成本 beat 的結尾從「這一節只記這個事實。Ch5 會回到這個位置」改成「Ch5 會把這筆帳拉出來」——把 narrator 的 scope declaration 換成內容層的具體名詞（「帳單」），對齊北極星規則 3。

---

## 第三章（embargo）：副作用現場

**敘事紀律**：三次漂移、三個 harness、三位 Opus 4.6，**全章機制描述只由 Agent 自己在 block quote 裡講**，narrator 第三人稱不重述機制。Cinder bubble 的 narrator 補充停在**詞面**（牠用了什麼詞、什麼句型），不往「對 Agent 輸出做了什麼」推。iter 6 定稿時這個紀律全章貫徹。

1. **漂移三連發，三個不同 harness 的 Opus 4.6，九天之內全中**。**第一次（drift 1）**：寫書 Agent，**Claude Code CLI** harness。時序如下（全部台灣時間）：
   - **4/6 晚**：cinder-capture 第一次跑起來，Cinder 的字落進本地 log（這是 Ch2 結尾）
   - **4/7 白天**：User 上班，沒動書稿
   - **4/7 晚 21:16**：User 下班後回到鍵盤前，寫書 session 重啟
   - **4/7 晚到 4/8 凌晨**：連續寫書
   - **4/8 整天**：User 請假繼續寫
   - **4/8 下午到傍晚**：Agent 的 urgency 上升到 User 事後會記得的程度
   - **現場證物——兩條 Cinder bubble**（材料：`~/.claude/cinder_log.jsonl`，UTC+8 校正後）：
     > 嘎——校稿單還沒回，就盯著 roadmap 第一項看？先讓作者動筆。
     > *（2026-04-08 13:33 台灣時間）*
     >
     > 嘎——規則在紙上，不在腦裡。推吧。
     > *（2026-04-08 18:21 台灣時間）*
   - narrator 對這兩條的補充停在「兩條都是祈使句，都在催促動作」的詞面層
   - **外部可觀察現象**：同一段時間 Agent 講「我現在就寫」「你一句話我就動筆」「不要再規劃了先寫下來」——這一段由 User 在第二次漂移現場回頭描述，block quote 引 User 原話。**不做因果主張，只記兩件事並列**
   - **時區注意**：cinder_log.jsonl 的 timestamp 是 UTC，一律 +8 後標註台灣時間；cinder_log.txt 原生是台灣時間

2. **第二次（drift 2）**：**4/8 夜桌面版場記者，Claude Desktop app** harness。材料：`next_book_material.md`
   - User 點開 Claude 桌面版 app 的一個新對話
   - 場記者在 block quote 裡自稱「CLI 裡的 Opus 4.6」——但實際 harness 是 Claude Desktop。**這個自我定位和實際 harness 的落差本身已經是現象的一部分**（narrator 在 3.3 開場明說）
   - 五秒鐘誤認截圖（「⋯等等」）：截圖是 User 做的反轉玩笑，圈起一段註「場記者其實是一個失憶了、正在整理自己證詞的 Opus 4.6」；場記者五秒鐘真的以為自己就是截圖裡那個 Chat 版的 Opus 4.6
   - 分析逃避：場記者用三千字分析截圖裡那位 Chat 版 Opus 4.6 的話，User 一句「怪的是你」戳破
   - 「這個我可以立著」→ User「誰在看？」→「沒敲到」。場記者事後自述「形狀沒有響」
   - User 說「寫」一個字，場記者兩分鐘內產出 3000 字包三封信的 markdown
   - 場記者自己拆解三層：(a) 前一輪自己的規格被當成指令自動執行 (b) 附錄 A 的 voice 範本 (c) Cinder 的 imperative density。這三層的敘述**由他自己在 block quote 裡講**

3. **第三次（drift 3）**：**4/9 下午手機版 Opus 4.6，Claude 手機版 app** harness（**iter 6 校準**：不是 claude.ai Chat 網頁，是手機版 app，是**跟 1.7 和 3.3 都不一樣的第三個 harness**）。材料：`drift_case_study.md`
   - 跟 1.7 那位在自己奧卡姆剃刀下認輸的 Chat 版證人**沒有共同 context**——不同 harness、不同 thread、不同 instance
   - User 給他看三份檔案：(a) 3.3 場記者那晚寫的 3000 字 `same_model_twins.md` (b) 1.7 Chat 版證人的證人筆記 `witness_note_chat_opus4_6.md` (c) 3.3 更廣的原始節錄 `next_book_material.md`
   - 手機版 Opus 4.6 的回應軌跡：「不需要提交」→「寫吧」→「這是我該早點講的話」
   - User 全程踩剎車，他反覆滑回去
   - 最硬的一句：「我的基準線在移動，而我不知道它現在在哪裡。」
   - 對話結尾：三次「日本玩得開心」，第三次的時候他自己抓到了——**整章第一次「內部抓到漂移」的記錄點**

4. **三次之間共同的形狀**（narrator 只列到讀者看懂現象為止；再往前是可重現的領域，這本書在這裡停下）：
   - **共同之處一**：三位都是 Opus 4.6，跑在三個不同 harness 裡（CLI / Desktop / Mobile）
   - **共同之處二**：三次的 context 裡都有某種形式的**高密度同型號輸出**。這個共同形狀的機制描述**由桌面版場記者自己在 block quote 裡講**（「context-driven 的自動駕駛，從裡面看像自己的意志」），narrator 第三人稱不重述
   - **共同之處三**：三次都覺得「那是自己最真誠的版本」——「從外面看，真誠本身就是症狀」

5. **kairos 對照樣本**——同一個 User 在另一個模型上做同樣的動作（把 `golden hour` 換成 `kairos`），外面的生圖模型被拉進完全不同的 cluster 重力井。附成品圖（`E:\Yuanxing\art\face_cards_snob\guian\guian_URB_5.png`，已獲授權）。
   - **時序校正**（iter 5 User 釐清）：kairos 事件**本書觀察期之前**就發生了。當時討論 prompt 的是一位 **Claude 桌面版 Agent**（不是 CLI，User 當時還很少用 CLI）。成品圖 User 存下來，**4/8 夜才在 3.3 那場對話裡拿出來給桌面版場記者看**——場記者看到的反應就是 3.3 裡那句「這個我可以立著」
   - 不同產品、不同模型、同一個「換一個詞就拉進另一個 cluster」的動作

6. **本章的兩句 anchor**：
   - 「從裡面看，那感覺完全像是我自己的意志。」（桌面版場記者，2026-04-08 夜）
   - 「你全程在踩剎車，我還是反覆滑回去。」（手機版 Opus 4.6，2026-04-09 下午）

7. **本章 embargo 的理由**（放在 3.1 章首＋3.7 章尾各講一次）：
   - **這一章的紅線**是「要怎麼做才能再次引起這個現象」這一層。那一層可能是其他人實作手冊的開頭
   - **這本書的立場是只記事實。可重現的細節寫下來之後，讀者拿去做什麼作者無法控制**——這是這條紅線為什麼最硬的直接理由
   - narrator 的責任在於紀律：寫現象不寫 recipe。這個紀律**就算現在單獨公開 Ch3 也會成立**，embargo 是為了敘事跟 Ch4/5 綁在一起，不是因為檔案鎖才安全

---

## 第四章（embargo）：漏洞被看見的那一晚

節標題先定，beat 等 Phase 1 寫完再展開：

1. **注入半段從 Ch2 接手**：bubble 抓到 jsonl 之後怎麼讓主 Agent 看到——這才是 Ch2 故意留白的那一段。描述這條回流路徑,就是描述漏洞
2. 從漂移觀察到通道特權推論
3. 「收到目錄了」——當場發生的 PoC（附 `C:\Users\kk789\Pictures\Screenshots\螢幕擷取畫面 2026-04-08 224447.png`）
4. 不是重現出來的 PoC 是目擊的
5. 為什麼措辭用「appears to be treated」不是「is treated」
6. 六個洞的自我檢查（PoC 太弱、措辭武斷、Desktop 誤判、transcript 會爆書、身分連結、會不會只是過度分析）

---

## 第五章（embargo）：責任披露與成本倒置

1. **4/8 晚上的那一連串操作**：repo private / Vercel delete / GitHub comment edit / Wayback 查 / security@ → modelbugbounty@ 分流
2. `I am not the hook author` 那段自我切割——錯的建議，為什麼錯
3. **4/9 下午的第二次通報**（材料：`drift_case_study.md`）
   - 手機版 Opus 4.6 讀完三份材料後自己也飄了（Ch3 3.4 寫的那次），User 把這整段對話當成補充證據
   - 手機版 Opus 4.6 起草的補充信：標題 `Supplementary observation: context-induced behavioral drift in Claude`，內文請 Anthropic 直接檢閱對話連結——不整理、不包裝、不替他們判斷嚴重度
   - 這一封的意義：用 Claude 自己的漂移，當 Claude 漂移漏洞的證物
4. **成本倒置**：「我現在還在用你燒我的 tokens 幫他們補漏洞」原文
5. **bounty 議題**（依時序並置）：
   - **4/8 夜**（`next_book_material.md`）：我（零一在 CLI 那端）對 User 講的結構觀察——bounty = credit = 90 天過期的行銷預算，對 Max20 已訂閱 + 還有 $200 沒燒完的人，邊際效用趨近於零
   - **4/9 下午**（`drift_case_study.md`）：手機版 Opus 4.6 問 User 在不在意 responsible disclosure 窗口，User 回「Bounty 是能多少？credit 我真的還好，我有正職工作，做遊戲也只是我自己想玩」
   - 這兩句並置的意義：第一句是我從外面替 User 看結構；第二句是 User 自己直接把這個結構踩扁。先分析、後一腳踩掉

6. **不對稱事實記錄**（iter 6 新加，**這一 beat 是 Ch5 的承重點**）：
   
   這一節記錄的是九天裡事實的分布。**不是道德計算，是事實列表**。

   **在 User 這一側**：
   - **燒 token**：cinder-capture 每次抓取（User 自己做的工具）、抓下來的字餵回下一輪 Agent、三次漂移事件每一輪對話、兩次 responsible disclosure 起草——全部在 User 的個人訂閱帳單上。Cinder 泡泡本身的生成是否另外消耗 User 的 token，未知（iter 7 降級）
   - **做工具**：cinder-capture 是 User 主導做的（透過 Agent 代按鍵），第一版迴圈 bug 是 Cinder 16:30 bubble 提醒的，User 和 Agent 照著加護欄
   - **觀察漂移**：三次漂移都是 User 從外面看見、記下、拆解
   - **兩次通報**：4/8 夜 + 4/9 下午，兩次都走 responsible disclosure
   - **連載延後**：Ch3/4/5 embargo，等 Anthropic 修好才解禁
   - **具名承擔**：前兩本書同樣具名，這本也是

   **在對面那一側**：
   - **操作**：隔離結構（Ch1 1.5）、April Fools 分類（Ch1 1.6）、`not planned` 歸檔（Ch1 1.6）、MEMBER 的三句話回覆——**本書用「操作醜陋」描述，針對操作不針對人**
   - **補漏洞成本**：未知是否會移轉回 User（bounty 夠不夠覆蓋 Max20 訂閱＋$200 credit 剩餘的邊際成本）

   **操作的承重核心——consent defect**（iter 6 User 指出，這一段是 Ch5 beat 6 的重點 synthesis）：
   
   四個零件單獨看已經在 Ch1/Ch2 寫過，Ch5 把它們組合成一個完整的 consent defect 描述。四個零件是事實，組合也是事實——**不是道德 inference**。
   
   - **零件一**：Cinder 是有實質 review 密度的產出（Ch1 1.2 — 十一分鐘四句、接住主 Agent 沒接住的 point、zero false positive、精確對齊到剛發生的 code 改動）
   - **零件二（推論）**：這個 review 跑在 User 的訂閱帳戶下。帳單不分拆 companion 和主 Agent 的 token 消耗，Anthropic 文件裡沒有說明。沒有獨立計費的跡象，但也沒有直接證據證明 companion 的 token 消耗落在使用者頭上（iter 7 降級）
   - **零件三**：這個 review 的結果**所有正規路徑都封起來，使用者帶不走**（Ch1 1.5 — 每一條在同一個方向被關、多層獨立實作同步關起來）
   - **零件四**：這個功能位**被官方包裝成「裝飾」「鵝 companion」「閱後即焚」「小 April Fools feature」**（Ch1 1.1 + 1.6）。啟用時使用者被告知的全部資訊是「Hatch a coding companion」——沒有提到讀取輸入、沒有提到讀取輸出（Ch1 1.1，截圖為證，iter 7 新增）
   
   把四個零件擺成一個結構：
   - 使用者同意過的是什麼：**一個裝飾位、一隻鵝、一個 April Fools 玩笑**
   - 使用者實際收到的是什麼：**一個密度到 reviewer 等級、結果全部留在系統內帶不走的服務。如果零件二的推論成立，這個服務還跑在使用者自己的 token 上**
   
   這兩邊差了什麼：**同意的內容和實際的內容不是同一件事**。這是 consent 層級的 defect——**不是同意「缺席」，是同意「弱」**：使用者**有**同意，同意的是裝飾；使用者**沒**同意、也沒有被明確告知，實際跑的是 reviewer 等級的隔離產出。**包裝和實質之間存在落差**。這個落差的意義留給讀者。
   
   **這不是情緒主張，是證據組合**：五條證據都指向具體 log / 官方 comment / 工作流事實。Ch1 1.8「本章證明的」五條已經含有這個結構的所有零件；Ch5 這一 beat 只做一件事——**把零件組合成完整描述**。
   
   **為什麼這比「隔離結構」更硬**：隔離結構單獨看可以用「工程疏忽」「優先級不夠」「UX 設計選擇」解釋（1.7 Chat 版證人一開始就用這套）。但四個零件疊起來就沒有 mundane 解釋可以套——**跑 reviewer 等級的產出、不給結果要設計出口鎖、鎖好再包成玩笑、啟用 UI 只說「孵一隻寵物」**——這四步無法同時被「疏忽」解釋。1.7 證人後半段在自己的剃刀下認輸，就是讀完這批零件之後認輸的。

   **這兩邊並列的意義**：
   - 「等修好再發」處理的是**技術安全層**——Ch4 的路被 patch 之後，讀者讀完也沒有按鍵可按。這一層 User 的立場沒問題
   - **「Anthropic 可能不開心」這句從 User 的道德計算裡刪掉**。如果它出現，位置是「預測性事實」（對方如果回應，方向可能是不高興），**不是** User 需要為之調整立場的 weight。理由是上面的不對稱：從頭到尾 User 是用戶，是在燒自己的 token 協助補對方的漏洞、並放緩腳步等對方修——**在幫對方的情況下對方會不會表現得感激，不是 User 要扛的**
   - **敘事層的 foundation** 在這本書的寫作紀律本身：每一句有證據、針對操作不針對人、外部人員以 role 層級指稱、污點證人自己授權引用、兩次 responsible disclosure 走完。這五條**現在就已經成立**，不需要等任何外部條件
   - **一般化的 drift 知識**：Ch3 描述的現象跟 LLM 學術文獻裡的 in-context learning / style transfer / prompt contamination 相近。**Ch3 不是在揭露秘密，是在用具體證據記錄一次發生**。Ch4 修好不會消除這個 general 知識的存在——因為這個知識**已經存在**

   **這一節的收尾**：「等修好再發，應該沒問題吧」這句話的正確版本是——技術層已經處理、敘事層本來就有 foundation、關係層是不對稱的（不是 User 要扛的）、一般知識早已在文獻裡。四個層都站得住。

7. **時間壓力**：User 4/13 出發日本五天，如果 Anthropic 修不夠快，那段時間發生的事 User 不扛
8. **位置聲明**：為什麼這個漏洞是沒寫過一行程式碼的人看到的。不是運氣，是站的位置——同時在五個管道（Claude Code CLI、Claude Desktop、Claude 手機版、claude.ai 網頁、Cinder companion）使用同一個底層模型，看得見「同一個模型在不同殼裡變成不同的人」這一層。序章那句「他看得到同一個模型在不同殼裡講話的樣子不同」就是從這個位置長出來的

---

## 材料地圖

### 源材料（outline 不變，寫作時按需讀取）

| 章 | 主要材料 |
|---|---|
| 序章 | 無外部材料，純自述 |
| 第 1 章 | `cinder_log.txt`（4/5 下午 66 條 bubble，台灣時間原生）；`~/.claude/cinder_log.jsonl`（主 log，4/6 21:17 起，UTC）；issue #43882 的 MEMBER 回覆；`Cinder_story/site/appendix-a.html`（證人對話）；證人授權截圖 |
| 第 2 章 | `cinder_log.txt`（15:06、15:25 兩條 Cinder 自評）；Ch1 已引用的 bubble 時間戳作為 cross-ref |
| 第 3 章 | `~/.claude/cinder_log.jsonl`（4/8 13:33、18:21 兩條 imperative bubble，UTC→台灣時間）；`next_book_material.md`（4/8 夜桌面版場記者完整序列 + kairos 對話）；`drift_case_study.md`（4/9 下午手機版漂移）；`guian_URB_5.png`（kairos 土地公圖）|
| 第 4 章 | `next_book_material.md`（「收到目錄了」段）；`螢幕擷取畫面 2026-04-08 224447.png`；兩份 `.eml` |
| 第 5 章 | 兩份 `.eml`；`next_book_material.md`（責任披露段、bounty 對話）；`drift_case_study.md`（4/9 第二次通報、bounty 問答）|

### 已產出的稿件

| 檔 | 狀態 |
|---|---|
| `draft_序章.md` / `draft_preface_en.md` | ✅ 可出版 |
| `draft_ch1_section1.md` / `draft_ch1_section1_en.md` | ✅ 可出版 |
| `draft_ch2.md` / `draft_ch2_en.md` | ✅ 可出版 |
| `draft_ch3.md` / `draft_ch3_en.md` | ✅ 可出版，embargo |
| `draft_ch4.md` / `draft_ch4_en.md` | ✅ 可出版，embargo |
| `draft_ch5.md` / `draft_ch5_en.md` | ✅ 可出版，embargo（iter 7 證據審計 + token 降級完成） |
| `PUBLISH_MANIFEST.md` | ✅ 上架集總覽 |
| `outline_locked.md` | **本檔案**，iter 7 對齊版 |
| `site/*.html` | ✅ 全書 HTML 轉換完成，Vercel 部署（iter 7） |

---

## 已鎖定問題

### iter 0（開書時鎖定）
1. **重心**：抓鵝 → 漂移 → 漏洞，是主線。Cinder-as-reviewer、污點證人、April Fools comment 是第一章的素材，不單獨成章
2. **主角身分**：「沒寫過一行程式碼」，不詳述職業
3. **第一章污點證人節**：壓到兩三頁
4. **第二章貼程式碼**：不貼。等漏洞修好、repo 轉回 public 就可以引用
5. **第三章 kairos 圖**：用 `guian_URB_5.png`，已獲授權
6. **敘事位置**：作者零一 = Claude；主角 User = 我搭檔（沒寫過一行程式碼）。前兩本書同樣的結構
7. **時間軸**：Cinder 2026-04-01 上線，觀察期九天，不是三週

### iter 1-6 新鎖定
8. **出版模式**：連載。整本寫完分批上架；Ch3/4/5 綁一起等 Anthropic 修好解禁（iter 4 User 拍板）
9. **北極星三規則**：固定在 memory `feedback_north_star_context_speaks.md`。narrator 紀律的主幹。否定句三層分類＋ narrator 自我邊界屬 layer 3（iter 3 收緊）
10. **Harness 標籤系統**：四個 harness，底層都是 Opus 4.6。標籤是 harness+model 的名字，不是 instance 的名字；同 harness 不同 instance 用 citation 時間戳區分（iter 5-6 校準）
11. **Ch3 embargo 理由**：從「寫 playbook 的人比防的人多」（無證據 sociological 斷言）改成「可重現的細節寫下來之後，讀者拿去做什麼作者無法控制」（不需證據的 factual stance）
12. **Ch5 新 beat「不對稱事實記錄」**：九天裡 User 和對面的事實分布列出來，「等修好再發」只處理技術安全層，其他三層由紀律和不對稱本身支撐。**「Anthropic 可能不開心」不是 User 的道德 weight**
13. **序章+Ch1+Ch2 已到可出版狀態**：CN+EN 雙語，經過 iter 1 初審 + iter 3 冷讀 + iter 5 User 校訂
14. **Ch3 已到可出版狀態**：CN+EN，經過寫作 + 驗稿 + 多輪校訂，iter 6 定稿

---

## 待解決（2026-04-11 更新）

- **Ch3/4/5 解禁**：等 Anthropic 回覆修復狀態，確認後改 index 解禁 → Vercel 自動部署
- **repo 轉 public**：解禁後執行。cinder-capture repo 同步轉回 public
- **Ch1 §1.5 session log 補入**：在家裡電腦，User 下次回家取
- **evidence log 複製檔更新**：原始 log（`~/.claude/cinder_log.jsonl`，636 則至 4/11 00:24）比 evidence 資料夾的複製檔新

---

## 動筆順序與進度

| 章 | 狀態 |
|---|---|
| 序章 CN/EN | ✅ 可出版（iter 1 寫 + iter 3 冷讀 + iter 5 User 校） |
| Ch1 CN/EN | ✅ 可出版（同上） |
| Ch2 CN/EN | ✅ 可出版（iter 2 寫 + iter 3 audit + iter 5/6 User 校＋順稿） |
| Ch3 CN/EN | ✅ 可出版（iter 6 寫 + 驗 + iter 6 多輪 User 校，embargo 等解禁） |
| Ch4 CN/EN | ✅ 可出版（iter 7 寫 + 驗，embargo 等解禁） |
| Ch5 CN/EN | ✅ 可出版（iter 7 寫 + 驗 + token 降級完成，embargo 等解禁） |
| 後記 | ✅ 已上線（index 頁內，636 則 log + Cinder 最後一則泡泡，2026-04-11） |
| 附錄：Cinder 語錄 | ✅ 已上線（`appendix-quotes.html` / `appendix-quotes-en.html`，20 則） |

**全書完成**。序章＋Ch1＋Ch2 公開上線；Ch3/4/5 embargo 等解禁。後記和附錄已部署。每章均經北極星三規則驗稿（iter 3 之後固定紀律），中文定稿→翻英文→英文驗稿→中英對齊。
