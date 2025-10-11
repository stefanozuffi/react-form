export default function ListElement(props) {
    return(
        <div className={`article d-flex flex-column gap-4 ${props.category === 'UI/UX Design' ? 'UIUX' : props.category}`} key={props.id}>
            
            <div className="upper-title d-flex gap-2">
                <h8>{props.category}</h8>
                {props.online && 
                    <svg className='online-badge' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                    </svg>}
            </div>
            
            <h6 className={`head-text ${props.current == props.id ? 'active' : ''} `} onClick={props.AccF} data-id={props.id}> {props.title} </h6>
        </div>
    )
}