import Dashboard from "views/Dashboard.jsx";
import Map from "views/Map.jsx"
import ExpensePage from './views/Expense';
import ReportsPage from './views/Reports';
import ExpensePageList from './views/ExpnesesPage';
import HouseHoldPage from "./views/HouseHoldPage";
import ProvisionalCustomers from "./components/Customers/previsional";
import BankBalance from "./views/BankBalance";

var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/household",
        name: "Customers",
        rtlName: "طباعة",
        icon: "tim-icons icon-single-02",
        component: HouseHoldPage,
        layout: "/admin"
    },
    {
        path: "/revenue",
        name: "Revenue",
        rtlName: "الرموز",
        icon: "tim-icons icon-money-coins",
        component: ExpensePage,
        layout: "/admin"
    },
    {
        path: "/expenses",
        name: "Expenses",
        rtlName: "إخطارات",
        icon: "tim-icons icon-notes",
        component: ExpensePageList,
        layout: "/admin"
    },
    {
        path: "/bankbalance",
        name: "Saving Balance",
        rtlName: "طباعة",
        icon: "tim-icons icon-credit-card",
        component: BankBalance,
        layout: "/admin"
    },
    {
        path: "/user-profile",
        name: "Reports",
        rtlName: "ملف تعريفي للمستخدم",
        icon: "tim-icons icon-paper",
        component: ReportsPage,
        layout: "/admin"
    },
    {
        path: "/map",
        name: "Map",
        rtlName: "خرائط",
        icon: "tim-icons icon-map-big",
        component: Map,
        layout: "/admin"
    },


    {
        path: "/typography",
        name: "Project Settings",
        rtlName: "طباعة",
        icon: "tim-icons icon-settings-gear-63",
        component: Dashboard,
        layout: "/admin"
    },

    {
        path: "/provisional",
        component: ProvisionalCustomers,
        layout: "/admin"
    }
];
export default routes;
