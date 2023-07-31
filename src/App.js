import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import { GlobalStyle } from "./Global";
import AuthLayout from "./pages/Authentication/AuthLayout";
import UserLayout from "./pages/Influencer/UserLayout";
import Dashboard from "./pages/Influencer/Dashboard";
import Accounts from "./pages/Influencer/Accounts";
import Analytics from "./pages/Influencer/Analytics";
import Campaign from "./pages/Influencer/Campaign";
import YoutubeLogin from "./pages/Influencer/YoutubeLogin";
import InstagramLogin from "./pages/Influencer/InstagramLogin";
import Messages from "./pages/Influencer/Messages/Messages";
import Offline from "./components/ui/Offline";
import BrandInfo from "./pages/Authentication/BrandInfo";

function App() {
  if (navigator.onLine) {
    return (
      <div className="App">
        <GlobalStyle />
        <Router>
          <Routes>
            {/* Auth routes */}

            <Route path="/" element={<AuthLayout />}>
              <Route path="/" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/brandinfo" element={<BrandInfo />}></Route>
            </Route>
            {/* User Routes */}
            <Route path="/user" element={<UserLayout />}>
              <Route path="/user/dashboard" element={<Dashboard />}></Route>
              <Route path="/user/accounts" element={<Accounts />}></Route>
              <Route
                path="/user/accounts/youtube"
                element={<YoutubeLogin />}
              ></Route>
              <Route
                path="/user/accounts/instagram"
                element={<InstagramLogin />}
              ></Route>
              <Route path="/user/messages" element={<Messages />}>
                <Route path="/user/messages/:id" element={<Messages />}></Route>
              </Route>
              <Route path="/user/analytics" element={<Analytics />}></Route>
              <Route path="/user/campaign" element={<Campaign />}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    );
  } else {
    return <Offline />;
  }
}

export default App;
