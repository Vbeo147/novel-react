import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NovelOpen from "./routes/NovelOpen";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Open/:id" element={<NovelOpen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
