import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { FormProvider } from "./contexts/FormContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FormProvider>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </CartProvider>
      </FormProvider>
    </ThemeProvider>
  );
}
