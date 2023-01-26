import { logout } from "../store/reducers/authReducer";
import {useDispatch} from "react-redux"
const AdminNav = ({openSidebar})=>{
    const dispatch = useDispatch();

    const adminLogout =()=> {
        dispatch(logout('admin-token'));
    }
    return(
        <nav className="fixex left-0 sm:left-64 top-4 right-0 mx-4">
            <div className="bg-gray-800 w-full flex justify-between sm:justify-end items-center p-4">
            <i className="bi bi-filter-left text-white text-2xl sm:hidden block" onClick={openSidebar}></i>
            <button className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize" onClick={adminLogout}>logout</button>
            </div>
        </nav>

    )
}
export default AdminNav;