import React,{useState} from 'react'
import COVER_IMAGE from '../assets/COVER_IMAGE.jpg'
import {AiFillEyeInvisible,AiFillEye} from'react-icons/ai'
import { Link,useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import { auth} from '../firebase'


const Register = () => {

  const [type,setType] = useState ('password');
  const [icon,setIcon] = useState(true);
  const navigate = useNavigate();



  const[values,setValues] = useState({
    name:"",
    phone:"",
    email:"",
    pass:"",
  });

  

  const [errormsg,setErrorMsg] = useState("");
  const [submitButtonDisabled, setsubmitButtonDisabled] =useState(false);

  const handleSubmit=async(event)=>{
    event.preventDefault();
    if(!values.name || !values.email || !values.phone || !values.pass){
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg(" ")    
    setsubmitButtonDisabled(true);
    const {fireuser} = createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async (res)=>{
      setsubmitButtonDisabled(false);
      const user =res.user;
      const displayName = user;
      await updateProfile(user,{displayName:values.name,});
      navigate("/");
    })
    
    .catch((err) =>{ 
      setsubmitButtonDisabled(false)
      setErrorMsg(err.message);
  });
 
}



  const handleToggle = ()=>{
    if(type=='password'){
      setIcon(false)
      setType('text')
    }
    else{
      setIcon(true)
      setType('password')
    }
  }

  return (
    <section className='pt-16 bg-gray-100  min-h-screen flex items-center justify-center'>

      <div className='bg-gray-200 rounded-xl flex shadow-lg max-w-3xl p-3'>

        <div className='sm:w-1/2 px-16'>

          <h2 className='font-bold font-[Righteous] text-blue-900'>Register</h2>
          <h4  className=' text-blue-800 text-sm mt-3 md:text-lg'>New user, please Register </h4>

          <form action='' method="POST" className='flex flex-col pt-3 gap-4'>
            <input className='p-2 rounded-xl border-black' type={Text} name="name" placeholder='Enter your name' onChange={(e)=>setValues((prev)=>({...prev,name:e.target.value}))} />

            <input className='w-full p-2 rounded-xl border-black' type={Text} name="phone" placeholder='Contact no'  onChange={(e)=>setValues((prev)=>({...prev,phone:e.target.value}))}/>

            <input className='w-full p-2 rounded-xl border-black' type={Text} name="email " placeholder='Email' onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))} />

            <div className='flex items-center px-1'>

            <input className='w-full p-2 rounded-xl border-black' type={type} name="password " placeholder='Password' maxLength={10} onChange={(e)=>setValues((prev)=>({...prev,pass:e.target.value}))} />

            <span onClick={handleToggle} >{icon ? <AiFillEyeInvisible className='icon px-1 cursor-pointer'/> :<AiFillEye className='icon px-1 cursor-pointer'/> }</span>
            </div>

            <div className='font-bold text-red-500 text-sm'>{errormsg}</div>
            
            <button onClick={handleSubmit} disabled={submitButtonDisabled} type="button" class="font-bold text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>

          </form>
          

          
          <h4 className='text-sm'>Already have an account?</h4>
          <Link to="/Login" href='' className='font-bold cursor-pointer text-gray-500 '> Login</Link>
        </div>

        <div className='w-1/2 sm:block hidden '>
          <img className='rounded-2xl ' src={COVER_IMAGE}/>
        </div>

      </div>

    </section>
    
  )

}
export default Register