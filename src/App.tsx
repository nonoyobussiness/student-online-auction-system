import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import ButtonPreview from "./components/ui/ButtonPreview";
import BadgePreview from "./components/ui/BadgePreview";
import InputAndTagPreview from "./pages/InputAndTagPreview";

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
          </ProtectedRoute> */
          <Home/>
        }
      />
      <Route path="/buttons" element={<ButtonPreview />} />
      <Route path="/badges" element={<BadgePreview />} />
      <Route path="/inputandtag" element={<InputAndTagPreview />} />
    </Routes>
  );
}
