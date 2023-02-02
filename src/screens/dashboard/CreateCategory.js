import { useEffect, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { useCreateMutation } from "../../store/services/categoryService";
import { setSuccess } from "../../store/reducers/golobalReducer";
import { useDispatch } from "react-redux";
const CreateCategories = () => {
    const [state, setState] = useState('');
    const [saveCategory, data]= useCreateMutation();

    const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
    const submitCategory = e=>{
        e.preventDefault();
        saveCategory({name: state});
    }
    const naviget =  useNavigate();
    const dispatch =useDispatch();
    useEffect(()=>{
        if(data?.isSuccess){
            dispatch(setSuccess(data?.data.msg));
            naviget('/dashboard/categories');
        }
    },[data?.isSuccess,naviget])
    console.log(data);
return (
    <>
   <Wrapper>
        <ScreenHeader>
            <Link to="/dashboard/categories" className="btn-dark"><i className="bi bi-arrow-left-short"></i> Categories List </Link>
        </ScreenHeader>
        <form className="w-full md:w-8/12" onSubmit={submitCategory}>
            <h3 className="text-lg capitalize mb-3">Create Category</h3>
            {
                errors.length > 0 && errors.map((error,key)=>(
                    <p className="alart-danger" key={key}>{error.msg}</p>

                )
                )
            }
            <div className="mb-3">
                <input type="text" className="form-control"  placeholder="Category Name..." value={state} onChange={(e)=>setState(e.target.value)}/>
            </div>
            <div className="mb-3">
                <input type="submit" value={data.isLoading ? 'loading..' : 'Create Category'} className="btn-indigo" />
            </div>
        </form>
   </Wrapper>
    </>
)
}



export default CreateCategories; 