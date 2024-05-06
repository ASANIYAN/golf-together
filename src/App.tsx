import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing from "./pages/landing/landing";
import Login from "./pages/login/login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </>
    )
  );
  return (
    <section>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
