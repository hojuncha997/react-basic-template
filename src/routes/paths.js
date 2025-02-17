function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

export const PATH_DASHBOARD = {
  ROOT: ROOTS_DASHBOARD,
  APP: path(ROOTS_DASHBOARD, "/login"),

  general: {
    app: path(ROOTS_DASHBOARD, "/app"),
  },

  product: {
    root: path(ROOTS_DASHBOARD, "/product"),
    add: path(ROOTS_DASHBOARD, "/product/add"),
    list: path(ROOTS_DASHBOARD, "/product/list"),
  },

  
};
