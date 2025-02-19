import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ route, vendorRoute }) => {
  const isUserAuthenticated = Boolean(Cookies.get("token"));
  const isVendorAuthenticated = Boolean(Cookies.get("vendorToken"));
  if (vendorRoute)
    return isVendorAuthenticated ? (
      <>{vendorRoute}</>
    ) : (
      <Navigate to="/vendor-dashboard" replace />
    );
  return isUserAuthenticated ? (
    <>{route}</>
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default ProtectedRoute;
