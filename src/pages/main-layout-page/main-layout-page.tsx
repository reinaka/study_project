import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Outlet } from "react-router-dom";

export const MainLayoutPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
