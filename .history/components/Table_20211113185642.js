import Row from "./Row";

function Table({size}){
    return (<table>
        {await.map((object,index) => <Row row={object} key={index}/> )}
    </table>);
}

export async function getServerSideTable(size) {
    
    const res = await fetch('http://localhost:8080/public/generate/board?size=' + size)
    const array = await res.json()
  
    return array
  }
  

  const res = await fetch('http://localhost:8080/public/generate/board?size=40')
  const array = await res.json()

  // Pass data to the page via props
  return { props: { array } }


export default Table;