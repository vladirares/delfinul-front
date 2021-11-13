import Row from "./Row";
import { useState, useEffect } from 'react';
async function Table({size}){

    useEffect(() => {
        const [array, setArray] = useState(null);
        async function getToken() {
            const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
            await res.json()
            
        }
    return (<table>
        {(await getServerSideTable(size)).map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}

export async function getServerSideTable(size) {
    
    
  }
  



export default Table;