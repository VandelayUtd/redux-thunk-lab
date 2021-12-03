// write your CatList component here
import React from "react"

const CatList = (props) => {

    const cats = props.catPics.map((cat) => {
        return (
            <li key={cat.id}>
                <img src={cat.url} alt="cat pic"/>
            </li>
        )
    })

    return (
        <div>{cats}</div>
    )
}

export default CatList