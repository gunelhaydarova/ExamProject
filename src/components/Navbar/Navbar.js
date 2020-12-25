import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import notification from "../../assets/notification.png";

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <img src={notification} alt="notification" className="notification"/>
                </a>

                <a href="#!">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
