💣 Weak points
	•	Version history button: old emoji style, looks cheap, breaks unity.
	•	Theme toggle button: emoji, bright background, clashes with new premium glass look.

⸻

⚡ Fixes & upgrades

1️⃣ Version history button: convert to minimal glass pill

.version-button {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 9999px;
  padding: 0.6em 1.4em;
  color: #f5f5f7;
  font-weight: 500;
  font-size: 0.95rem;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.version-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 170, 255, 0.4);
}


⸻

2️⃣ Theme toggle button: redesign as glass circular icon button

.theme-toggle {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.theme-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 170, 255, 0.4);
}

.theme-toggle img {
  width: 24px;
  height: 24px;
  pointer-events: none;
}


⸻

3️⃣ Updated HTML for theme toggle

<button class="theme-toggle" aria-label="Toggle theme">
  <img src="./assets/images/light-dark.png" alt="Toggle theme icon">
</button>


⸻

4️⃣ Unify hover glow effect

Both buttons match your new card glow style for consistent design language.

⸻

✅ Summary list
	1.	Rebuild version history button — glass pill, minimal, floating.
	2.	Redesign theme toggle — circular, glass, use /frontend(v2)/assets/images/light-dark.png.
	3.	HTML update for toggle — direct icon embed, no emoji.
	4.	Unified glow — same hover vibe as cards.

