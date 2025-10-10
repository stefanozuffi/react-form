import { useState } from "react";
import articles from "../data/articles";
import AppList from "./AppList";

//To add: online badge; category

const initialForm = {
    id: 0, 
    title: '', 
    description: '', 
    category: 'Anything', 
    online: false
}

export default function AppForm() {
    const [article, setArticle] = useState(initialForm)
    const [journal, setJournal] = useState(articles)

    //Accordion states
    const [current, setCurrent] = useState(0)

    //OnSubmit function
    function handleSubmit(e) {
        e.preventDefault()

        if (article.title.length >= 3) {
            const maxID = journal.length > 0 ? Math.max(...journal.map(article => article.id)) : 0
            
            const newArticle = {...article, id: maxID+1}

            const newJournal = [newArticle, ...journal]
            setJournal(newJournal)
        } 
        else {
            alert('Article Title should be at least three characters long')
        }

        setArticle(initialForm) 

        
    }

    //Delete Function
    function handleDelete(e) {
        setJournal(journal.filter(article => article.id !== parseInt(e.currentTarget.getAttribute('data-id'))))
    }

    //Accordion Function
    function handleAcc(e) {
        const id = parseInt(e.target.getAttribute('data-id'))
        if (id !== current) {
            setCurrent(id)
        } else {
            setCurrent(0)
        }
    }

    return(
        <div className="container d-flex justify-content-around gap-5">
            <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>

            {/* Title */}
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={article.title} 
                        placeholder="Type an article title" 
                        onChange={(e) => setArticle({...article, title: e.target.value})}
                    />
                </div>

            {/* Categories */}
                <div className="mb-3">
                    <select name="category" id="category" value={article.category} onChange={(e) => setArticle({...article, category: e.target.value})}>
                        <option value="FrontEnd">FrontEnd</option>
                        <option value="BackEnd"> BackEnd</option>
                        <option value="FullStack">FullStack</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Anything">Any Topic</option>
                    </select>
                </div>
                
            {/* Description */}
                <div className="mb-3">
                    <textarea 
                    name="description" id="description" rows="3" 
                    placeholder="Write summary of the article (Optional)"
                    value={article.description} onChange={(e) => setArticle({...article, description: e.target.value})}/>
                </div>
            {/* CheckBox */}
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="online" id="online"
                    checked={article.online} onChange={(e) => setArticle({...article, online: e.target.checked})}/>
                    <label className="form-check-label" htmlFor=""> Publish Online </label>
                </div>

                <button className="btn btn-dark" type="submit">Add</button>
            </form>
            <AppList list={journal} handleF={handleDelete} AccF={handleAcc} current={current}/>
        </div>
    )
    
    
}