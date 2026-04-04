import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import AuctionCardPreview from "./components/sections/AuctionCardPreview";
import { LiveBidsPreview } from "./components/sections";


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
      
    </Routes>
  );
}