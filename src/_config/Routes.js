import { Outlet, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import AccountProfile from "../pages/AccountProfile/Account";
import { PageAbout } from "../pages/PageAbout/PageAbout";
import { AllGames } from "../pages/AllGames/AllGames";
import { Education } from "../pages/Education/Education";
import { Health } from "../pages/Health/Health";
import { UserRegistration } from "../pages/UserRegistration/UserRegistrations";
import { Login } from "../pages/Login/Login";
import { EnvironmentPage } from "../pages/EnvironmentPage/EnvironmentPage";
import { Community } from "../pages/Community/Community";

let valorUser = true;

const AccessUser = () => {
  return valorUser && <Outlet />;
};

const AccessPages = () => (
  <>
    <Routes>
      <Route element={<AccessUser />}>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/Profile" element={<AccountProfile />} />
        <Route path="/About" element={<PageAbout />} />
        <Route path="/AllGames" element={<AllGames />} />
        <Route path="/EducationGames" element={<Education />} />
        <Route path="/HealthGames" element={<Health />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Environment" element={<EnvironmentPage />} />
        <Route path="/Community" element={<Community />} />
      </Route>
    </Routes>
  </>
);

export default AccessPages;
