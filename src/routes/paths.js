function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

export const PATH_DASHBOARD = {
  APP: path(ROOTS_DASHBOARD, "/login"),
  ROOT: ROOTS_DASHBOARD,
};
