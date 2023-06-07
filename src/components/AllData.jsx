import React from 'react';

const AllData = (props) => {
    // console.log('Props: ', props);
    return (
        <div className='allData'>
            <h1>{props.someProp}</h1>
            {props.children}
        </div>
    );
}

export default AllData;