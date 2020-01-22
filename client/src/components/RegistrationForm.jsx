import React, { Component} from 'react';
import axios from 'axios';

export default class extends Component {
    constructor(props){
       super(props);

       this.state = {
           email: "",
           password: "",
           username: "",
           password_confirmation : "",
           registrationErrors: ""
       }
    }

     handleSubmit = (event)=>{
        event.preventDefault(); 
        const {
            email,
            password,
            password_confirmation,
            username
        } = this.state;

        axios.post("http://localhost:3001/api/v1/registrations",
        {
            user:{
                email_address: email,
                user_name: username,
                password: password,
                password_confirmation: password_confirmation
            }
        
        }, 
        {
         withCredentials: true
        }).then(
             response => console.log(`response: ${response}`)
        ).catch( error => {
            console.log("registration  error", error )
        }
        )
    


     }

     handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
     }

    render(){
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
               <input type="email" name="email" placeholder="email"
               value={this.state.email}
               onChange={this.handleChange}
               required
               />
           <input
               type="username"
               name="username"
               placeholder="Username"
               value={this.state.username}
               onChange={this.handleChange}
               required
               />

               <input
               type="password"
               name="password"
               placeholder="Password"
               value={this.state.password}
               onChange={this.handleChange}
               required
               />

               <input
               type="password"
               name="password_confirmation"
               placeholder="Password confirmation" 
               value={this.state.password_confirmation}
               onChange={this.handleChange}
               required
               />
               <button type="submit">
                   Registration
               </button>
              </form>

            </div>
        )
    }
}