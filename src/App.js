import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ReactGA from 'react-ga4';

import "primeflex/primeflex.css";

import Navbar from "./components/navbar"
import Home from "./pages/home"
import About from "./pages/about"
import VettingForm from './pages/vetting-form';
import NoEffortMessages from './pages/no-effort-messages';

function App() {

  ReactGA.initialize("G-VPWWXR5NR5");

  if (window.location.pathname === '/bodhirubberworks') {
    window.location.replace(`https://linktr.ee/bodhirubberworks`)
    return;
  }
  else if (window.location.pathname === '/libidexdealsbot') {
    window.location.replace('https://t.me/libidexdealsbot')
    return;
  }
  else if (window.location.pathname === '/redirect') {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    window.location.replace(`https://${urlParams.get('url')}`)
    return;
  }

  return (
    <BrowserRouter>
      <div id="content" className="flex flex-column gap-6 w-10 lg:w-6">
        <header>
          <Navbar className="w-full flex-wrap lg:flex-nowrap"></Navbar>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vetting-form" element={<VettingForm />} />
            <Route path="/no-effort-message" element={<NoEffortMessages />} />
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;