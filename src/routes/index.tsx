import { createBrowserRouter, RouterProvider } from "react-router-dom"
import type { NavbtnProps } from "../components/Navbar/Navbtn"
import MainLayout from "../layouts/Main"
import Homepage from "./Homepage"
import Recap from "./Recap"
import Insights from "./Insights"
import Overview from "./Overview"
import Retail from "./Retail"
import Employees from "./Employees"

export const navRouter: NavbtnProps[] = [
  {
    path: "/",
    text: "Home",
    description: "Go to Homepage",
  },
  {
    path: null,
    text: "Using 'Sample ECommerce'",
  },
  {
    path: "/recap",
    text: "Recap",
    description: "See ecommerce recap (using 'Sample ECommerce')",
  },
  {
    path: "/insights",
    text: "Insights",
    description: "See ecommerce insights (using 'Sample ECommerce')",
  },
  {
    path: null,
    text: "Using custom data",
  },
  {
    path: "/overview",
    text: "Overview",
    description: "See retail overview (using custom data)",
  },
  {
    path: "/retail",
    text: "Retail",
    description: "See retail insights (using custom data)",
  },
  {
    path: "/employees",
    text: "Employees",
    description: "See employee records (using custom data)",
  },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "/recap",
        element: <Recap />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/retail",
        element: <Retail />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
