import React, { Component} from 'react';


export default class Registration extends Component {
    constructor(props){
       super(props);

       this.state = {
           email: "",
           password: "",
           password_confirmation : "",
           registrationErrors: ""
       }
    }

     handleSubmit = ()=>{
       console.log("form submitted");
       event.preventDefault();
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
              </form>

            </div>
        )
    }
}