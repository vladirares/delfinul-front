import Row from "./Row";
import { useState, useEffect } from 'react';
function Table({size}){
    console.log(1)
    const [array, setArray] = useState([]);
    useEffect(() => {
        async function getArray() {
            const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
            setArray(await res.json())
        }
        getArray();
    })
    return (<table>
        {array.map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}


export default Table;