import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
