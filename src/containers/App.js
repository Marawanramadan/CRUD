import React, {Component} from 'react'
import {Route ,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'

import ShoppingCart from '../components/shoppingCart'
import NavBar from '../components/NavBar'
import Menu from '../components/menu'
import contact from '../components/contact'
import about from '../components/about'
import ProductDetails from '../components/details'
import NotFound from '../components/NotFound'
import Login from '../containers/login'
import Admin from '../components/admin'
import Edit from '../components/edit'

class App extends Component{
    state = {
        products : [],
        cart : []

    }
    incrementHandler = (id) =>{
        let cart = [...this.state.cart]
        cart[id] = {...cart[id]}
        cart[id].quantity++
        this.setState({cart})
    }
    deleteHandler = (id)=>{
        let {cart} = this.state
        cart[id].isInCart = false
        cart.splice(id,1)
        this.setState({
            cart
        })
    }
    resetHandler = ()=>{
        let cart = [...this.state.cart]
        cart = cart.map(c =>{
            c.quantity = 0
            return c
        })
        this.setState({cart})
    }
    buyHandler =(id)=>{
        let products = [...this.state.products]
        let cart =[...this.state.cart]
        if(!cart[id]){
            products[id].isInCart = true
            cart.push(products[id])
        }else{
            return
        }
        this.setState({cart})
        console.log(this.state.products[id])

    }
    handleDelete = async product =>{
        await axios.delete('http://localhost:3000/products/'+product.id)
        const products = this.state.products.filter(p=> p.id !== product.id)
        this.setState({products})
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:3000/products')
        this.setState({products : res.data})
        console.log(res.data)
    }
    async componentDidUpdate(){
        const {data} = await axios.get('http://localhost:3000/products')
        this.setState({products:data})
    }


    render(){
        let routes = (
            <Switch>
                <Route path="/products/:id" render={(props)=><ProductDetails products={this.state.products}  {...props}/>}></Route>
                <Route path="/cart" render={()=><ShoppingCart   
                                                    products={this.state.cart} 
                                                    increment={this.incrementHandler} 
                                                    reset={this.resetHandler} 
                                                    deleted={this.deleteHandler}/>}></Route>
                <Route exact path="/" render={()=><Menu 
                                                    products={this.state.products} 
                                                    buy={this.buyHandler}></Menu>}></Route>
                <Route path="/admin" render={(props)=><Admin
                                                    products={this.state.products} {...props}
                                                    deleted={this.handleDelete}></Admin>}></Route>
                <Route path="/productform/:id" render={(props) =><Edit {...props}></Edit>}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/notfound" component={NotFound}></Route>
                <Route path="/about" component={about}></Route>
                <Route path="/contact" component={contact}></Route>
                <Redirect to='/notfound'></Redirect>


            </Switch>
        )
        return(
           <React.Fragment>
               <NavBar items={this.state.cart.filter(i => i.quantity> 0).length}></NavBar>
               {routes}

           </React.Fragment>
        )
    }
}

export default App