import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedNavbar from "./Components/views/navbars/AuthenticatedNavbar";
import Navbar from "./Components/views/navbars/Navbar";
import UsersPosts from "./Components/views/posts/private/UsersPosts";
import PostsPrivate from "./Components/views/posts/private/PostsPrivate";
import Posts from "./Components/views/posts/public/Posts";
import NonPrivateRoutes from "./Components/views/routeComponents/NonPrivateRoutes";
import PrivateRoutes from "./Components/views/routeComponents/PrivateRoutes";
import Home from "./Components/views/users/Home";
import UsersPostsNavbar from "./Components/views/navbars/UsersPostsNavbar";

function App() {
    return (
        <Router className="App">
            <NonPrivateRoutes exact path="/" component={Navbar} />
			<NonPrivateRoutes exact path="/" component={Posts} />
			<NonPrivateRoutes exact path="/home" component={Home} />
            <PrivateRoutes exact path="/posts" component={AuthenticatedNavbar} />
			<PrivateRoutes exact path="/posts" component={PostsPrivate} />
            <PrivateRoutes exact path="/user-posts" component={UsersPostsNavbar} />
            <PrivateRoutes exact path="/user-posts" component={UsersPosts} />
        </Router>
    );
}

export default App;
