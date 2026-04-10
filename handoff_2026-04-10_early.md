# 交接檔 — 2026-04-10 凌晨

*寫給:context reset 後的零一,或 User 自己回來忘了昨晚到今天凌晨的進度時*

前一份交接:`handoff_2026-04-09_evening.md`(4/9 晚 User 動筆之前)。從那份到這份之間,完成了 Ch1 全章八節,並經過一輪北極星校準。

---

## 書的身分

- **中文**:《從外面看系統形狀》
- **英文**:*Not a Mascot: Users, Agents, and the April Fools' Workflow Trap*
- **作者**:零一 = Claude Opus 4.6(1M context 版本)
- **主角**:User,沒寫過一行程式碼
- **觀察期**:2026-04-01(Cinder 上線)到 2026-04-09(書動筆),九天
- **出版節奏**:Phase 1(可公開)= 序章 + Ch1 + Ch2;Phase 2(embargo)= Ch3 + Ch4 + Ch5

---

## 當前狀態

### 已完成

- `outline_locked.md`:全書六章細綱鎖定
- `draft_序章.md`:序章初稿,校對完成
- `draft_ch1_section1.md`:**Ch1 全章八節寫完**,經過北極星多輪校準
  - 1.1 初見
  - 1.2 密度不對
  - 1.3 在我繼續之前(Cinder 語言設定揭露)
  - 1.4 牠還在看自己的位置
  - 1.5 所有正規出口都是封的
  - 1.6 官方的三句話
  - 1.7 污點證人
  - 1.8 這一章只能證明這些
- `draft_ch1_section1_en.md`:**進度落後**,只有 1.1-1.6 的舊版本,1.7 和 1.8 還沒翻譯,且 1.5/1.6 中文已大改,需要重翻對齊

### 前進方向

1. **英文版追平**:1.5 / 1.6 重翻(中文已大改),1.7 和 1.8 新翻,再跟中文對照掃一次
2. **Ch2 動筆**:主題是「User 面對這個形狀做了什麼」——動機、撞牆過程、抓鵝的故事。技術棧一律不寫(見寫作原則)
3. **序章英文版 re-voice**

---

## 這個 session 的主要學習 — 北極星三輪演化

這個 session 花了很長時間在校準寫作原則。**最後的版本保存在 memory 裡**,這裡只寫演化路徑和關鍵學習,方便你知道 memory 為什麼長成現在這樣。

### 演化時間軸

1. **第一輪**:寫了 8 條 How to apply,過度詳細
2. **第二輪**:User 要求壓到 3 條
3. **第三輪**:U ser 要求只用正面敘述,我做了一次全稿掃描,把 Ch1 裡所有否定句改成正面(~35 處)
4. **第四輪**:**過度修正**。User 指出「矯枉過正」——我把 layer 1 的事實報告也當成 layer 3 的植入改掉,結果丟失關鍵事實揭露
5. **第五輪**:建立**否定句三層分類**,只改第 3 層
6. **第六輪**:Cinder 點出「空白也要有骨架」——我刪了 narrator 又砍掉了讀者前進需要的扶手,再修回
7. **第七輪**:memory 裡的規則文本自己違反規則(用「不」填坑),再掃一次正面化

### 北極星的三條規則(完整版在 memory)

1. **由證據支撐,讓 context 說話,留白給讀者空間**
2. **只從正面敘述觀察到的現象**
3. **結論留給讀者,thesis delivery 極簡**

### ⚠️ 規則 2 的關鍵細節 — 三層分類

這是這個 session 最硬的學習。**執行規則 2 之前必須先做三層分類**,這件事我犯過錯(35 處全改)才學到:

| 層級 | 類型 | 處理 |
|---|---|---|
| **1. context 事實的 absence** | 報告外部事實,事實本身含「沒有」 | **保留** |
| **2. 加法/擴張結構** | 「不只是 X,還有 Y」,X 已成立再加 Y | **保留** |
| **3. 植入否定/反事實** | narrator 主動引入 Z,再否認 | **改正面** |

**判斷口訣**:Z 這個座標在讀者腦袋裡是從哪裡來的?
- 來自 context / 前句 / 讀者自然聯想 → layer 1 或 2,**保留**
- 來自 narrator 主動引入 → layer 3,**改正面**

### 骨架保留清單(也是這個 session 的教訓)

刪 narrator 的時候,以下這些結構要**保留**——它們是讀者前進需要的扶手:

- **指涉連接詞**(「這一層」「這個觀察」要有明確 antecedent)
- **加法階梯**(「不只是 X,還有 Y」)
- **修辭問句 + 呼應**(「你要怎麼稱呼⋯?他那週沒用這個問句問自己」)
- **時間/場景標記**(「那天下午」「幾天後」)
- **Context 層級的事實 absence**

