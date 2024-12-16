import { Route, Routes } from "react-router-dom";
import { AccountPage } from "@pages/account-page/account-page";
import { CreditCardPage } from "@pages/creadit-card-page/credit-card-page";
import { HomePage } from "@pages/home-page/home-page";
import { MainLayoutPage } from "@pages/main-layout-page/main-layout-page";
import { Page404 } from "@pages/page-404/page-404";
import { ProductPage } from "@pages/product-page/product-page";
import { ResourcesPage } from "@pages/resources-page/resources-page";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="/credit-card" element={<CreditCardPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
