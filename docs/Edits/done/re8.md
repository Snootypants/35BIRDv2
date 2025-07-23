	1.	In fluid.js, inside initFluid(), add theme check and set BACK_COLOR and POINTER_COLOR accordingly.
	2.	On theme toggle in theme.js, call fluid.initFluid() to refresh with new colors.
	3.	Avoid CSS filters or global inversions — explicit color swap only.