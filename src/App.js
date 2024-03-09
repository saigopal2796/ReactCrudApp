import "./App.css";
import CreateUser from "./Components/User/CreateUser";
import ShowUser from "./Components/User/ShowUser";
import { Route, Routes } from "react-router-dom";
import EditUser from "./Components/User/EditUser";
import User from "./Components/User/User";
import Header from "./Components/Common/Header";
import Home from "./Components/Layout/Home";
function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="">
          <Header />
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/show-user" element={<ShowUser />} />
          </Routes>
          
        </div>
      </header>
    </div>
  );
}

export default App;