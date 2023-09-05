import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import { Toaster } from "react-hot-toast";
import { Notifications } from 'react-push-notification';
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
      <Splash />

      <Notifications />
      <Toaster position="top-center" />

      <main>
        <Routes>
          <Route path="/" element={<Home userProfile={user} />} />
          <Route path="/about" element={<About userProfile={user} />} />
        </Routes>
      </main>

      <div>
        <div>
          <button
            className="mr-4 mt-10 text-lg px-3 float-right border py-2 bg-white rounded-lg text-red-600"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
