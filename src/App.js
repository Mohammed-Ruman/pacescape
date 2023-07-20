import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import { GlobalStyle } from "./Global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
