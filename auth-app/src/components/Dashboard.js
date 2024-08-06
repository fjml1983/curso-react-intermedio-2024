import {useAuth} from '../contexts/AuthContext';

const Dashboard = () => {
    const {currentUser,logout} = useAuth();

    return (
    <div>
        <h2>Dashboard</h2>
        <p>Welcome, {currentUser}</p>
        <p>This is your Protected page Only logged in users can see this page</p>
        <p>Click the button below to logout and go back to the login page or close the browser to see the session expire and the user being logged out</p>
        <p>Try to go to the login page without logging in and see the redirect to the login page</p>

        <button onClick={logout}>Logout</button>        
    </div>
    );
};

export default Dashboard;