export default function ListElement(props) {
    return(
        <li className="article" key={props.id}>
            {props.title}
        </li>
    )
}