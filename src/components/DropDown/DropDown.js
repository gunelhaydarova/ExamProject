import React, {useState} from "react";
import styled from "styled-components";
import './DropDown.css';

const UL = styled.ul`
  list-style: none;
  margin: 0; 
  padding: 0;
  background: #FFFFFF;
  box-shadow: 0.648305px 1.94492px 7.77966px rgba(0, 0, 0, 0.03);
  border-radius: 11.6695px;
`;
const LI = styled.li``;
const Item = styled.div`
  display: flex;
  padding: 12px 18px;
  padding-left: ${props => `${props.dept * 16}px`};
  align-items: center;
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer; `;
const Arrow = styled.span`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: ' \\005E';
    transform: ${props => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const DropDownMenu = ({menus}) => {
    const [activeMenus, setActiveMenus] = useState([]);

    const handleMenuClick = data => {
        console.log(data);
    };

    const handleArrowClick = menuName => {
        let newActiveMenus = [...activeMenus];

        if (newActiveMenus.includes(menuName)) {
            var index = newActiveMenus.indexOf(menuName);
            if (index > -1) {
                newActiveMenus.splice(index, 1);
            }
        } else {
            newActiveMenus.push(menuName);
        }

        setActiveMenus(newActiveMenus);
    };

    const colors = ['#826CFC', '#0085FF', '#095f21', '#D5A707'],
        bgcolors = ['#F2F0FE', '#C0E8FF', '#D7FFE2', '#FFF9C7'];
    const ListMenu = ({dept, data, hasSubMenu, menuName, menuIndex}) => (

        <LI>

            <Item className={'menu__item'} dept={dept} onClick={() => handleArrowClick(menuName)}>
                <Label className={'menu__label'} onClick={() => handleMenuClick(data)}>{data.label}
                    {colors.map((a, i) => <span className={'design_num'}
                                                style={{color: colors[i], backgroundColor: bgcolors[i]}}
                                                key={i}>   2222 </span>)}
                </Label>
                {hasSubMenu && (
                    <Arrow
                        toggle={activeMenus.includes(menuName)}
                    />
                )}
            </Item>
            {hasSubMenu && (
                <SubMenu
                    dept={dept}
                    data={data.submenu}
                    toggle={activeMenus.includes(menuName)}
                    menuIndex={menuIndex}
                />
            )}
        </LI>
    );

    const SubMenu = ({dept, data, toggle, menuIndex}) => {
        if (!toggle) {
            return null;
        }

        dept = dept + 1;

        return (
            <UL>
                {data.map((menu, index) => {
                    const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

                    return (
                        <ListMenu
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.submenu}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                        />
                    );
                })}
            </UL>
        );
    };

    return (

        <UL>
            <p className={'drop_header'}> Struktur </p>
            {menus.map((menu, index) => {
                const dept = 1;
                const menuName = `sidebar-menu-${dept}-${index}`;

                return (
                    <ListMenu
                        dept={dept}
                        data={menu}
                        hasSubMenu={menu.submenu}
                        menuName={menuName}
                        key={menuName}
                        menuIndex={index}
                    />
                );
            })}
        </UL>
    );
};

export default DropDownMenu;
