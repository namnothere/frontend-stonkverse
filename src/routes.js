// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Users from "layouts/users";
import Course from "layouts/course";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import Payment from "layouts/payment/Payment";
import AddCourse from "layouts/addCoursePage/index";
import Post from "layouts/post/Post";// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import SignUp from "layouts/authentication/sign-up";
import PostDetail from "layouts/post/components/PostDetail";  
import AddPost from "layouts/post/components/AddPost";    
import PostAddIcon from "@mui/icons-material/PostAdd";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const routes = [

  { type: "title" },

  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="16px" />,
    component: <Dashboard />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Users",
    key: "users",
    route: "/users",
    icon: <Office size="16px" />,
    component: <Users />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Course",
    key: "course",
    route: "/course",
    icon: <MenuBookIcon size="16px" />,
    component: <Course />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Post",
    key: "post",
    route: "/post",
    icon: <PostAddIcon size="16px" />,
    component: <Post />,
    noCollapse: true,
  },

  {
    route: "/postdetail/:postId",
    component: <PostDetail />,
    noCollapse: true,
  },

  {
    route: "/addpost",
    component: <AddPost />,
    noCollapse: true,
  },

  {
    route: "/addcourse",
    component: <AddCourse />,
    noCollapse: true,
  },
  
  {
    type: "collapse",
    name: "Payment",
    key: "payment",
    route: "/payment",
    icon: <CreditCard size="16px" />,
    component: <Payment />,
    noCollapse: true,
  },
 {
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="16px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <SpaceShip size="16px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="16px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
