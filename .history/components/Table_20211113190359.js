import Row from "./Row";
import { useState, useEffect } from 'react';
function Table({size}){
    console.log(size)
    const [array, setArray] = useState([]);
    useEffect(() => {
        
        async function getToken() {
            const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
            setArray(await res.json())
        }
    })
    return (<table>
        {array.map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}


export default Table;