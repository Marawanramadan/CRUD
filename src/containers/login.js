import React ,{Component}from 'react'
import joi from 'joi-browser'
class Login extends Component{
    state={
        username:"",
        password :"",
        errors: {}
    }
    schema = {
        username:joi.string().required().min(3),
        password: joi.string().required()
    }
    submitHandler = (event) =>{
        event.preventDefault()
        let errors = this.validate()
        if (errors) return
    }

    validate = ()=>{
        const errors = {}
        const state = {...this.state}
        delete state.errors
       const res = joi.validate(state,this.schema,{abortEarly:false})
       if(res.error ===null) {
           this.setState({errors: {}})
           return null
        } 
       for(const error of res.error.details){
        errors[error.path] = error.message
       }
       this.setState({errors})
    }
    changeHandler = (event) =>{
        let state = {...this.state}
        state[event.currentTarget.name] = event.currentTarget.value
        this.setState(state)
    }
    render(){
        return (
            <div className="container">
            <h1>Login</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input onChange={this.changeHandler} name="username" type="text" className="form-control" id="username" aria-describedby="emailHelp"></input>
                    {this.state.errors.username && <div className="alert alert-danger">
                        {this.state.errors.username}
                    </div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={this.changeHandler} name="password" type="password" className="form-control" id="password"></input>
                        {this.state.errors.password && <div className="alert alert-danger">
                            {this.state.errors.password}
                        </div>}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login
