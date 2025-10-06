import articles from "../data/articles"
import ListElement from "./ListElement"

export default function AppList(props) {
    return(
        <ul className="articles-list">
            {props.list.map(article => <ListElement title={article.title} id={article.id} key={article.id}/>)}
        </ul>
    )
}