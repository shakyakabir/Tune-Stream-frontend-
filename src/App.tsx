import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPages from "./pages/auth/AuthPages";
import LandingPage from "./pages/userPages/LandingPage";
import UserLayout from "./Layout/UserLayout";
import EventPage from "./pages/userPages/EventPage";
import MerchPage from "./pages/userPages/MerchPage";
import ArtistPage from "./pages/userPages/ArtistPage";
import ArtistLayout from "./Layout/ArtistLayout";
import Dashboard from "./pages/artistPages/Dashboard";
import MusicManagement from "./pages/artistPages/MusicManagement";
import AnalyticsPage from "./pages/artistPages/AnalyticsPage";
import MerchandiseManagement from "./pages/artistPages/MerchandiseManagement";
import Earning from "./pages/artistPages/Earning";
import AdminDashboard from "./pages/adminPage/Dashboard";
import AdminLayout from "./Layout/AdminLayout";
import { AdminAnalyticsPage } from "./pages/adminPage/AdminAnalyticsPage";
import Library from "./pages/userPages/LibraryPage";
import LibraryDetail from "./Features/Library/LibraryDetail";
import PlaylistItem from "./components/PlayList/PlayList";
import Premium from "./pages/userPages/Premium";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/merch" element={<MerchPage />} />
            <Route path="/artists" element={<ArtistPage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/libraryDetail" element={<LibraryDetail />} />
            <Route path="/paylist" element={<PlaylistItem />} />
            <Route path="/premium" element={<Premium />} />
          </Route>

          <Route path="/Login" element={<AuthPages />} />

          <Route element={<ArtistLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/music" element={<MusicManagement />} />
            <Route path="/merchandise" element={<MerchandiseManagement />} />
            <Route path="/earning" element={<Earning />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/Analytic" element={<AdminAnalyticsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
