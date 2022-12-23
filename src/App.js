// Toast
import store from "app/store";
import AppToast from "general/components/AppToast";
import { Suspense, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
// router
// import HomeScreen from "features/LandingPage/screens/HomeScreen";
import AppDialog from "general/components/AppDialog";
import AppNotFound from "general/components/AppNotFound";
// import { injectStore } from "general/helpers/WebsocketHelper";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInScreen from "features/Auth/SignInScreen";
import SignUpScreen from "features/Auth/SignUpScreen";
import Profile from "features/Profile";
import LandingPage from "features/LandingPage";
import Dashboard from "features/Dashboard";
import CreateQuestionScreen from "features/CreateQuestionScreen";
import GuestRoute from "general/components/AppRoutes/GuestRoute";
import PrivateRoute from "general/components/AppRoutes/PrivateRoute";
import AccountListener from "features/Account/AccountListener";
// import Admin from "Admin";


// Load BS

require("bootstrap/dist/js/bootstrap.min");
// Load KT plugins
// require("assets/plugins/ktutil");
// require("assets/plugins/ktmenu");
// require("assets/plugins/ktoffcanvas");
// require("assets/plugins/ktcookie");
// require("assets/plugins/kttoggle");
// // aside
// require("assets/plugins/aside/aside");
// require("assets/plugins/aside/aside-menu");
// require("assets/plugins/aside/aside-toggle");
// // header 
// require("assets/plugins/header/ktheader-mobile");
// require("assets/plugins/header/ktheader-topbar");

// Lazy load - Code splitting

const sTag = "[App]";

function App() {
  // MARK: --- Hooks ---
  useEffect(() => {
    console.log(`${sTag} did load`);
    // injectStore(store);

    return () => {
      console.log(`${sTag} will dismiss`);
    };
  }, []);
  // const auth = useSelector((state) => state?.auth?.loggedIn);

  return (
    <>
      {/* Router */}
      {/* <BrowserRouter> */}
      <BrowserRouter>
        {/* Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Admin */}
            {/* <Route path="/admin/*" element={<Admin />} /> */}

            {/* Landing Page */}
            <Route path="" element={<LandingPage />} />

            {/* Dashboard */}
            <Route
              path="dashboard/*"
              element={
                // auth ? (
                //   <PrivateRoute>
                    // <PrivateRoute>
                      <Dashboard />
                    // </PrivateRoute>
                //   {/* </PrivateRoute>
                // ) : (
                //   <HomeScreen />
                // ) */}
              }
            />

            {/* Profle */}
            <Route
              path="Profile/*"
              element={
                // <PrivateRoute>
                  <Profile />
                // </PrivateRou>
              }
            />

            {/* Account */}
            {/* <Route
              path="account/*"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            /> */}
            {/* Sign in */}
            <Route
              path="/sign-in"
              element={
                <GuestRoute>
                  <SignInScreen />
                </GuestRoute>
              }
            />
            {/* Sign up */}
            <Route
              path="/sign-up"
              element={
                <GuestRoute>
                  <SignUpScreen />
                </GuestRoute>
              }
            />

            {/* Create quétion */}
            <Route path="/create-question" element={<CreateQuestionScreen />}/>
            {/* forgot pass */}
            {/* <Route
              path="/forgot-pass"
              element={
                <GuestRoute>
                  <ForgotPasswordScreen />
                </GuestRoute>
              }
            /> */}
            {/* reset pass */}
            {/* <Route
              path="/reset-pass"
              element={
                <GuestRoute>
                  <ResetPasswordScreen />
                </GuestRoute>
              }
            /> */}
            {/* Not Found */}
            <Route path="*" element={<AppNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* </BrowserRouter> */}

      {/* App Dialog */}
      <AppDialog />
      {/* Toast */}
      <AppToast />
      {/* Listener */}
      {/* <DataCommonListener /> */}
      {/* Account Listener */}
      <AccountListener />
      {/* <DashboardListener /> */}
      {/* Firebase Listener */}
      {/* <FirebaseListener /> */}
    </>
  );
}

export default App;
