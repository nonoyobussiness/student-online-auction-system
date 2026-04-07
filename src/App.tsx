import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import { AppProvider } from "./context/AppContext";
import Sell from "./pages/Sell";
import Wallet from "./pages/Wallet";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import ToastContainer from "./components/ui/Toast";

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            
              <Home />
            
          }
        />
        <Route
          path="/sell"
          element={
          
              <Sell />
            
          }
        />
        <Route
          path="/wallet"
          element={
          
              <Wallet />
            
          }
        />
        <Route
          path="/history"
          element={
          
              <History />
            
          }
        />
        <Route
          path="/settings"
          element={
          
              <Settings />
            
          }
        />
        <Route
          path="/profile"
          element={
          
              <Profile />
            
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <ToastContainer />
    </AppProvider>
  );
}
