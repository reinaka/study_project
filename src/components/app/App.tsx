import { Route, Routes } from "react-router-dom";
import {
  AccountPage,
  LoanPage,
  HomePage,
  MainLayoutPage,
  Page404,
  ProductPage,
  ResourcesPage,
} from "@pages/index";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="/credit-card" element={<LoanPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
