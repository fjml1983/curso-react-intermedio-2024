
const Home = () => {

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Auth App! Please login.</p>
      <p>Click the button below to go to the login page</p>
      <button onClick={() => window.location.href = '/login'}>Login</button>

    </div>
  );
};

export default Home;