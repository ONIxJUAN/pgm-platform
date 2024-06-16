import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./routes/routes";
import { useState } from "react";
import {
  Home,
  Blog,
  Team,
  Services,
  Curriculum,
  Search,
  Portfolio,
  Opleiding,
} from "./pages";
import "./App.css";
import Root from "./layouts/Root";
import { ThemeProvider } from "./context/ThemeContext";
import Detail from "./pages/Detail";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_BLOGS,
  GET_ALL_PORTFOLIOS,
  GET_ALL_TEAMMEMBERS,
} from "./graphql/queries";

function App() {
  let {
    loading: loadingPortfolio,
    error: errorPortfolio,
    data: dataPortfolio,
  } = useQuery(GET_ALL_PORTFOLIOS);
  let {
    loading: loadingBlog,
    error: errorBlog,
    data: dataBlog,
  } = useQuery(GET_ALL_BLOGS);
  let {
    loading: loadingTeam,
    error: errorTeam,
    data: dataTeam,
  } = useQuery(GET_ALL_TEAMMEMBERS);
  const [sorting, setSorting] = useState(null);
  if (loadingPortfolio || loadingBlog || loadingTeam) return <p>Loading...</p>;
  if (errorPortfolio) return <p>Error :</p>;
  if (errorBlog) return <p>Error :</p>;
  if (errorTeam) return <p>Error :</p>;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route
            path={routes.home.path}
            element={
              <Home portfolio={dataPortfolio} blog={dataBlog} team={dataTeam} />
            }
          />
          <Route path={routes.blog.path} element={<Blog blogs={dataBlog} />} />
          <Route path={routes.team.path} element={<Team team={dataTeam} />} />
          <Route path={routes.services.path} element={<Services />} />
          <Route path={routes.curriculum.path} element={<Curriculum />} />
          <Route
            path={routes.search.path}
            element={<Search portfolio={dataPortfolio} blog={dataBlog} />}
          />
          <Route
            path={routes.portfolio.path}
            element={
              <Portfolio
                portfolio={{ dataPortfolio }}
                sortingHandler={[sorting, setSorting]}
              />
            }
          />
          <Route path={routes.opleiding.path} element={<Opleiding />} />
          <Route
            path="/:type/:title"
            element={
              <Detail
                portfolio={{ dataPortfolio, setSorting }}
                blog={{ dataBlog }}
              />
            }
          />
        </Route>
      </>
    )
  );
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
