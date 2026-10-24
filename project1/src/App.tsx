import { Routes, Route } from "react-router";
import "./App.css"
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import MypageHome from "./pages/MypageHome";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />}>
            <Route index element={<MypageHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
