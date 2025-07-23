⚡ Recommended Edits

1️⃣ Improve Theme Toggle Visibility
	•	Increase default opacity of background: rgba(20, 20, 20, 0.8) instead of very translucent.
	•	Add subtle border: rgba(255, 255, 255, 0.1).
	•	This makes the button always visible, even when idle, but still minimal.

⸻

2️⃣ Update Version History Button with Icon
	•	Integrate icon file: /Frontend(v2)/assets/images/versionHistory.png.
	•	Place icon to left of text “Version History”, about 20px wide, vertically centered.
	•	Style the button as a glass pill:
	•	background: rgba(20, 20, 20, 0.6)
	•	backdrop-filter: blur(10px)
	•	border-radius: 9999px
	•	Soft glow on hover (match project card hover).

⸻

3️⃣ Redesign Version History Modal
	•	Use glassmorphism base style:
	•	background: rgba(20, 20, 20, 0.6)
	•	backdrop-filter: blur(16px)
	•	border-radius: 20px
	•	Add box shadow: 0 8px 40px rgba(0, 0, 0, 0.6).
	•	Update header text inside modal:
	•	Font size: 2rem
	•	Weight: 600
	•	Style code or markdown blocks:
	•	background: rgba(255, 255, 255, 0.05)
	•	border-radius: 12px
	•	Padding: 1rem
	•	Enable horizontal scroll.

⸻

4️⃣ Unify Interaction Feedback
	•	Match hover lift and glow on version button and theme toggle to project cards.
	•	Confirm all transitions use same timing and easing for consistency.

