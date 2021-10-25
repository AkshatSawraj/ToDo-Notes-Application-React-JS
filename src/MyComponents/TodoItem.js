import React from 'react'

export const TodoItem = ({ item, onDelete}) => {


    return (
        <div>

            <div className="alert alert-primary" role="alert">
                {item.sno} {item.title} {item.description}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-danger btn btn-primary" type="button" onClick={()=>{onDelete(item)}}>Delete</button>
                </div>
                
            </div>





        </div>
    )
}
