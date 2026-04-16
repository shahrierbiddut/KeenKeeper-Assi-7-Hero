import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Homepage/Navbar";
import Banner from "./assets/Homepage/Banner";
import Footer from "./assets/Component/Footer";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import FriendDetailsView from "./assets/FriendDetailsView/FriendDetailsView";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friend/:id" element={<FriendDetailsView />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
