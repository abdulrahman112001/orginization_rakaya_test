import { t } from "i18next";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import MyEmployees from "../pages/Facilities_and_Employee/Employees/MyEmployees";
import MyFacilities from "../pages/Facilities_and_Employee/Facilities/MyFacilities";
import Login from "../pages/login/Login";
import Orders from "../pages/orders/Orders";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import Landing from "../pages/landing/Landing";
const Home = lazy(() => import("../pages/home/Home"));

export const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home title={t("home")} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Facilities" element={<MyFacilities />} />
        <Route path="/Employee" element={<MyEmployees />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
      <Route path="/landing" element={<Landing title={t("Landing")} />} />
      <Route
        errorElement={<ErrorPage />}
        path="/register"
        element={<Register title={t("login")} />}
      />
    </Routes>
  );
};
