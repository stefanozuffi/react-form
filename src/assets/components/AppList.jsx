import CloudLogo from '../../icons/cloud-check-fill.svg'
import DeleteBtn from "./DeleteBtn"
import ListElement from "./ListElement"

export default function AppList(props) {
    return(
        <div className='list-group'>
            <div className="search-bar">
                <input type="text" className='form-control filter-input' placeholder='Filter Results' onChange={props.handleChange} />
            </div>
           
                    <ul className="articles-list">
                        
                        {props.list.map(article => 

                        <li className="article-li d-flex flex-column" key={article.id}>
                            
                                <div className="article-head d-flex justify-content-between align-items-center gap-4">
                                    <ListElement title={article.title} id={article.id} AccF={props.AccF} current={props.current} category={article.category} online={article.online}/>
                                    
                                    <DeleteBtn id={article.id} handleF={props.handleF}/>

                                </div>
                                
                                {props.current === article.id && <p>{article.description}</p>}
                        
                
                        </li>


                    )}
                    </ul>
            
        </div>
    )
}