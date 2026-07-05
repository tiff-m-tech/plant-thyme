import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import CurrentCollection from "./components/pages/CurrentCollection";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/currentCollection" element={<CurrentCollection />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
