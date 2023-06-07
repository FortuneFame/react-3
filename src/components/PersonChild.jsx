import React from "react";

const PersonChild = ({ children }) => {
    // console.log(children);
    return (
        <div className="personChild">
            <h1>Железный Человек</h1>
            {children}
        </div>
    )
}

// console.log(
//     <PersonChild>
//         <p>Железный Человек - это Тони Старк, гениальный изобретатель и миллиардер.</p>
//     </PersonChild>
// )

export default PersonChild;