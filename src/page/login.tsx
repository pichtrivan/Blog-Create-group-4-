const Login = () => {
    return (
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="mt-4">Please enter your credentials to log in.</p>
        <form className="mt-4">
          <input type="email" placeholder="Email" className="border p-2 mr-2" />
          <input type="password" placeholder="Password" className="border p-2" />
          <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  