import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NovelOpen from "./routes/NovelOpen";
import NovelModify from "./routes/NovelModify";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/open/:id" element={<NovelOpen />}></Route>
        <Route path="/modify/:id" element={<NovelModify />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
