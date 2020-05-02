//jshint esversion: 9
import React from 'react';

const List = ({listText, onChecked, id}) => {
    return (
        <li onClick={()=>{onChecked(id)}}>{listText}</li>
    );

};
export default List;