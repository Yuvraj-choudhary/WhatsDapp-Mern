import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChatProvider from "./context/ChatProvider";
import "./index.css";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("chat")
);

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
