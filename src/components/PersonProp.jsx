import React from "react";

const PersonProp = ({ name, description }) => {

    console.log('Props:', { name, description })

    return (
        <div className="personProp">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

console.log(<PersonProp name='Железный Человек' description='Железный Человек - это Тони Старк, гениальный изобретатель и миллиардер.' />);

export default PersonProp;