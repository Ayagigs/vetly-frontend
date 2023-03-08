import { StrictMode } from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import { store } from "./store";
// import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        {/* <Provider store={store}></Provider> */}
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
