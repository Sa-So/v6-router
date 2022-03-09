import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
// import { Home } from "./pages/Home";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   // user && JSON.parse(user) && setUser(JSON.parse(user));
  //   user && JSON.parse(user) ? setUser(true) : setUser(false);
  //   // if (user) {
  //   //   setUser(user);
  //   // }
  // }, []);
  // // const authenticate = (user) => {
  // //   setUser(user);
  // //   localStorage.setItem("user", user);
  // // };
  // useEffect(() => {
  //   localStorage.setItem("user", user);
  // }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        {!user && (
          <Route
            path="/auth"
            element={<Auth authenticate={() => setUser(true)} />}
          />
        )}
        {/* <Route path="/" element={<Home user={user} setUser={setUser} />} /> */}
        {user && (
          <>
            <Route
              path="/profile"
              element={<Profile logout={() => setUser(false)} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}

        <Route
          path="*"
          element={<Navigate to={user ? "/profile" : "/auth"} />}
        />
        {/* shouldn't it be 404 error ??? */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
