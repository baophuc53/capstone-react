import { RouteObject, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "./components/Loading";

const HomePage = lazy(() => import("./pages/Home"));
const BookingPage = lazy(() => import("./pages/Booking"));

function App() {
  const elements: RouteObject[] = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/booking",
      element: <BookingPage />,
    },
  ];
  const routes = useRoutes(elements);
  return <Suspense fallback={<Loading />}>{routes}</Suspense>;
}

export default App;
