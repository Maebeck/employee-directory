import React from 'react';


function Table(props) {
    return (
        <table className = 'eTable'>
            <head>
                <tr>
                    <th scope="col"><button onClick={() => props.handleSort('picture[thumbnail]')} className='btn'> Image </button></th>
                    <th scope="col"><button onClick={() => props.handleSort('name[first]')} className='btn'>Name</button></th>
                    <th scope="col"><button onClick={() => props.handleSort('dob[date]')} className='btn'>DOB</button></th>
                    <th scope="col"><button onClick={() => props.handleSort('email')} className='btn'>Email</button></th>
                    <th scope="col"><button onClick={() => props.handleSort('phone')} className='btn'>Phone</button></th>
                </tr>


            </head>
        </table>
    )
}

export default Table;