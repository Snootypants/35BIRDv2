💣 Weak points
	•	Current fluid animation only updates future pointer colors, not entire background or existing buffers.
	•	Theme toggle currently does not fully reset or repaint the fluid canvas when switching.

⸻

⚡ Recommended Edits

1️⃣ Create refreshForTheme() in fluid.js
	•	Add new method to fully reset fluid framebuffers and force immediate redraw.

refreshForTheme() {
    this.initFramebuffers();   // Recreate and clear buffers
    this.gl.clearColor(this.config.BACK_COLOR.r, this.config.BACK_COLOR.g, this.config.BACK_COLOR.b, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.updateFrame();        // Force redraw
}


⸻

2️⃣ Update theme.js to call new reset method
	•	After changing theme and updating config, call:

fluid.refreshForTheme();

	•	This ensures that the background and all fluid states update instantly.

⸻

3️⃣ Verify BACK_COLOR usage
	•	Check fluid.js, specifically inside initFramebuffers() or any place buffers are initialized.
	•	Ensure BACK_COLOR is actively used to set clear color with:

this.gl.clearColor(this.config.BACK_COLOR.r, this.config.BACK_COLOR.g, this.config.BACK_COLOR.b, 1.0);
this.gl.clear(this.gl.COLOR_BUFFER_BIT);


⸻

4️⃣ Remove partial color updates
	•	Don’t rely on just changing this.config values alone. Must always refresh framebuffers to avoid partial or “ghost” colors.

⸻

✅ Final touch

After these changes:
	•	Fluid background will fully repaint with correct colors on theme toggle.
	•	Both pointer colors and entire background switch seamlessly.
	•	No leftover dark or light shapes when switching.
