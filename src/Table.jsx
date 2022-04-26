import React from "react";

const Table =({data})=>{
    return(
        <div>
            <table style={{display:"inline-block"}}>
                <thead>
                <tr>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((user) =>{
                        return(
                        <tr key ={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
