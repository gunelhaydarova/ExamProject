import React from "react";
import './Card.css';
import avatar from '../../assets/card_img.png';
import look from '../../assets/card_look.png';
import mail from '../../assets/card_mail.png';

function test() {
    window.location.href = "/info";
}

class UserInformation extends React.Component {

    render() {

        return (
            <div id="card">
                <div className="personal">

                    <Avatar image={avatar}/>
                    <NameHolder name={this.props.name} career={this.props.career}/>

                </div>
                <Info structur={this.props.structur} positions={this.props.positions}/>
                <Direct mail={this.props.mail} look={this.props.look}/>

            </div>
        );
    }
}

function Direct(props) {
    return (
        <div className="direct">
            <button><img src={mail}/> {props.mail}</button>

            <button onClick={test}><img src={look}/> {props.look}</button>
        </div>
    );
}


function Avatar(props) {
    return (
        <div className="avatar">
            <img src={props.image} alt="user avatar"/>
        </div>
    );
}

function NameHolder(props) {
    const colors = ['#826CFC', '#0085FF', '#095f21', '#D5A707'],
        bgcolors = ['#F2F0FE', '#C0E8FF', '#D7FFE2', '#FFF9C7'];

    return (
        <div className="nameHolder">
            <h1>{props.name}</h1>
            <h2>{props.career}</h2>
            {colors.map((a, i) => <span className={'design_num'}
                                        style={{color: colors[i], backgroundColor: bgcolors[i]}}
                                        key={i}>   2222 </span>)}

        </div>
    );
}

function Info(props) {
    return (
        <div className="info">
            <div className={'card_leftside'}>
                <p> Struktur</p>
                <span>  {props.structur}</span>
            </div>
            <div className={'card_rightside'}>
                <p> Vəzifə</p>
                <span>{props.positions}</span>
            </div>

        </div>
    );
}

export default UserInformation;