import { BrowserRouter, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Router path="/" element={<LoginPage />} />
          <Router path="/home" element={<HomePage />} />
          <Router path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
