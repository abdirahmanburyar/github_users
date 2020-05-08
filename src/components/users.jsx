import React, { Component, Fragment } from 'react'
import UsersList from './UsersList'
import SearchBox from './SearchBox'
import './usersLists.css'
import axios from 'axios'
export default class Users extends Component {
     state = {
        users: [],
        search: ''
    }
        
    async componentDidMount(){
        const userData = await axios.get('https://api.github.com/users');
        const users = userData.data
        this.setState({ users })
    }
    onChange = e => {
        this.setState({
            search: e.target.value
        })
    }  
    render(){
        const { users, search } = this.state
        const searchUser = users.filter(user => user.login.toLowerCase().includes(search.toLowerCase()))
       console.log(users)
        return (
            <Fragment>
                <h1 className="head">Users</h1>
                <SearchBox onChange={this.onChange} />
                <div className="users">
                    {   !users ? (<div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>) :
                        searchUser && searchUser.length < 0 ? 
                    (<h1 className="not_found">{search.toLowerCase()} no Found</h1>) :
                         searchUser.map(({id, ...userMaps}) => <UsersList key={id} { ...userMaps } /> )
                    }
                </div>
            </Fragment>
    )
}
}