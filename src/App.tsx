import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import AuctionCardPreview from "./components/sections/AuctionCardPreview";
import { LiveBidsPreview } from "./components/sections";
import CardPreview from "./pages/CardPreview";
import InputAndTagPreview from "./pages/InputAndTagPreview";
import ButtonPreview from "./components/ui/ButtonPreview";
import BadgePreview from "./components/ui/BadgePreview";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          /**<ProtectedRoute>
            <Home />
          </ProtectedRoute> 
          <Home/> */
        <Home />
        }
      />
      <Route path="/livebids" element={<LiveBidsPreview/>}/>
      <Route path="/auctioncard" element={<AuctionCardPreview/>}/>

      <Route path="/card-preview" element={<CardPreview />} />
      <Route path="/buttons" element={<ButtonPreview />} />
      <Route path="/badges" element={<BadgePreview />} />
      <Route path="/inputandtag" element={<InputAndTagPreview />} />
      
    </Routes>
  );
}