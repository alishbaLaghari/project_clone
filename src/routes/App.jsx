import Header from "../components/HEader";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import FetchItems from "../components/fetchItems";

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
