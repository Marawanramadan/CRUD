import React ,{Component} from 'react'

 class productDetails extends Component{
    clickHandler = ()=>{
        this.props.history.replace('/cart')
    }

    render(){
        const product = this.props.products.filter(p =>{
            return p.id === parseInt(this.props.match.params.id)
        })[0]
        console.log(product)
        return(
            <div className="container">
                <p>{product.name}</p>
                <p>{product.quantity}</p>
                <button className="btn btn-primary" onClick={this.clickHandler}>Save</button>
            </div>
        )
    }
  
}

export default productDetails