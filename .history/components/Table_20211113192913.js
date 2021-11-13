import Row from "./Row";
import { useState, useEffect } from 'react';
function Table(){
    const [array, setArray] = useState([]);
    useEffect(() => {
        async function getArray() {
            const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
            setArray(await res.json())
        }
        console.log(array)
        if(array.length==0)
        {
            getArray()
        }
    })
    return (<table>
        {array.map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}


export default Table;