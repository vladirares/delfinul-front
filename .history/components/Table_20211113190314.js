import Row from "./Row";
import { useState, useEffect } from 'react';
function Table({size}){

    useEffect(() => {
        const [array, setArray] = useState(null);
        async function getToken() {
            const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
            setArray(await res.json())
        }
    }
    return (<table>
        {array.map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}


export default Table;