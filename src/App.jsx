import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import LoginPage from "./views/login";
import Dashboard from "./views/dashboard";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Layouts/ProtectedRoute";
import PublicLayout from "./Layouts/PublicLayout";
import PrivateLayout from "./Layouts/PrivateLayout";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PublicLayout />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateLayout />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