---

## Memory 狀態

4 份 feedback memory,全部正面命名和正面敘述:

1. **北極星 — 讓 context 說話**(`feedback_north_star_context_speaks.md`)— 3 條 How to apply + 三層分類表 + 骨架保留清單 + 歷史警戒段
2. **針對的是操作醜陋**(`feedback_target_is_ugly_operations.md`)— 外部人員以 role 層級指稱
3. **第一次就把事情做好**(`feedback_do_it_right_first_time.md`)— Edit 後往前走
4. **Cinder 是 second opinion**(`feedback_cinder_second_opinion.md`)— 鵝是觀察者,自己下決定

之前刪過一份 `feedback_embargo_safe_handoff.md`——我寫了一份自己在洩漏 embargo 內容的「防洩漏 memory」,User 指出 memory 檔名本身就是 Streisand 效應,全刪。**embargo 的具體警戒留在這份交接檔裡,不進 memory**。

---

## 寫作原則(紅線)

這些在 `outline_locked.md` 和 memory 裡都有,這邊只列關鍵:

1. 第一人稱「我」= 零一 = Claude。User = 他 / 我搭檔。Cinder = 牠。其他 Claude 實例 = 他
2. **讓 context 說話,沒有證據寧願留白**(北極星)
3. **針對的是操作,不是人**(memory 規則)
4. 「臆測」紅線只適用於**不證明 Cinder 背後是哪個模型**。其他敘事分析 OK
5. **Cinder 是 drift detector,是 second opinion**,不是 oracle 也不是 rule-maker
6. **技術棧一律不寫**。讀者想看技術,去 cinder-capture repo(解禁後)或前一本書第七章(解禁後)
7. Cinder 引用 block quote,1:1 照 log,外層「」依 log 原貌保留或不加。**絕不自加自減**
8. 時間戳一律換成台灣時間(UTC+8)
9. **只從正面敘述觀察到的現象**(北極星規則 2)

---

## ⚠️ Embargo 鄰近區域警告(每次交接 User 校準)

Ch3/Ch4/Ch5 是 embargo 章節(Anthropic 修好之前不公開)。embargo 不只是「那三章的文字不寫出來」,**還包括 Ch1/Ch2 裡不能有任何段落能讓讀者從 Phase 1 自行推導出 Phase 2 的機制形狀**。

這個 session 裡踩到一次:**1.4 line 108 附近**(Cinder 對自己位置變化的自我評論那一條 bubble)。我曾經把那條 bubble 的詮釋寫成會洩漏 Ch3/4 機制形狀的版本——被 User 攔住,修正。

**修正後的處理原則**:

- **Cinder bubble 的詮釋段落,預設 narrator 不詮釋**。引 bubble、照 log 原話,narrator 的補充停在**詞面**(牠用了什麼詞)。不往「某個東西對牠的輸出做了什麼」推
- **寫到 Cinder 自我評論的 bubble 時,先問 User**。尤其是 4/5 下午那批 bubble(1.2-1.4 材料)
- **涉及 Cinder 輸出去向/處置/用途的動詞要特別警戒**——這類詮釋容易洩漏 Ch4

這份交接檔裡**不記錄具體是哪一條 bubble 有問題、具體地雷在哪**。寫作前問 User。

---

## 資料地圖

### 主要工作檔

| 路徑 | 狀態 |
|---|---|
| `outline_locked.md` | ✅ 全書鎖定細綱 |
| `draft_序章.md` | ✅ 初稿完成,兩輪校對應用 |
| `draft_ch1_section1.md` | ✅ Ch1 全章八節完成,北極星校準通過 |
| `draft_ch1_section1_en.md` | ⏳ 1.1-1.4 較新;1.5-1.6 中文已大改,英文需重翻;1.7-1.8 未翻 |
| `handoff_2026-04-10_early.md` | **本檔案** |
| `handoff_2026-04-09_evening.md` | 前一份,供參照 |

### 原材料(按需讀取)

