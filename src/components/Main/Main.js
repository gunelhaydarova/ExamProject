import "./Main.css";
import Test from "../DropDown/Items";
import UserInformation from "../Card/Card";
import StyledTreeExample from "../Card/Treenode";

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <span>Axtarış</span>
                    <form className="search_bar">
                        <input type="text" className="form-control"  placeholder="Ad, Soyad" />
                        <input type="text" className="form-control"  placeholder="Struktur" />
                        <input type="text" className="form-control" placeholder="Vəzifə"/>
                        <input type="submit" className="btn search__button"  value="Axtar" />
                    </form>
                </div>
                <div className={'main__body'}>
                    <Test/>

                    <StyledTreeExample/>
                </div>

            </div>
        </main>
    );
};

export default Main;
