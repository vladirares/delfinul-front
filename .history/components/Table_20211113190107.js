import Row from "./Row";
import { useState, useEffect } from 'react';
async function Table({size}){

    useEffect(() => {
        async function getToken() {
            const token = await fetchKey(props.auth);
            setToken(token);
        }
    return (<table>
        {(await getServerSideTable(size)).map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}

export async function getServerSideTable(size) {
    
    
  }
  



export default Table;