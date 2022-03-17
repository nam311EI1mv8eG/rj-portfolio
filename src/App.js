//import {Routes, Route, Link} from "react-router-dom"
import {Route, Routes} from "react-router-dom"

import HomePage from "./components/pages/Home"
import AboutPage from "./components/pages/About"
import ContactPage from "./components/pages/Contact"

export default function App() {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}
