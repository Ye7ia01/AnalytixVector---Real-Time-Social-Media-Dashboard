import React from "react";
import { Link } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [token, setToken] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(`urlparams ${urlParams}`);
    const receivedToken = urlParams.get("token");
    if (receivedToken) {
      setToken(receivedToken);
      localStorage.setItem("authToken", receivedToken); // Save token in local storage
      console.log(`Token ${receivedToken}`);
    }
  }, [window.location.search]);

  useEffect(() => {
    if(token)
    navigate("/"); // Navigate to the home page after successful login
  },[token])

    // Replace with your Facebook SDK login URL
    const facebookLoginUrl =
      "https://www.facebook.com/v22.0/dialog/oauth?client_id=682817207539712&redirect_uri=http://localhost:5000/auth/callback&scope=email,public_profile,pages_show_list,instagram_basic,instagram_manage_insights,business_management,pages_read_engagement,read_insights&state=4b9781dc7e210d22e87936f0bf7656adc2b4aa93d64cb2c2"

  
  return (
    <div className="flex flex-col gap-4 min-h-screen ">
      {/* Navbar */}
        

        {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 text-center px-4 gap-4">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Analytix Vector</h2>
        <p className="text-lg mb-6">
          Please sign in with your Facebook account to continue.
        </p>
        <a
          href={facebookLoginUrl}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition !p-3"
        >
          Sign in with Facebook
        </a>
      </div>

      {/* Footer */}
      <footer className="py-4">
        <div className="container mx-auto text-center">
          <p className="text-[#000000]">&copy; 2025 Analytix Vector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
