import React  from "react";
import "./Main.css";
import UserInformation from "../Card/Card";
import TabMenu from "../Tab/Tab";
import back from '../../assets/log_out.png'
function BackHome() {
    window.location.href = "/";
}
function Information() {

    return (
        <main>
            <div className="tab_menu main__container">
                <div className="main__title back" onClick={BackHome}>
                    <button className={'btn btn__back'}  >  <img src={back}/> </button> Geri qayıt
                </div>
                <div className={'main__body'}>
                    <UserInformation
                        name="Toghrul Rajab"
                        career="toghrulrajab@gmail.com"     projects="222"
                        structur="Marketinq" positions ="Direktor" look="Bax" mail="Mail at"
                    />
                    <TabMenu/>
                </div>
            </div>
        </main>
    );
};

export default Information;
