export default function ListElement(props) {
    return(
        <div className={`article d-flex flex-column gap-4 ${props.category === 'UI/UX Design' ? 'UIUX' : props.category}`} key={props.id}>
             <h8>{props.category}</h8>
            <h6 className={`head-text ${props.current == props.id ? 'active' : ''} `} onClick={props.AccF} data-id={props.id}> {props.title} </h6>
        </div>
    )
}