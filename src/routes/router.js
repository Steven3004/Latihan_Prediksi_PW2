import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/main-layout";


const router = createBrowserRouter([
  {
    path : "/",
    Component : MainLayout,
    children : [
        {
            index : true,
            lazy : {
                Component : async () => {
                    const Component = await import("../pages/predict-diabetes/predict-diabetes-page")

                    return Component.default;
                }
            }
        }
    ]
  }

])

export default router;