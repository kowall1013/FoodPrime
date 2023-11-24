import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		COLORS: {
			background: string;
			primary: string;
			secondary: string;
			tertiary: string;
			decorative: string;
			info: string;
			success: string;
			error: string;
			"gray-100": string;
			"gray-200": string;
			"gray-300": string;
			"gray-400": string;
			"gray-500": string;
			"gray-600": string;
			"gray-700": string;
			"gray-900": string;
			"gray-1000": string;
		};
	}
}
