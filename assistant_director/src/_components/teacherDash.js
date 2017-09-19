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
        const userToken = this.props.accessToken
        const userToShow = {auth0 : userToken}
        const jsonUserToShow = JSON.stringify(userToShow)

        axios({
            method: 'POST',
            url: 'api/teacher/' + userToken,
            data:userToShow
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