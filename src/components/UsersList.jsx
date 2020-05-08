import React, { Fragment } from 'react'
import './usersLists.css'
export default function UsersList({login, avatar_url, repos_url}) {
    return (
            <Fragment>
                <div className="card" style={{width: '280px'}}>
                    <img src={avatar_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{login}</strong></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href={repos_url}>Repository</a></li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </Fragment>
    )
}
