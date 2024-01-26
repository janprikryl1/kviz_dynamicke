import React, {useEffect, useState} from "react";
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.css";
import {ToastContainer} from "react-toastify";
import CookieModal from "./components/CookieModal";
import Cookies from "universal-cookie";
import Header from "./components/Header";
import UserDetails from "./pages/UserDetails";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import NewQuiz from "./pages/NewQuiz";


function App() {
    const [cookieShow, setCookieShow] = useState(true);
    const cookies = new Cookies();
    const [currentUser, setCurrentUser] = useState();
    const [LoginRegister, setLoginRegister] = useState(1);
    const [LoginShow, setLoginShow] = useState(false);
    const [RegisterShow, setRegisterShow] = useState(false);

  useEffect(() => {
      const CookieModalShow = cookies.get('CookieModalShow');
        if (CookieModalShow != undefined) {
            setCookieShow(CookieModalShow);
        }
    fetch("/api/user", { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          setCurrentUser(true);
        } else {
          setCurrentUser(false);
        }
      })
      .catch((error) => {
        setCurrentUser(false);
      });
  }, []);

  return (
        <BrowserRouter>
        <Header setCurrentUser={setCurrentUser} currentUser={currentUser} LoginRegister={LoginRegister} setLoginRegister={setLoginRegister} LoginShow={LoginShow} setLoginShow={setLoginShow} RegisterShow={RegisterShow} setRegisterShow={setRegisterShow}/>
        <div className='conainer'>
          <Routes>
            <Route path="/" element={<Home user={currentUser}/>} />
            <Route path="/quiz/:quizId" element={<Quiz />} />
            <Route path="/new_quiz" element={<NewQuiz />} />
            <Route path="/profile" element={<UserDetails user={currentUser}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </div>
        <ToastContainer />
            <CookieModal
                show={cookieShow}
                onHide={() => {setCookieShow(false); cookies.set('CookieModalShow', false, { path: '/' });}}
            />
      </BrowserRouter>
  );
}



const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);