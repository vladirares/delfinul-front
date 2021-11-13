import Row from "./Row";

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
    
    const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
    const array = await res.json()
  
    return {array}
  }
  



export default Table;