import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const tokenExist = () => {
        const token = localStorage.getItem('token')
        return token !== '' 
    }

    if(tokenExist()){
        return <Outlet />
    } else { 
        return <Navigate to='/login' />
    }                    
};                       

export default ProtectedRoute