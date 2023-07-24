import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import { GlobalStyle } from "./Global";
import AuthLayout from "./pages/Authentication/AuthLayout";
import UserLayout from "./pages/Influencer/UserLayout";
import Dashboard from "./pages/Influencer/Dashboard";
import Accounts from "./pages/Influencer/Accounts";
import Messages from "./pages/Influencer/Messages";
import Analytics from "./pages/Influencer/Analytics";
import Campaign from "./pages/Influencer/Campaign";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Auth routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/auth/register" element={<Register />}></Route>
          </Route>
          {/* User Routes */}
          <Route path="/user" element={<UserLayout />}>
            <Route path="/user/dashboard" element={<Dashboard />}></Route>
            <Route path="/user/accounts" element={<Accounts />}></Route>
            <Route path="/user/messages" element={<Messages />}></Route>
            <Route path="/user/analytics" element={<Analytics />}></Route>
            <Route path="/user/campaign" element={<Campaign />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
