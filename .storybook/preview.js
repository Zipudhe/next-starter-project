import { ThemeProvider } from "styled-components"
import { theme } from "../src/styles/themes"
import { GlobalStyles } from "../src/styles/global-styles"


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withThemeProvider = (Story, ctx) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...ctx} />
      <GlobalStyles /> 
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]