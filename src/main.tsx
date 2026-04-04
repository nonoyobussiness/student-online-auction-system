import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ButtonPreview from "./components/ui/ButtonPreview";
import AuctionCardPreview from "./components/sections/AuctionCardPreview";
import LiveBidsPreview from "./components/sections/LiveBidsPreview";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <BrowserRouter>
      <LiveBidsPreview />
    </BrowserRouter>
  </React.StrictMode>
);