import { Route, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// const PrivateRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   if (!user) {
//     navigate("/login");
//   }

//   return children;
// };

// export default PrivateRoute;

function ProtectedRoute(Component) {
  const Route = (props) => {
    const { user } = useAuth();

    if (!user) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
  return Route;
}

export default ProtectedRoute;
