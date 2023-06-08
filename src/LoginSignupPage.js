import React, { useState } from 'react';

export function LoginSignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic here
    if (isLogin) {
      // Perform login
      console.log('Performing login with email:', email, 'and password:', password);
    } else {
      // Perform signup
      console.log('Performing signup with email:', email, 'and password:', password);
    }
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow">
        <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Signup'}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            className="text-blue-500 font-medium focus:outline-none ml-1"
            onClick={toggleForm}
          >
            {isLogin ? 'Signup here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginSignupPage;
