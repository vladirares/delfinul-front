import Row from "./Row";

function Cell(props){
    return <td>
        {(() => {
        switch (props.obj) {
          case "G":   return <img src="/jpegi/dirt_block.png"/>;
          case "W":   return <img src="/jpegi/water_block.png"/>;
          case "D":   return <img src="/jpegi/dolpintoise.png"/>;
          case "S":   return <img src="/jpegi/player.png"/>;
          case "F":   return <img src="/jpegi/reward.png"/>;
          default:      return "#FFFFFF";
        }
      })()}
    </td>
}

export default Cell;