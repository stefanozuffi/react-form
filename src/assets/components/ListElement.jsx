export default function ListElement(props) {
    return(
        <div className="article" key={props.id}>
            <h6 className={`head-text ${props.current == props.id ? 'active' : ''} `} onClick={props.AccF} data-id={props.id}> {props.title} </h6>
        </div>
    )
}