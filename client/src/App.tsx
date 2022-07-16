import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Feed,
  DirectMessages,
  Post,
  Profile,
  LoginButton,
  LogoutButton,
} from "./components";
import "./App.css";

/**
 * App routes.
 */
const App = () => {
  return (
    <Router>
      <LoginButton />
      <LogoutButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/messages" element={<DirectMessages />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
