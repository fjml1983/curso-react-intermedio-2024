import {Route} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

const ProtectedRoute = ({component: Component, ...rest}) => {    
    const {currentUser} = useAuth();
    return (
        <Route {...rest} element={currentUser ? <Component /> : window.location.href = '/login'} />
    );
};
export default ProtectedRoute;