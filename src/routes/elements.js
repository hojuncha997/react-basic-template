import { Children, Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

// export const LoginPage = lazy(() => import("../pages/loginPage"));
export const LoginPage = Loadable(lazy(() => import("../pages/loginPage")));
