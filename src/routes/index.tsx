import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { workspaceName, useWorkspaceStore } from "../stores/useWorkspaceStore"
import type { NavbtnProps } from "../components/Navbar/Navbtn"
import MainLayout from "../layouts/Main"
import Recap from "./Recap"
import Insights from "./Insights"
import Overview from "./Overview"
import Retail from "./Retail"
import Employees from "./Employees"

export const navRouter = (workspace: string): NavbtnProps[] => {
  switch (workspace) {
    case workspaceName.ECOMMERCE:
      return [
        {
          path: "/",
          text: "Recap",
          description: "Your eCommerce recap",
        },
        {
          path: "/insights",
          text: "Insights",
          description: "See detailed insights",
        },
      ]
    case workspaceName.RETAIL:
      return [
        {
          path: "/",
          text: "Overview",
          description: "Your retail overview",
        },
        {
          path: "/retail",
          text: "Retail",
          description: "In-depth retail data",
        },
        {
          path: "/employees",
          text: "Employees",
          description: "See employee records",
        },
      ]
    default:
      return []
  }
}

const router = (workspace: string) => {
  switch (workspace) {
    case workspaceName.ECOMMERCE:
      return createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Recap />,
            },
            {
              path: "/insights",
              element: <Insights />,
            },
          ],
        },
      ])
    case workspaceName.RETAIL:
      return createBrowserRouter([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              path: "",
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
    default:
      return createBrowserRouter([])
  }
}

export default function AppRouter() {
  const { workspace } = useWorkspaceStore()
  return <RouterProvider router={router(workspace)} />
}
