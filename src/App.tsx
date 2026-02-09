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
// import PlaylistItem from "./components/PlayList/PlayList";
import Premium from "./pages/userPages/Premium";
import RecommendedDetail from "./Features/RecommendationDetail/RecommendedDetail";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./routes/ProtectedRoute";
import ArtistRegister from "./pages/auth/ArtistRegister";
import ArtistLogin from "./pages/auth/ArtistLogin";
import ArtistDetail from "./Features/ArtistDetail/ArtistDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<AuthPages />} />
          <Route path="/ArtistRegister" element={<ArtistRegister />} />
          <Route path="/ArtistLogin" element={<ArtistLogin />} />
          <Route element={<ProtectedRoute allowedRoles="USER" />}>
            <Route element={<UserLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/merch" element={<MerchPage />} />
              <Route path="/artists" element={<ArtistPage />} />
              <Route path="/library" element={<Library />} />
              <Route path="/libraryDetail/:id" element={<LibraryDetail />} />
              <Route
                path="/RecommendedDetail/:id"
                element={<RecommendedDetail />}
              />
              <Route path="/artist/detail/:id" element={<ArtistDetail />} />
              <Route path="/premium" element={<Premium />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles="ARTIST" />}>
            <Route element={<ArtistLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/music" element={<MusicManagement />} />
              <Route path="/merchandise" element={<MerchandiseManagement />} />
              <Route path="/earning" element={<Earning />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoles="ADMIN" />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/Analytic" element={<AdminAnalyticsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
