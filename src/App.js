import "./style.scss";
import Header from "./components/master/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepages from "./components/home/Homepages";

function App() {
  return <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepages />} />
      </Routes>
    </Router>

  </>;
}

export default App;
