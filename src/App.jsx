import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import { Toaster } from 'react-hot-toast';
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Splash from "./components/Splash";

const App = () => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Splash />

          <Toaster position="top-center"/>

          <main>
            <Routes>
              <Route path="/" element={<Home userProfile={user}/>} />
              <Route path="/about" element={<About userProfile={user}/>} />
            </Routes>
          </main>

          <div>
            
            <div>
              <button className="mr-4 mt-10 px-3 float-right py-2 bg-red-600 rounded-lg text-white" onClick={() => logout()}>Logout</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </>
  );
};

export default App;
