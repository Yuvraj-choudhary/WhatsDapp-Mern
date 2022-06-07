import { ChakraProvider } from "@chakra-ui/react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChatProvider from "./context/ChatProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <BrowserRouter>
            <ChatProvider>
                <App />
            </ChatProvider>
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById("chat")
);

reportWebVitals();
serviceWorkerRegistration.register();