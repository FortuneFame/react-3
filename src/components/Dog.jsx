import React from "react";
import ReactDOMServer from 'react-dom/server';

const Dog = () => {
    
    return React.createElement('div', { className: 'dog'},
        React.createElement('img', { src: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277414_640.jpg', alt: 'dog', width: '300' }),
        // eslint-disable-next-line no-multi-str
        React.createElement('p', null, 'Собака выглядит как молодой питомец среднего размера.\
        У нее гладкая короткая шерсть, которая придает ей аккуратный и ухоженный внешний вид.\
        Собака имеет окрас с яркими коричневыми оттенками.Ее глаза яркие и проницательные, \
        карие или темно-коричневые, что придает ей выразительность и интеллигентный взгляд.\
        В целом, собака на фотографии выглядит очаровательной, жизнерадостной и готовой принести много радости своим владельцам.')
    ) 
};  

console.log(<Dog />);
console.log(ReactDOMServer.renderToString(<Dog />));

export default Dog;