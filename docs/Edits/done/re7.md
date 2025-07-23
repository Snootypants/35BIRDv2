
✅ Final Direction: Version History Button
	•	Use icon-only.
	•	Remove all text (“Version History”).
	•	Icon is strong enough alone, matches minimal, futuristic aesthetic.
	•	Keeps lower corner visually quiet and refined — no “label clutter.”

⸻

💥 Updated HTML snippet

<button class="version-button" aria-label="Version history">
  <img src="./assets/images/versionHistory.png" alt="Version history icon" style="width: 24px; height: 24px;">
</button>


⸻

💥 Updated CSS snippet

.version-button {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
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

.version-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 170, 255, 0.4);
}

.version-button img {
  width: 24px;
  height: 24px;
  pointer-events: none;
}


⸻

💣 No text. Icon only. No fallback label. Clean.