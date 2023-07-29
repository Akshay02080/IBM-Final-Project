import {useForm} from "react-hook-form"
import './Signup.css'
function Signup(){
    // eslint-disable-next-line no-unused-vars
    let {register,handleSubmit,formState:{errors}}=useForm()
    

    //form submit
    let submitForm=(userObj)=>{
        //http POST request to store Userdata in Local API
        fetch('http://localhost:4001/users',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(userObj)
        })
        .then(result=>result.json())
        .then(message=>console.log(message))
        .catch(err=>console.log("error is",err))
    };

    return (
        <div className="container">
            <div className="row">
                <div className="reg col-12 col-sm-8 col-md-8 m-auto w-auto">
                    {/* user registration form */}
                    <form className="bg-white p-5 mt-5 mb-5 text-dark border rounded form-floating abcd" onSubmit={handleSubmit(submitForm)}>
                    <h1 className=" text-dark mb-4">
                        Registration Form
                    </h1>
                        <div className="input-group gap-5">
                            <div>
                                <p>Firstname</p>
                                <input className="form-control mb-4" name="Firstname" type="text" {...register("Firstname",{required:{value:"true",message:"* Firstname is required"},minLength:{value:4,message:"*Firstname is too Small"},maxLength:{value:6,message:"*Firstname is Too Big"}})} />
                                 {errors.Firstname?.message &&<p className="text-danger">{errors.Firstname?.message}</p>}
                            </div>
                            <div>
                                <p>Lastname</p>
                                <input className="form-control mb-4" name="Lastname" type="text" {...register("Lastname",{required:{value:"true",message:"*Last name is required"},minLength:{value:4,message:"*Lastname is too Small"},maxLength:{value:6,message:"*Lastname is too big"}})} />
                                {errors.Lastname?.message &&<p className="text-danger">{errors.Lastname?.message}</p>}
                            </div>
                        </div>
                        {/* date of birth */}
                        <div className="input-group gap-5">
                            <div>
                                <p>Birthday</p>
                                <input type="date" className="form-control mb-4" {...register("dateOfBirth",{required:{value:"true",message:"*Date of Birth is required"}})}/>
                                {errors.dateOfBirth?.message && <p className="text-danger">{errors.dateOfBirth?.message}</p>}
                            </div>
                            <div>
                                <p>Gender</p>
                                    {/* radio */}
                                    <div className="input-group gap-5">
                                        <div className="form-check mb-3">
                                            <input type="radio"
                                            className="form-check-input" 
                                            id="Male" value="Male" 
                                            {...register("Gender",{required:{value:"true",message:"*Gender is required"}})}/>
                                            <label htmlFor="Male" 
                                            className="form-check-label">
                                                Male
                                            </label>
                                        </div>
                                        {/* radio */}
                                        <div className="form-check mb-4">
                                            <input type="radio" 
                                            className="form-check-input" 
                                            id="Female"value="Female" 
                                            {...register("Gender",{required:{value:"true",message:"*Gender is required"}})}/>
                                            <label htmlFor="Female" 
                                            className="form-check-label">
                                            Female
                                            </label>
                                        </div>
                                </div>
                                {errors.Gender?.message && <p className="text-danger">{errors.Gender?.message}</p>}
                            </div>
                        </div>
                        <div className="input-group gap-5" >
                            <div>
                                {/* email */}
                                <p>Email</p>
                                <input type="text" 
                                name="email" 
                                placeholder="Email" 
                                className="form-control mb-4"
                                {...register("Email",{required:{value:"true",message:"*Email is required"}})}/>    
                                {errors.Email?.message && <p className="text-danger">{errors.Email?.message}</p>}
                            </div>
                            <div>
                                {/* phone */}
                                <p>Phone Number</p>
                                <input className="form-control mb-4" type="tel" name="" id="phone" placeholder="phone"
                                 {...register("Phone",{required:{value:"true",message:"*Phone number is required"},
                                 minLength:{value:10,message:"* Phonenumber must be 10-digit"},
                                 maxLength:{value:10,message:"* Phonenumber must be 10-digit"}})}/>
                                {errors.Phone?.message && <p className="text-danger">{errors.Phone?.message}</p>}
                            </div>
                        </div>
                        {/* state */}
                        <div>
                            <p>State</p>
                            <select className="form-select mb-4"
                                {...register("State",{required:{value:"true",message:"*Select the state"}})}>
                                <option value="" disabled selected hidden>
                                    Choose the state
                                </option>
                                <option value="Telangana">
                                    Telangana
                                </option>
                                <option value="Andhra Pradesh">
                                    Andhra Pradesh
                                </option>
                                <option value="Karnataka">
                                    Karnataka
                                </option>
                                <option value="Kerela">
                                    Kerela
                                </option>
                                <option value="Maharashtra">
                                    Maharashtra
                                </option>
                            </select>
                            {errors.State?.message && <p className="text-danger">{errors.State?.message}</p>}
                        </div>
                        {/* submit button */}
                        <button className="btn btn-primary" type="submit">
                            Add User
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup