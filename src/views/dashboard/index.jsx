import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProtectedRoute from "../../Layouts/ProtectedRoute";

function Dashboard() {
  const { user, handleSignOut } = useContext(AuthContext);
  return (
    <div>
      Dashboard
      {/* <h1>Welcome, {user.email}!</h1> */}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default ProtectedRoute(Dashboard);
