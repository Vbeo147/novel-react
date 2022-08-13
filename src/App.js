import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NovelOpen from "./routes/NovelOpen";
import NovelUpdate from "./routes/NovelUpdate";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/open/:id" element={<NovelOpen />}></Route>
        <Route path="/update/:id" element={<NovelUpdate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
