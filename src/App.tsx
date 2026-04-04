import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import ButtonPreview from "./components/ui/ButtonPreview";
import BadgePreview from "./components/ui/BadgePreview";
import CardPreview from "./pages/CardPreview";
import InputAndTagPreview from "./pages/InputAndTagPreview";
import CategoryBarPreview from "./components/sections/CategoryBarPreview";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buttons" element={<ButtonPreview />} />
      <Route path="/badges" element={<BadgePreview />} />
      <Route path="/card-preview" element={<CardPreview />} />
      <Route path="/inputandtag" element={<InputAndTagPreview />} />
      <Route path="/categorybar-preview" element={<CategoryBarPreview />} />
    </Routes>
  );
}