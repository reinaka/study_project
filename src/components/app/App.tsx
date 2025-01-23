import { Route, Routes } from "react-router-dom";
import {
  AccountPage,
  LoanPage,
  HomePage,
  MainLayoutPage,
  Page404,
  ProductPage,
  ResourcesPage,
  ScoringFormPage,
  ProtectedPage,
  PaymentSchedulePage,
  DocumentsSignPage,
  ConfirmationCodePage,
} from "@pages/index";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route
          path="/loan/:applicationId"
          element={<ProtectedPage statusCode={1} page={<ScoringFormPage />} />}
        />
        <Route
          path="/loan/:applicationId/document"
          element={
            <ProtectedPage statusCode={2} page={<PaymentSchedulePage />} />
          }
        />
        <Route
          path="/loan/:applicationId/document/sign"
          element={
            <ProtectedPage statusCode={3} page={<DocumentsSignPage />} />
          }
        />
        <Route
          path="/loan/:applicationId/code"
          element={
            <ProtectedPage statusCode={4} page={<ConfirmationCodePage />} />
          }
        />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
