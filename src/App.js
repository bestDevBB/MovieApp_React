import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return <Router>
        <Routes>
            {/* <Route path="/movie/:id" element={<Detail />} /> */}
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>;
}; // Switch는 Router Component를 찾는 기능을 함, Route(URL)를 찾으면 컴포넌트를 렌더링함

export default App;