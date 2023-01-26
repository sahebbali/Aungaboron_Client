import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { useAuthLoginMutation } from "../store/services/authService";
import { setAdminToken } from "../store/reducers/authReducer";
const AdminLogin = () => {
    const navigete = useNavigate();

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    console.log(state);
 const [login, response]=useAuthLoginMutation();
 console.log( "My response " ,response.error);
 
 const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];

 const adminLoginFunction = e =>{
    e.preventDefault();
    login(state);
 }

    const handelInputs = e => {
        setState({...state, [e.target.name]:e.target.value})
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        if(response.isSuccess){
            localStorage.setItem('admin-token', response?.data?.token);
            dispatch(setAdminToken(response?.data.token));
            navigete('/dashboard/products');
        }
    },[response.isSuccess,dispatch,navigete])
    return(
        <div className=" bg-black1 h-screen flex justify-center items-center">
            <form className="bg-black2 p-5 w-10/12 sm:1-8/10 md:w-6/12 lg:w-3/12 rounded" onSubmit={adminLoginFunction}>
                <h3 mb-4 text-white capitalize font-semibold text-lg > Dashbord Login</h3>
                {
                    errors.length > 0 && errors.map((error,key) => (
                        <div key={key} >
                            <p className="bg-red-100 text-red-700 p-3 mb-2 rounded-sm text-sm font-medium"> {error.msg}</p>
                        </div>
                    ))
                }
                <div className="mb-4 mt-4">
                    <input type="email" className="w-full bg-black1 p-4 rounded outline-none text-white" name="email" onChange={handelInputs} value={state.email} placeholder="Enter Your Email" />
                </div>

                <div className="mb-4 ">
                    <input type="password" className="w-full bg-black1 p-4 rounded outline-none text-white" name="password" onChange={handelInputs} value={state.password} placeholder="Enter Your Password" />
                </div>
                <div className="mb-4 ">
                    <input type="submit" value={response.isLoading ? 'Loading...' : 'Singin'} className=" bg-indigo-600 w-full p-4 rounded text-white uppercase font-semibold cursor-pointer " />
                </div>
            </form>

        </div>
    )
}

export default AdminLogin;