import deleteIcon from '../../icons/x-octagon.svg'

export default function DeleteBtn(props) {

    return(
        <button data-id={props.id} onClick={props.handleF} className="btn btn-delete">
            <img src={deleteIcon} alt="Delete Logo"/>
        </button>
    )
}