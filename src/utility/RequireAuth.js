import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../component";
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};
export { RequireAuth };
