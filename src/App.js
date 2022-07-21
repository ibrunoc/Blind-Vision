import "./reset.css";
import { Header } from "./Components/Header/index";
import { Page2 } from "./Pages/Page2/index";
import { Page4 } from "./Pages/Page4/index";
import { Banner } from "./Pages/Banner/index";
import { Page3 } from "./Pages/Page3/index";
import { Footer } from "./Components/Footer/index";
export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </>
  );
}
