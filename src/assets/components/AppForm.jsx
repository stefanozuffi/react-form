import { useState } from "react";
import articles from "../data/articles";
import AppList from "./AppList";

export default function AppForm() {
    const [newTitle, setTitle] = useState('')
    const [journal, setJournal] = useState(articles)

    //OnSubmit function
    function handleSubmit(e) {
        e.preventDefault()

        if (newTitle.length >= 3) {
            const maxID = Math.max(...journal.map(article => article.id))
            
            const newArticle = {
                id: maxID + 1,
                title: newTitle,
                content: ''
            }

            const newJournal = [newArticle, ...journal]

            setJournal(newJournal)   
        } 
        else {
            alert('Article Title should be at least three characters long')
        }

        setTitle('') 

        
    }

    return(
        <div className="container">
            <form className="d-flex gap-2" onSubmit={handleSubmit}>
                <input type="text" value={newTitle} placeholder="Type an article title" onChange={(e) => setTitle(e.target.value)}/>
                <button className="btn btn-dark" type="submit">Add</button>
            </form>
            <AppList list={journal}/>
        </div>
    )
    
    
}