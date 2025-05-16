import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "@/page/Home";
import CashInPage from "@/page/CashIn";
import AddAmountPage from "@/page/CashIn/AddAmount";
import ConfirmationPage from "@/page/CashIn/Confirmation";
import VerifyCodePage from "@/page/CashIn/VerifyCode";
import { ProtectedRoute } from "./ProtectedRoute";
import PageLayout from "@/components/PageLayout";
import SuccessPage from "@/page/CashIn/Success";

const NotFound = () => <Navigate to="/404" />;

const routes = [
  { path: "/", component: HomePage, isHomePage: true, autoHeight: true },
  { path: "/cash_in", component: CashInPage },
  { path: "/cash_in_amount", component: AddAmountPage },
  { path: "/cash_in_confimration", component: ConfirmationPage },
  { path: "/cash_in_verify_code", component: VerifyCodePage, autoHeight: true },
  {
    path: "/cash_in_success",
    component: SuccessPage,
    isHomePage: true,
    autoHeight: true,
  },
];

export default function RouterRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      {routes.map(
        ({
          path,
          component: Component,
          isHomePage = false,
          autoHeight = false,
        }) => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute>
                <PageLayout isHomePage={isHomePage} autoHeight={autoHeight}>
                  <Component />
                </PageLayout>
              </ProtectedRoute>
            }
          />
        )
      )}
    </Routes>
  );
}
