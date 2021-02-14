import React ,{Component}from 'react'
import axios from 'axios'
class Edit extends Component{
    state={
        id : "",
        name:"",
        price :"",
    }

    async componentDidMount(){
        const id = this.props.match.params.id
        console.log(id)
        if(id !== 'new'){
            const {data} = await axios.get('http://localhost:3000/products/'+ id)
            const state = {...this.state}
            state.name = data.name
            state.price = data.price
            state.id = data.id
            this.setState(state)
        }else{
        }
    }
    submitHandler = async (event) =>{
        event.preventDefault()
        if(this.props.match.params.id === 'new'){
            const obj = {...this.state,isInCart : false}
            await axios.post('http://localhost:3000/products/',obj)
        }
        else{
            const obj = {...this.state,isInCart:false}
            delete obj.id
            await axios.put('http://localhost:3000/products/'+this.state.id,obj)
        }
        
        this.props.history.replace('/admin')

    }

    
    changeHandler = (event) =>{
        let state = {...this.state}
        state[event.currentTarget.name] = event.currentTarget.value
        this.setState(state)
    }
    
    render(){
        return (
            <div className="container">
            <h1>{this.props.match.params.id === "new" ? "Add Product" : "Edit Product"}</h1>

                <form onSubmit={this.submitHandler}>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={this.changeHandler} value={this.state.name} name="name" type="text" className="form-control" id="username" aria-describedby="emailHelp"></input>
                    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input onChange={this.changeHandler} value={this.state.price} name="price" type="text" className="form-control" id="password"></input>
                       
                    </div>
                    <button type="submit" className="btn btn-primary">{this.props.match.params.id === "new" ? "Add" : "Edit"}</button>
                </form>
            </div>
        )
    }
}

export default Edit
