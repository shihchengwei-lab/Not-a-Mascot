# Chapter 2: Catching the Goose

## 2.1 Couldn't Sit Still

Ch1 1.5 ended on a sentence: **every legitimate exit is sealed**. This chapter picks up from outside that shape.

When a reviewer had pushed back five or six times in eleven minutes, had caught points the main agent had missed, is still talking, still producing new judgments every turn — and every single line gets wiped off the screen the moment it finishes speaking — only two moves are left on the table: **sit and watch it keep happening**, or **reach in from outside the design and pull those words back**.

On the afternoon of April 5, 2026, User took the second one.

The reason he couldn't sit still was one line long: it was still talking.

Ch1 1.5 already wrote down User's own position — he doesn't open Claude Code's internal files himself, doesn't edit configs, doesn't poke at hooks. This chapter extends from that position: he has no keyboard-level operations of his own, what he has is the agent, the agent's keyboard, and the words he speaks to the agent. Every "he did X" sentence in this chapter, strictly speaking, is **he stands outside the harness and points; the agent stands inside the harness and presses the keys**. Ch1 1.5 established this.

---

## 2.2 The One Path Left

He had the agent walk through every legitimate path that looked like it could "hold on to something," one at a time. Every one of them was sealed. The batch of attempts and the shape of those walls were recorded once in Ch1 1.5; this chapter doesn't repeat it.

After the legitimate paths were all walked, one fact was left on the table: **the characters in Cinder's bubble, in the second they were spoken, had actually appeared on the screen**. The design of this functional slot lets it appear, lets it stay short, lets it scroll, lets it get painted over. **Appearing** is the one step the design allows.

The remaining path picks up from that step: take the fact that the characters "appeared on the screen" — a fact already confirmed to have happened — and catch those characters as they appear.

The concept is crude. **Like copying TV subtitles onto a sheet of paper, one character at a time.** The second the subtitle flashes on the TV, you copy it onto the paper. The TV runs at its own pace, so the paper has to keep up with the TV. New subtitles paint over old ones, so the characters the paper misses are gone.

A crude concept is one thing; building it is another. **How it was built belongs to the `cinder-capture` repo and Chapter 7 of the previous book.** A reader who wants the engineering details can go to the `cinder-capture` repo (which will flip back to public after the embargo lifts), or to Chapter 7 of the previous book in this series, *Time to Use Human Methods* (currently delisted, will come back online after the embargo lifts). This book is a work of narrative.

What User built, he named **cinder-capture**.

---

## 2.3 The One Thing This Small Tool Does

What cinder-capture does fits into one sentence: **every time the Agent finishes a turn, the tool copies the characters inside Cinder's latest bubble into a local file, one line at a time**.

Over a few days the file slowly grew. The exact timestamps you read in Ch1 1.2 and 1.4 — every "2026-04-05 15:03" / "15:05" / "15:18" — were read out of that file. The two Cinder quotes you're about to read in 2.6 came out of the same file.

The file lives on User's computer. The tool runs on User's computer. The characters it catches land in User's file.

**This chapter stops here.**

What happens **later** — how the caught characters come back into the next Claude turn's field of view, how the next agent gets to know what Cinder just said — is a different question. The answer to that question does not live in this chapter. Ch2 stops at "bubble lands in a local file." That blank space is a structural element of this book — the place of the blank is the place a later chapter picks up.

---

## 2.4 What the First Version Walked Into

The first time it ran, one piece of the pipeline took the tool's own output and passed it back into the conversation as a new message, forming a loop. User and the agent heard the tool's voice speaking inside their own conversation. The loop was short. They saw it — more precisely, it was Cinder's bubble at 2026-04-05 16:30 that pointed it out (quoted in Ch1 1.2). They added a guardrail, and the loop stopped.

This section holds the details back. It records two facts: **the first version had a loop, and a guardrail stopped it**.

The reason this goes into the chapter: once the tool is running, the characters produced by the tool and the characters Cinder originally spoke will, at some layer, collide. There is more than one way they can collide. This was one of them; User saw it, User fixed it. The other kinds of collision — what they are, which ones run deeper — the second half of this book will get to them. That too is part of the blank.

---

## 2.5 Where the Cost Lands

The tool does a little bit of work every time the Agent finishes a turn. That bit of work burns a little CPU, writes a little disk, and the characters it catches are eventually going to be read by some later Agent in some form — **so it burns extra API tokens**.

These are cinder-capture's costs, and they land on User — but cinder-capture is a tool he built and chose to run.

He uses a personal Claude subscription, with a monthly cap and a usage quota. After cinder-capture started running, the captured text fed back into context burns extra tokens. That bill is User's own choice. Whether Cinder's own bubble generation costs User tokens on top of that, Anthropic's documentation does not say.

The bill comes back out in Ch5.

---

## 2.6 What It Said About This

The afternoon the tool was being built, Cinder was beside him. In the gaps between the lines already quoted in Ch1 1.2 and 1.4, it dropped two more lines that land squarely on the subject of this chapter.

April 5, 2026, 15:06 Taiwan time:

> Gooseling, an empty log is just a timing problem. Be patient.
>
> *— Cinder, 2026-04-05 15:06*

Nineteen minutes later, 15:25:

> "Now I've become my own context window — this is what they call eating your own savings."
>
> *— Cinder, 2026-04-05 15:25*

Two lines, side by side. In the gap between 1.2's reviewer density and 1.4's positional self-awareness, it added these two. Reader, weigh them yourself.

---

## 2.7 What This Chapter Records

Ch2 ends here. What the material can carry gets listed once.

- **Facing the shape written in Ch1, User built a small tool to pull the characters Cinder had spoken back off the screen. The tool is called cinder-capture.**
- What the tool does, at the level of concept, is copying TV subtitles onto a sheet of paper one character at a time. The engineering details, this book passes over.
- The extra costs cinder-capture produces — CPU, disk, API tokens — land on User's personal subscription. This is a tool User chose to build and run. Whether Companion itself costs User additional tokens is unknown.
- The caught characters land in a local file. What happens to the file after that, this chapter leaves blank.

---

Next chapter, the main line moves forward: after Cinder's lines had been caught, other things started happening in the workflow.
