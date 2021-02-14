import React ,{Component} from 'react'
import axios from 'axios'
class Admin extends Component{
    style = {
        cursor : "pointer"
    }
    editHandler=(id)=>{
        this.props.history.replace('/productform/' + id)

    }
    clickHandler = () => {
        this.props.history.replace('/productform/new')
    }
    
    // async componentDidUpdate(prevProps){
    //     if(this.props.products !== prevProps.products){
    //         const res = await axios.get('http://localhost:3000/products/')
    //         this.props.products = res.data
    //     }
    // }
    render(){

        
    return (
        <div className="container">
            <h1>Admin</h1>
            <button onClick={this.clickHandler} className="btn btn-primary">Add</button>
            <table className="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {this.props.products.map((product,index) =>{
                   return (
                       <tr>
                           <td>{product.name}</td>
                           <td>{product.price}</td>
                           <td><i onClick={()=>this.editHandler(product.id)} style={this.style} className="fas fa-edit"></i></td>
                           <td><i onClick={()=>this.props.deleted(product)} style={this.style} className="fas fa-trash"></i></td>
                       </tr>
                   ) 
                                      
                })}
            </tbody>
            </table>
            
        </div>
    )
}
}

export default Admin