
import React, { useState } from 'react';


export const AddTask = ({ addItem }) => {


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (title === "" || desc === "") { alert("Title and Description fields cant be empty") }
        else {
            addItem(title, desc);
            setTitle("");
            setDesc("");
        }
    }


    return (
        <div className="container my-3 ">
            <h3 className="text-center">Add a Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label" >Description</label>
                    <input type="test" className="form-control" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-sm btn-success" >Submit</button>
            </form>
        </div>
    )
}
