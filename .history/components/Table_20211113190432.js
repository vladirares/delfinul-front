import Row from "./Row";
import { useState, useEffect } from 'react';
function Table({size}){
    console.log(size)
    const [array, setArray] = useState([]);
    useEffect(() => {
        console.log(73)
        async function getToken() {
            const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
            setArray(await res.json())
            console.log(arr)
        }
    })
    return (<table>
        {array.map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}


export default Table;