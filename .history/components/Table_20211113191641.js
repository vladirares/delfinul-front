import Row from "./Row";
import { useState, useEffect } from 'react';
function Table({size}){
    const [array, setArray] = useState([]);
    console.log(array);
    useEffect(() => {
        async function getArray() {
            const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
            setArray(await res.json())
        }
        
        if(array==[])
        {console.log(1000);
            getArray()
        }
    })
    return (<table>
        {array.map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}


export default Table;