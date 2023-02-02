import{ Routes, Route,BrowserRouter} from "react-router-dom";
import Private  from "./Private.js";
import Public from "./Public.js";
import AdminLogin from "../screens/AdminLogin";
import Products from "../screens/dashboard/Product";
import Categories from "../screens/dashboard/Categories.js";
import CreateCategories from "../screens/dashboard/CreateCategory.js";
import UpdateCategories from "../screens/dashboard/UpdateCategory";
import EditProduct from "../screens/dashboard/EditProduct.js";
import CreateProduct from "../screens/dashboard/CreateProduct.js";
import Home from "../screens/home/Home.js";
import Login from "../screens/home/auth/Login.js";
import Register from "../screens/home/auth/Register.js";
import Dashboard from "../screens/users/Dashboard.js";
import UserRoute from "./UserRoute";
import SearchProducts from "../screens/home/homeProducts.js";
import UserAuthRoute from "./UserAuthRoute";
import CatProducts from "../screens/home/CatProducts.js";
import Product from "../screens/home/Product.js";
import Cart from "../screens/home/Cart.js";
import Orders from "../screens/dashboard/Orders.js";
import UserOrders from "../screens/users/UserOrders.js";
import UserOrderDetails from "../screens/users/UserOrderDetails.js";
import OrderDetails from "../screens/dashboard/OrderDetails.js";
const Routing =()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="cat-products/:name" element={<CatProducts />} />
            <Route path="cat-products/:name/:page" element={<CatProducts />} />
            <Route path="search-products/:keyword/:page" element={<SearchProducts />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:name" element={<Product />} />
           <Route element={<UserAuthRoute/>}>
           <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
           </Route>
            <Route element={<UserRoute/>}>
            <Route path='user' element={<Dashboard />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="orders/:page" element={<UserOrders />} />
            <Route path="user-order-details/:id" element={<UserOrderDetails />} />
            </Route>
            <Route path="auth">
                <Route path="admin-login" element={<Public> <AdminLogin /> </Public>} />
            </Route>

            <Route path="dashboard">
                <Route path="products" element={<Private> <Products /> </Private>} />
                <Route path="products/:page" element={<Private><Products /></Private>} />
                <Route path="edit-product/:id" element={<Private><EditProduct /></Private>} />
                <Route path="categories" element={<Private> <Categories/> </Private>} />
                <Route path="categories/:page" element={<Private> <Categories/> </Private>} />
                <Route path="create-category" element={<Private> <CreateCategories/> </Private>} />
                <Route path="update-category/:id" element={<Private> <UpdateCategories/> </Private>} />
                <Route path="create-product" element={<CreateProduct />} />
                <Route path="orders" element={<Orders />} />
                <Route path="orders/:page" element={<Orders />} />
                <Route path="order-details/:id" element={<OrderDetails />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Routing;