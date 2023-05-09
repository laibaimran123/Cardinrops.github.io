import React from 'react'

const Card = (props) => {
    return (
        <>
        <div class="">
            <div class="card border border-2 border-dark p-3 m-4 newm " >
                <img src={props.img} class="card-img-top " alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.descrip}</p>
                    <a href="//" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card
