import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

  
const PrivateRoute = ({ children }) => {
    // We don't use "useAuthStore.getState().isLoggedIn" because with the approach below it re-renders
    // state is changed!

    const loggedIn = useAuthStore((state) => state.isLoggedIn)();
  
    return loggedIn ? <>{children}</> : <Navigate to="/login/" />;
};

export default PrivateRoute;
