//External
import { createGlobalStyle, ThemeProvider } from "styled-components";
//Components
import theme from "@/styles/Theme";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Wotfard','Wotfard-fallback',sans-serif;
  background-color: ${(props) => props.theme.COLORS.background};
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`;

// color: ${(props) => props.theme.COLORS.PRIMARY};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<h1>kwl</h1>
		</ThemeProvider>
	);
}

export default App;
