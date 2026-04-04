import CardPreview from "./pages/CardPreview";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import ButtonPreview from "./components/ui/ButtonPreview";
import BadgePreview from "./components/ui/BadgePreview";
import InputAndTagPreview from "./pages/InputAndTagPreview";
import HeroPromoPreview from "./pages/HeroPromoPreview";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />

      <Route path="/card-preview" element={<CardPreview />} />
      <Route path="/buttons" element={<ButtonPreview />} />
      <Route path="/badges" element={<BadgePreview />} />
      <Route path="/inputandtag" element={<InputAndTagPreview />} />
      <Route path="/heropromo" element={<HeroPromoPreview />} />
    </Routes>
  );
}