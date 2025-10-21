import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPages from "./pages/auth/AuthPages";
import LandingPage from "./pages/userPages/LandingPage";
import UserLayout from "./Layout/UserLayout";
import EventPage from "./pages/userPages/EventPage";
import MerchPage from "./pages/userPages/MerchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/merch" element={<MerchPage />} />
          </Route>
          <Route path="/Login" element={<AuthPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
