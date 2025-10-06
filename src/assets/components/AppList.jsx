import articles from "../data/articles"
import DeleteBtn from "./DeleteBtn"
import ListElement from "./ListElement"

export default function AppList(props) {
    return(
        <ul className="articles-list">
            {props.list.map(article => 

            <li className="d-flex flex-column" key={article.id}>
                <div className="article-head d-flex justify-content-between align-items-center">
                    <ListElement title={article.title} id={article.id} AccF={props.AccF} current={props.current}/>
                    <DeleteBtn id={article.id} handleF={props.handleF}/>
                </div>
                
                {props.current == article.id && <p>{article.content}</p>}
            </li>


            )}
        </ul>
    )
}