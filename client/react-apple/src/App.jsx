import {Route, Routes} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
// import Alert from "./components/Alert/Alert";

import Main from "./components/Main/Main";
import SharedLayout from './components/SharedLayout';
import Iphone from "./pages/Iphone/iphone";
import Product from "./components/Product";
import NotFound from "./pages/NotFound/NotFound";
import Mac from "./pages/Mac/Mac";
import Ipad from "./pages/ipad/ipad";


function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          {/* // <Header /> */}
          <Route path="/" element={<Main />} />
          <Route path="Mac" element={<Mac />} />
          <Route path="iphones" element={<Iphone />} />
          <Route path="iphones/:id" element={<Product />} />
          {/* <Footer /> */}
          <Route path="Ipad" element={<Ipad />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;








































































// <>
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src={viteLogo} className="logo" alt="Vite logo" />
//     </a>
//     <a href="https://react.dev" target="_blank">
//       <img src={reactLogo} className="logo react" alt="React logo" />
//     </a>
//   </div>
//   <h1>Vite + React</h1>
//   <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//       count is {count}
//     </button>
//     <p>
//       Edit <code>src/App.jsx</code> and save to test HMR
//     </p>
//   </div>
//   <p className="read-the-docs">
//     Click on the Vite and React logos to learn more
//   </p>
// </>
