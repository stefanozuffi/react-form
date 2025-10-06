import articles from "../data/articles"
import ListElement from "./ListElement"

export default function AppList() {
    return(
        <ul className="articles-list">
            {articles.map(article => <ListElement title={article.title} id={article.id}/>)}
        </ul>
    )
}