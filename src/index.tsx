import * as ReactDOMClient from "react-dom/client";
import "./index.css";

import { MainPage } from "./components/mainPage";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(<MainPage />);
