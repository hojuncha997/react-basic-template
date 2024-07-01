import { PATH_DASHBOARD } from "../../../routes/paths";

const navConfig = [
    {
        subheader: '로그인',
        items: [
            {
                title: '로그인',
                path: PATH_DASHBOARD.APP,
                // icon: ICONS.dashboard,
            }],
        
    },
    {
        subheader: 'PRODUCT',
        items: [{
            title: '상품목록',
            path: PATH_DASHBOARD.product.root,
            // icon: ICONS.product,
        }],






    },
];

export default navConfig;


/*
 {
    subheader: '매출관리',
    items: [
      {
        title: '전체매출정보',
        path: PATH_DASHBOARD.salesDashboard.root,
        icon: ICONS.dashboard,
      },
      {
        title: '매출내역',
        path: PATH_DASHBOARD.salesMgmt.root,
        icon: ICONS.invoice,
        children: [
          { title: '일별 매출내역', path: PATH_DASHBOARD.salesMgmt.salesPerDayList },
          { title: '월별 매출내역', path: PATH_DASHBOARD.salesMgmt.salesPerMonthList },
        ],
      },
      {
        title: '매출정보설정',
        path: PATH_DASHBOARD.salesInfoSetting.root,
        icon: ICONS.banking,
      },
    ],
  },

  */