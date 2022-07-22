import React, {useState, useEffect} from "react";

import axios from 'axios';

const Poem =() =>{
    const [poems, setPoems] = useState([]);

    useEffect(() => {
        getPoemDetails()
    }, []);
    const getPoemDetails =() =>{
        axios
        .get('http://localhost:8004/poems')
        .then((res)=>{
            console.log(res);
            setPoems(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="poem-container">
                {poems.map((poem) => (
                    <div className="poemDet" key = {poem.id}>
                        <h3>{poem.title}</h3>
                        <p>{poem.content}</p>
                        <p>
                            <strong>{poem.author}</strong>
                        </p>
                        </div>
                ))}
            </div>
            <h1></h1>
        </div>
    )
}

export default Poem;
