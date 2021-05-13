import { BrowserRouter as Router, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./Assets/bootstrap.min.css";
import "./App.scss";

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Suspense fallback={<></>}>
            <Home />
          </Suspense>
        </Route>
      </Router>
    </div>
  );
}

export default App;
