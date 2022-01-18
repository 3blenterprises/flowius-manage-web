
import React from "react";
 
const sample = () => {
    return(
    <div>
        <h1>Abebe Beso Bela</h1>
        </div>
    )
}
export default sample

// import { Route, Switch, Redirect } from "react-router-dom";
// import NotificationAlert from "react-notification-alert";
// import PerfectScrollbar from "perfect-scrollbar";

// // core components
// import AdminNavbar from "../../components/Navbar/AdminNav";
// // import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";


// import routes from "../../routes";

// import logo from "assets/img/flowius-pay.png";
// import Sidebar from "../../components/SIdebar/Sidebar";



// var ps: PerfectScrollbar;

// class Gedion extends React.Component {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             backgroundColor: "blue",
//             user: JSON.parse(window.localStorage.getItem('auth-user')),
//             sidebarOpened:
//                 document.documentElement.className.indexOf("nav-open") !== -1
//         };
//     }


//     componentDidMount() {
//         if (navigator.platform.indexOf("Win") > -1) {
//             document.documentElement.className += " perfect-scrollbar-on";
//             document.documentElement.classList.remove("perfect-scrollbar-off");
//             ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
//             let tables = document.querySelectorAll(".table-responsive");
//             for (let i = 0; i < tables.length; i++) {
//                 ps = new PerfectScrollbar(tables[i]);
//             }
//         }
//     }


//     componentWillUnmount() {
//         if (navigator.platform.indexOf("Win") > -1) {
//             ps.destroy();
//             document.documentElement.className += " perfect-scrollbar-off";
//             document.documentElement.classList.remove("perfect-scrollbar-on");
//         }
//     }


//     componentDidUpdate(e) {
//         if (e.history.action === "PUSH") {
//             if (navigator.platform.indexOf("Win") > -1) {
//                 let tables = document.querySelectorAll(".table-responsive");
//                 for (let i = 0; i < tables.length; i++) {
//                     ps = new PerfectScrollbar(tables[i]);
//                 }
//             }
//             document.documentElement.scrollTop = 0;
//             document.scrollingElement.scrollTop = 0;
//             this.refs.mainPanel.scrollTop = 0;
//         }
//     }


//     // this function opens and closes the sidebar on small devices
//     toggleSidebar = () => {
//         document.documentElement.classList.toggle("nav-open");
//         this.setState({ sidebarOpened: !this.state.sidebarOpened });
//     };


//     getRoutes = routes => {
//         return routes.map((prop, key) => {
//             if (prop.layout === "/admin") {
//                 return (
//                     <Route
//                         path={prop.layout + prop.path}
//                         component={prop.component}
//                         key={key}
//                     />
//                 );
//             } else {
//                 return null;
//             }
//         });
//     };

//     handleBgClick = color => {
//         this.setState({ backgroundColor: color });
//     };


//     getBrandText = path => {
//         for (let i = 0; i < routes.length; i++) {
//             if (
//                 this.props.location.pathname.indexOf(
//                     routes[i].layout + routes[i].path
//                 ) !== -1
//             ) {
//                 return routes[i].name;
//             }
//         }
//         return "Brand";
//     };


//     render() {
//         return (
//             <>
//                 <NotificationAlert ref="notificationAlert" />
//                 <div className="wrapper">
//                     <Sidebar
//                         {...this.props}
//                         routes={routes}
//                         bgColor={this.state.backgroundColor}
//                         logo={{
//                             innerLink: "/",
//                             text: "Flowius Pay",
//                             imgSrc: logo
//                         }}
//                         toggleSidebar={this.toggleSidebar} />
//                     <div
//                         className="main-panel"
//                         ref="mainPanel"
//                         data={this.state.backgroundColor}
//                     >
//                         <AdminNavbar
//                             {...this.props}
//                             brandText={this.getBrandText(this.props.location.pathname)}
//                             toggleSidebar={this.toggleSidebar}
//                             sidebarOpened={this.state.sidebarOpened}
//                         />
//                         <Switch>
//                             {this.getRoutes(routes)}
//                             <Redirect from="*" to="/admin/dashboard" />
//                         </Switch>
//                         {// we don't want the Footer to be rendered on map page
//                             this.props.location.pathname.indexOf("maps") !== -1 ? null : (
//                                 <Footer fluid />
//                             )}
//                     </div>
//                 </div>
//                 {/* <FixedPlugin
//           bgColor={this.state.backgroundColor}
//           handleBgClick={this.handleBgClick}
//         /> */}
//             </>
//         );
//     }
// }

// export default Gedion;