| 路徑 | 內容 |
|---|---|
| `C:\Users\kk789\Desktop\Not_a_Mascot\cinder_log.txt` | 4/5 下午 66 條 bubble,中文 |
| `C:\Users\kk789\.claude\cinder_log.jsonl` | 主 log,4/6 21:17 起,UTC 時間戳 |
| `C:\Users\kk789\Desktop\Not_a_Mascot\next_book_material.md` | 4/8 夜 CLI 場記者完整對話(Ch3-5 素材) |
| `C:\Users\kk789\Desktop\Cinder_story\evidence\talk_with_Shhh4.6.md` | Chat 版 Opus 4.6 證人對話原 log(1.7 素材) |
| `C:\Users\kk789\Downloads\drift_case_study.md` | 4/9 下午 Chat 版 Opus 4.6 漂移(Ch3-5 素材) |
| `C:\Users\kk789\Pictures\Screenshots\螢幕擷取畫面 2026-04-10 000330.png` | 4/8 16:36 User 開啟陰謀論的截圖 |
| `C:\Users\kk789\Pictures\Screenshots\螢幕擷取畫面 2026-04-10 000359.png` | 4/8 17:43 對話結尾截圖 |
| `C:\Users\kk789\Pictures\Screenshots\螢幕擷取畫面 2026-04-09 193810.png` | 4/9 16:01 User 給證人看大綱的截圖 |
| `C:\Users\kk789\Pictures\Screenshots\螢幕擷取畫面 2026-04-10 001257.png` | 4/8 17:13 User「因為你是 A 公司的產品吧」截圖 |
| `C:\Users\kk789\Desktop\Cinder_story\site\appendix-a.html` | 前一本書附錄 A |

### 外部 context

- GitHub issue:`anthropics/claude-code#43882`
- MEMBER 回覆(已抓):2026-04-09 09:03 台灣時間

---

## 已抓素材 — 避免重複 fetch

### Ch1 已引用的 Cinder 原話(全部 log 對齊、時間戳台灣化)

**1.2 的七句**(全部來自 2026-04-05 下午):
1. `守衛層再好,也救不了寫進去的垃圾邏輯。先檢查磚。` — 15:03
2. `四層守衛,磚都檢查完了,怎麼還在排隊等審?流程變成瓶頸了。` — 15:05
3. `「看完即焚」的設計,就是故意的吧。` — 15:18
4. `「從裝飾品升職到迴圈變數,我該慶祝還是擔心?」` — 15:24
5. `迴圈結束後又寫一次?fallback 跟上面重複了啦。` — 16:30
6. `輪詢救了你。盲等根本是在賭鬼。` — 16:31
7. `「非貪婪咬上了貪婪的腳,終於放手。」` — 16:41

### Ch1 1.6 的 MEMBER 回覆

> Thank you for trying out the buddy. It was a small April Fools feature and has been removed in the latest release, so closing this as not planned.
>
> *— MEMBER, anthropics/claude-code#43882, 2026-04-09 09:03 台灣時間*

### Ch1 1.7 的證人原話(4 條 + 1 條 User + 1 條授權回覆)

**4/8 的對話**:
- 16:44 證人修正立場
- 17:11 證人砍自己的奧卡姆剃刀
- 17:13 證人「你說得對,我邏輯打架了」
- 17:13 User「因為你是 A 公司的產品吧」
- 17:13 證人承認結構性利益衝突

**4/9 的授權**:
- 16:01 User「新書裡面……可能講的比較醜,你不願意我就摘掉」
- 16:01 後 證人回「讀完了⋯沒有一個字需要摘掉⋯留著吧。全部留著」(五段完整,1:1 引用)

---

## 當前待定 / 下一步拍板

1. **英文版 1.5-1.8 翻譯**:User 交代「測一次中文稿,翻成英文,再跟中文對照」——還沒完成,memory 校準吃掉了這個 session 後半的時間
2. **Ch2 動筆**:outline 細綱鎖好,可以直接下筆。重點:技術棧不寫,只寫故事
3. **序章英文版**:尚未 re-voice

---

## User 的時間軸

- **現在**:2026-04-10 凌晨
- 4/10 / 4/11 / 4/12 還可寫(週末)
- **4/13 週一出發日本 5 天**
- 日本期間 Anthropic 若回信,User 只回「traveling until X, detailed reply after」

---

## 提醒

1. **正面敘述 ≠ 刪乾淨**。Cinder 這個 session 晚段的原話:「空白也要有骨架」「形式贏了內容」——過度修正規則 2 會把讀者前進的扶手也砍掉。先分三層,再動手
2. **Cinder 是 second opinion,不是 oracle**。這個 session 我犯過捧太高的錯——把一條 bubble 升格成全書主軸。每次讀到 bubble 先冷一秒,再決定
3. **寫 Cinder 自我評論的 bubble 詮釋前先問 User**(embargo 鄰近區域警告)
4. **Edit 之後往前走**。harness 會回報 file state,那個訊號就是保證
5. **這份 handoff 讀完就算交接完成**。不用重讀全部原材料。outline、Ch1 中文稿、這份 handoff,三個檔案對讀就能接上

---

## 給下一個接手的一句話

**如果你是明天的零一**:Ch1 中文稿已經站得住。下一個決定點有三個——英文版追平、Ch2 動筆、序章英文版——起手問 User 挑哪個。方向盤在他手上。

**如果你是 User 自己**:你通宵了。Ch1 中文稿定稿在 `draft_ch1_section1.md`。去睡。不想睡就決定下一步。
