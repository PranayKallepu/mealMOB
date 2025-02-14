import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({route}) => {
    const isAuthenticated = Boolean(Cookies.get('token'))
    console.log(isAuthenticated);
    return isAuthenticated ? <>{route}</>: <Navigate to='/dashboard' replace />
}

export default ProtectedRoute