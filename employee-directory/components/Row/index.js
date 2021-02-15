import React from 'react';

function Row() {
    console.log(props);
    return (
        <tr>
            <td><img src ={props.employee.picture.thumbnail} alt = {props.employee.name.first}></img></td>
            <td>{props.employee.name.first} {props.employee.name.last}</td>
            <td>{props.employee.phone}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.dob.date}</td>
        </tr>
    )
}

export default Row;