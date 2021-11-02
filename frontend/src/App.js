import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import ProductListScreen from './screens/ProductListScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import { Container } from 'react-bootstrap'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import OrderScreen from './screens/OrderScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import UserListScreen from './screens/UserListScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductEditScreen from './screens/ProductEditScreen'

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<main className='py-3'>
					<Container>
						<Route path='/login' component={LoginScreen} />
						<Route path='/placeorder' component={PlaceOrderScreen} />
						<Route path='/order/:id' component={OrderScreen} />
						<Route path='/shipping' component={ShippingScreen} />
						<Route path='/payment' component={PaymentScreen} />
						<Route path='/profile' component={ProfileScreen} />
						<Route path='/register' component={RegisterScreen} />
						<Route path='/product/:id' component={ProductScreen} />
						<Route path='/cart/:id?' component={CartScreen} />
						<Route path='/admin/userList' component={UserListScreen} />
						<Route
							exact
							path='/admin/productList'
							component={ProductListScreen}
						/>
						<Route
							exact
							path='/admin/productList/:pageNumber'
							component={ProductListScreen}
						/>
						<Route path='/admin/orderList' component={OrderListScreen} />
						<Route path='/admin/user/:id/edit' component={UserEditScreen} />
						<Route
							path='/admin/product/:id/edit'
							component={ProductEditScreen}
						/>
						<Route exact path='/search/:keyword' component={HomeScreen} />
						<Route
							exact
							path='/page/:pageNumber'
							component={HomeScreen}
							exact
						/>
						<Route
							exact
							path='/search/:keyword/page/:pageNumber'
							component={HomeScreen}
							exact
						/>
						<Route exact path='/' component={HomeScreen} exact />
					</Container>
				</main>
				<Footer />
			</Router>
		</>
	)
}

export default App
