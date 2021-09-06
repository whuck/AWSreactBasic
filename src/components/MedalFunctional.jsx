import {Stars} from '@material-ui/icons';

const Medal = (props) =>  {
    let c = props.medalType;
    let color = "";
    switch(c){
        case "b": color = "Sienna";break;
        case "s": color = "Silver";break;
        case "g": color = "DarkGoldenRod";break;
        default: color = "lime";break;
    }
    return (
        <span>
            <Stars style={{color: color, fontSize:40}}></Stars>
        </span>
    );
}

export default Medal;