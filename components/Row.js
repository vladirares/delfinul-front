import Cell from "./Cell";

function Row(props){
    return (<tr>
        {props.row.map((object,index) => <Cell obj={object} key={index}/> )}
    </tr>);
}

export default Row;