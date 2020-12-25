import "./Sidebar.css";
import Vector from "../../assets/Vector.png";
import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/email.png";
import Vector4 from "../../assets/Vector 4.png";
import Vector5 from "../../assets/Vector 5.png";
import Vector6 from "../../assets/deals.png";
import Vector7 from "../../assets/Vector 7.png";
import user from "../../assets/image 2.png";

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={user} alt="logo"/>
                    <div>
                        <h3>Pasha Life</h3>
                        <span>Pashalife@mail.com</span>
                    </div>

                </div>
                <i
                    onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                />
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <img src={Vector} alt="Dashboard" className={'sidebar__icon active'}/>
                    <a href="/"> Dashboard </a>
                </div>
                <div className="sidebar__link">
                    <img src={Vector2} alt="Dashboard" className={'sidebar__icon'}/>
                    <a href="">Tasks</a>
                </div>
                <div className="sidebar__link">
                    <img src={Vector3} alt="Dashboard" className={'sidebar__icon'}/>
                    <a href="">Email</a>
                </div>
                <div className="sidebar__link">
                    <img src={Vector4} alt="Dashboard" className={'sidebar__icon'}/>
                    <a href="">Contacts</a>

                </div>
                <div className="sidebar__link">
                    <img src={Vector5} alt="Dashboard" className={'sidebar__icon'}/>
                    <a href="">Chat</a>
                </div>
                <div className="sidebar__link">
                    <img src={Vector6} alt="Dashboard" className={'sidebar__icon'}/>
                    <a href="">Deals</a>
                </div>
                <hr/>
                <div className="sidebar__link">
                    <img src={Vector7} alt="Dashboard" className={'sidebar__icon'}/>
                    <a href="">Settings</a>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
