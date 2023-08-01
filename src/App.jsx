import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Zone1 from "./pages/Zone1";
import Zone2 from "./pages/Zone2";
import Zone3 from "./pages/Zone3";
import { store } from "./app/store";
import { Provider } from "react-redux";
// import theme from "./features/theme";

const App = () => {
  // const themeColor = useSelector((state) => state.theme.value);

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Zone1" element={<Zone1 />} />
            <Route path="/Zone2" element={<Zone2 />} />
            <Route path="/Zone3" element={<Zone3 />} />
            {/* <Route path="/products/:id" element={<Product />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
