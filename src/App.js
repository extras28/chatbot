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


// Load BS

require("bootstrap/dist/js/bootstrap.min");


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
            {/* Landing Page */}
            {/* <Route path="" element={<HomeScreen />} /> */}
            {/* Dashboard */}
            {/* <Route
              path="dashboard/*"
              element={
                auth ? (
                  <PrivateRoute>
                    <DashboardScreen />
                  </PrivateRoute>
                ) : (
                  <HomeScreen />
                )
              }
            /> */}

            {/* Account */}
            {/* <Route
              path="account/*"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            /> */}
            {/* Sign in */}
            <Route
              path="/sign-in"
              element={
                // <GuestRoute>
                  <SignInScreen />
                // </GuestRoute>
              }
            />
            {/* Sign up */}
            <Route
              path="/sign-up"
              element={
                // <GuestRoute>
                  <SignUpScreen />
                // </GuestRoute>
              }
            />
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
      {/* <AccountListener /> */}
      {/* <DashboardListener /> */}
      {/* Firebase Listener */}
      {/* <FirebaseListener /> */}
    </>
  );
}

export default App;
