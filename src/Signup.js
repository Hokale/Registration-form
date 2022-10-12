import React,{useState} from 'react';


const Signup = () => {

    const [userRegistration, setUserRegistration] = useState({
        username:"",
        Email:"",
        phone:"",
        password:""
    });
   const [Records, setRecord] = useState([ ])

    const handleInput =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);

        setUserRegistration({...userRegistration,[name]:value,})

    }


   const handleSubmit=(e)=>{
    e.preventDefault();

    const newRecord = {...userRegistration,id:new Date().getTime().toString()}
    console.log(Records);
    setRecord([...Records,newRecord]);
    console.log(Records);

    setUserRegistration({ username : "", Email :"",phone:"",password:""})
}


  return (
    <div className='Form input'>
    <form action="" onSubmit={ handleSubmit }>
        <div >
            <label htmlFor=''> Fullname</label>
            <input type ="text" autoComplete='off'
            value={userRegistration.username}
            onChange={handleInput}
            name="username"id='username'/>
        </div> 
        <div>
            <label htmlFor='Email'> Email</label>
            <input type ="text" autoComplete='off'
            value={userRegistration.Email}
            onChange={handleInput}
            name="Email"id='Email'/>
        </div>
         <div>
            <label htmlFor='phone'>Phone</label>
            <input type ="text" autoComplete='off'
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"id='phone'/>
        </div>
         <div>
            <label htmlFor='password'>Password</label>
            <input type ="password" autoComplete='off'
            value={userRegistration.password}
            onChange={handleInput}
            name="password"id='password'/>
        </div>
        <button type="submit"> Registration</button>
    </form>
    <div>
        {
         Records.map((curElem)=>{
            const { id,username,Email,phone,password } =curElem;
            return(
                <div className='data' key= {id}>
                    <p>{username}</p>
                    <p>{Email}</p>
                    <p>{phone}</p>
                    <p>{password}</p>
                    </div>
            )
         })   
        }
    </div>
    </div>
  )
}

export default Signup