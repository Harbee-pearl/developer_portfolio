import { Routes, Route } from "react-router-dom";
import { About } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
