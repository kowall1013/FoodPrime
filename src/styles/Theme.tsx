import { ThemeProvider, DefaultTheme } from "styled-components";

export const COLORS = {
	text: "hsl(0deg, 0%, 100%)",
	background: "hsl(210deg, 30%, 8%)",
	primary: "hsl(230deg, 100%, 69%)",
	secondary: "hsl(333deg, 100%, 52%)",
	tertiary: "hsl(53deg, 100%, 50%)",
	decorative: "hsl(200deg, 50%, 60%)",
	info: "hsl(230deg, 100%, 69%)",
	success: "hsl(160deg, 100%, 40%)",
	error: "hsl(340deg, 95%, 60%)",
	"gray-100": "hsl(210deg, 15%, 20%)",
	"gray-200": "hsl(210deg, 15%, 25%)",
	"gray-300": "hsl(210deg, 10%, 40%)",
	"gray-400": "hsl(210deg, 9%, 45%);",
	"gray-500": "hsl(210deg, 8%, 50%);",
	"gray-600": "hsl(210deg, 12%, 55%)",
	"gray-700": "hsl(210deg, 14%, 66%)",
	"gray-900": "hsl(210deg, 25%, 88%)",
	"gray-1000": " hsl(210deg, 25%, 96%",
};

const theme: DefaultTheme = {
	COLORS,
};

export default theme;
