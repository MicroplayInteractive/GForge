import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <PrimeReactProvider>
                <App />
            </PrimeReactProvider>
        </ChakraProvider>
    </React.StrictMode>,
);