import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import "./Styles/tailwind.css";
import Builting from "./Components/Home/Builting";
import Login from "./Components/Login/Login";
import CallbackPage from "./Components/Home/CallbackPage";
import ManageTeam from "./Components/Teams/ManageTeam";




function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
          children={<Route index element={<Home />} />}
        />
        <Route
          path="/auth/callback"
          children={<Route index element={<CallbackPage />} />}
        />
        <Route
          path="/"
          element={<Layout />}
          children={<Route path="login" element={<Login />} />}
        />
        <Route
          path="/"
          element={<Layout />}
          children={<Route path="tasks" element={<Header />} />}
        />
        <Route
          path="/"
          element={<Layout />}
          children={<Route path="team" element={<ManageTeam />} />}
        />
        <Route
          path="/"
          element={<Layout />}
          children={<Route path="messages" element={<Builting />} />}
        />
        <Route
          path="/"
          element={<Layout />}
          children={<Route path="Statistics" element={<Builting />} />}
        />
        <Route
          path="/"
          element={<Layout />}
          children={<Route path="Tracking" element={<Builting />} />}
        />
        <Route
          path="/"
          element={<Layout />}
          children={<Route path="Settings" element={<Builting />} />}
        />
        <Route
          path="/"
          element={<Layout />}
          children={<Route path="/Support" element={<Home />} />}
        />
      </Routes>
    </>
  );
}

export default App;
