import articles from "../data/articles"
import DeleteBtn from "./DeleteBtn"
import ListElement from "./ListElement"

export default function AppList(props) {
    return(
        <ul className="articles-list">
            {props.list.map(article => 

            <div className="article-head d-flex justify-content-between align-items-center" key={article.id}>
                <ListElement title={article.title} id={article.id}/>
                <DeleteBtn id={article.id} handleF={props.handleF}/>
            </div>

            )}
        </ul>
    )
}