import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";

import Contact from "./pages/Contact.jsx";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/footer.jsx";
import Login from "./pages/Login.jsx";
import TourList from "./pages/TourList.jsx";
import TourDetails from "./pages/TourDetails.jsx";
import Sign_up from "./pages/Sign_up.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Dash from "./pages/Dash.jsx";
import TourDash from "./pages/TourDash.jsx";
import ContactDash from "./pages/ContactDash.jsx";
import BookingsDash from "./pages/BookingsDash.jsx";
import TourForm from "./pages/TourForm.jsx";
import EditTour from "./pages/EditTour.jsx";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />

      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="tour" element={<TourList />} />
          <Route path="/tourDetails/:id" element={<TourDetails />} />

          <Route path="login" element={<Login />} />
          <Route path="sign_up" element={<Sign_up />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<Dash />} />
          <Route path="tourDash" element={<TourDash />} />
          <Route path="contactDash" element={<ContactDash />} />
          <Route path="bookingsDash" element={<BookingsDash />} />
          <Route path="tourForm" element={<TourForm />} />
          <Route path="editTour/:id" element={<EditTour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
