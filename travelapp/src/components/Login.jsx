import React,{useState} from 'react'
import COVER_IMAGE from '../assets/COVER_IMAGE.jpg'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { Link,useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth} from '../firebase'

const Login = () => {

  const navigate = useNavigate();

  const[values,setValues] = useState({
    email:"",
    pass:"",
  });

  const [errormsg,setErrorMsg] = useState("");
  const [submitButtonDisabled, setsubmitButtonDisabled] =useState(false);

  const handleSubmit=()=>{
    if(!values.email || !values.pass){
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg(" ")
    
    setsubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth,values.email,values.pass)
    .then(async (res)=>{
      setsubmitButtonDisabled(false);
      
      navigate("/");
    })
    
    .catch((err) =>{ 
      setsubmitButtonDisabled(false)
      setErrorMsg(err.message);
  });
  }


  const [type,setType] = useState ('password');
  const [icon,setIcon] = useState(true)

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

          <h2 className='font-bold font-[Righteous] text-blue-900'>Login</h2>
          <h4  className=' text-blue-800 text-sm mt-3 md:text-lg'>If you are an existing User, Log In </h4>

          <form action='' className='flex flex-col pt-3 gap-4'>

            <input className='p-2 rounded-xl border-black' type={Text} name="email" placeholder='Email' onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))} />

            <div className='flex items-center' >
              <input className='w-full p-2 rounded-xl border-black' type={type} name="email" placeholder='Password' maxLength={10} onChange={(e)=>setValues((prev)=>({...prev,pass:e.target.value}))} />

              <span onClick={handleToggle} >{icon ? <AiFillEyeInvisible className='icon px-1 cursor-pointer'/> :<AiFillEye className='icon px-1 cursor-pointer'/> }</span>
            </div>

            <div className='font-bold text-red-500 text-sm'>{errormsg}</div>
            
            <button disabled={submitButtonDisabled} onClick={handleSubmit} type="button" class="font-bold text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>

          </form>
          
          <h4 className='text-sm'>Don't have an account?</h4>
          <Link to="/Register" className='font-bold cursor-pointer text-gray-500 '> Register</Link>
        </div>

        <div className='w-1/2 sm:block hidden '>
          <img className='rounded-2xl ' src={COVER_IMAGE}/>
        </div>

      </div>

    </section>
    
  )
}

export default Login