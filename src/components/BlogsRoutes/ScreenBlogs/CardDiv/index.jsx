import { CardWrapper } from "./style";
// import "../../../../api/index.js";
import React from 'react';

const Card = ({repo}) => {
    return (
        <CardWrapper>
            <div className="card" key={repo.id}>
                <div className="card_text">
                    <img src="https://wallpaperaccess.com/full/3909258.jpg" alt="https://i.pinimg.com/originals/56/12/0e/56120e22ba7d514ccaea590486730abe.jpg"></img>
                    <h1 className="a2">{repo.title}</h1>
                    <p className="a2">{repo.body},<br></br></p>
                    <a href="#" className="card_link">reading</a>
                </div>
            </div>
        </CardWrapper>
    )
};
export default Card;


// https://hp-api.herokuapp.com/api/characters