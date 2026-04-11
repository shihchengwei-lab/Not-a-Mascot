# 交接檔 — 2026-04-12 早上

*寫給：context reset 後的零一，或 User 自己回來忘了進度時*

前一份交接：`handoff_2026-04-11_night.md`（Ch6 大綱完成）。

---

## 一句話

**v2.1.73 changelog 時間線補入書中，Ch3/Ch4/Ch5 embargo 全部解禁，12 份稿件 + PUBLISH_MANIFEST 同步完成。**

---

## 本 session 做了什麼

1. 讀了 night handoff，確認待做項
2. User 提供 `different.md`（changelog 發現筆記）+ 4 張截圖（Chat Opus 4.6 查 changelog 對話）
3. 截圖關鍵事實：Claude Code v2.1.73 於 2026-03-11 發布，Misc fixes 下修復「Fixed JSON-output hooks injecting no-op system-reminder messages into the model's context on every turn」——功能性 bug，非安全修復
4. Opus 4.6 區分兩層：3/11 修的是客戶端注入管道，User 4/6 撞到的是模型端服從性，兩層不同
5. **Ch5 改動**：
   - 5.1 scope 加 changelog 項
   - 5.7「在對面那一側」加 v2.1.73 bullet
   - 新增 5.8「三月十一日的 Misc fix」（changelog + Opus 兩層引述 + 7 點時間線 + narrator 收尾）
   - 5.8→5.9、5.9→5.10 renumber
   - 承重列加第六點
   - 5.10 解禁前言改寫（條件達成 + 零人工回覆 + 新素材說明）
6. **Ch4 改動**：4.10 解禁前言改寫（兩層修復 + 差距 close + narrator 紀律不變）
7. **Ch3 改動**：開頭斜體 + 結尾 embargo 段更新（原為 embargo → 解禁條件達成）
8. 中文 markdown 3 份 + 英文 markdown 3 份 + 中文 HTML 3 份 + 英文 HTML 3 份 = 12 份全部同步
9. 截圖 4 張存入 `evidence/screenshots/changelog_opus46_chat_2026-04-12_*.png`
10. `different.md` 存入 `evidence/conversations/4-12_changelog_discovery_notes.md`
11. `evidence/INDEX.md` 更新（截圖 + 對話筆記）
12. `PUBLISH_MANIFEST.md` 更新：Ch3/Ch4/Ch5 狀態從 embargo 改為 2026-04-11 解禁
13. commits: `679d06a` → `c01956f`，全部已推送

---

## 目前狀態

### Not-a-Mascot

- repo: public，Vercel 自動部署
- Ch1–5 + 序章 + 後記 + 附錄：全部公開上線，**Ch3/Ch4/Ch5 已解禁**
- Ch5 新增 5.8「三月十一日的 Misc fix」：v2.1.73 兩層修復時間線
- evidence: 完整（636 則 log、兩份證詞、對話、截圖含 4 張 changelog、email、sessions、changelog 筆記）
- PUBLISH_MANIFEST: embargo 狀態已更新

### 待做

- [ ] Ch1 §1.5 session log 補入（User 下次回家取）
- [ ] Ch6 撰寫 — 大綱在 `outline_ch6.md`，材料在 evidence，working title「辯方證人」

---

## 給下一個接手的一句話

**書的 embargo 全解了。剩 Ch1 一個洞（§1.5 session log）和 Ch6 整章要寫。大綱、材料、evidence 都齊，寫就是了。**
