import React, {Component} from 'react'
const axios = require('axios')
class TeacherDash extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:[]
        }
    }
    componentDidMount(){
        this.showUser()
    }
    showUser(){
        console.log('inside the show user function')
        const userID = this.props.account.sub
        console.log(userID)
        const userToShow = {auth0:userID}

        axios({
            method: 'POST',
            url: 'api/teacher/' + userID,
            data: userToShow})
            .then(response => {
                console.log(response)
            })

    }

    render(){
        const firstName = this.props.account.given_name
        console.log(firstName)
        return(
            <div className="teacherDash">

            </div>
        )
    }
}

export default TeacherDash