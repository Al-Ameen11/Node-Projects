import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [users, setUsers] = useState([]);

  const [buttonState,setButtonState]=useState('add');


  const [userInfo,setUserInfo]=useState({
    id:uuidv4(),
    name:"",
    age:"",
    email:"",
    phoneno:"",
  })
  const handleChanges =(e)=>{
    setUserInfo((currInfo)=>{
      const {name,value}=e.target
      return {
        ...currInfo,
        [name]:value,
      }
    })
  }

  const addInfo = () =>{
    setUsers((currUsers)=>{
      return [...currUsers,{...userInfo,id:uuidv4()}]})
      setUserInfo(()=>{
        return{
          id:"",
          name:"",
          age:"",
          email:"",
          phoneno:"",
        }
      })
      }

  const deleteData =(id) =>{
    setUsers((currUsers)=>{
      return currUsers.filter((user)=>{
      return user.id !== id;
    })
    })
  }

  const startEditing =(user)=>{
    setButtonState('update')
    setUserInfo(user);
  }

  const cancelEditing=()=>{
    setButtonState('add')
    setUserInfo(()=>{
        return{
          name:"",
          age:"",
          email:"",
          phoneno:"",
        }
      })
  }

  const updateData = () => {
  setUsers(currUsers =>
    currUsers.map(user =>
      user.id === userInfo.id ? userInfo : user
    )
  );
  cancelEditing();
};


  return (
    <div id='container'
        className='flex flex-col items-center justify-center'>
      <div
        id='form'
        className='flex flex-col mx-4 my-2 w-'>
        <input 
          type="text"
          className='outline-none border-2 border-solid border-gray-400 px-5 py-1 w-80'
          placeholder='Enter the name'
          value={userInfo.name}
          name='name'
          onChange={handleChanges}
           />
        <br />
        <input 
          type="text"
          className='outline-none border-2 border-solid border-gray-400 px-5 py-1 w-80'
          placeholder='Enter the age'
          value={userInfo.age}
          name='age'
          onChange={handleChanges}
           />
        <br />
        <input 
          type="text"
          className='outline-none border-2 border-solid border-gray-400 px-5 py-1 w-80'
          placeholder='Enter the email'
          value={userInfo.email}
          name='email'
          onChange={handleChanges}
           />
        <br />
        <input 
          type="text"
          className='outline-none border-2 border-solid border-gray-400 px-5 py-1 w-80'
          placeholder='Enter the phoneno'
          value={userInfo.phoneno}
          name='phoneno'
          onChange={handleChanges}
           />
        <br />
        {
        buttonState ==='add'?
        <button onClick={addInfo}
        className='self-start px-5 py-1 rounded-sm border-none outline-none bg-green-500'>Add</button>
        :<div className='flex gap-x-2'>
        <button 
        onClick={updateData}
        className='self-start px-5 py-1 rounded-sm border-none outline-none bg-green-500'>Update</button>
        <button 
        onClick={cancelEditing}
        className='self-start px-5 py-1 rounded-sm border-none outline-none bg-red-600'>Cancel</button>
        </div>
         }
        
      </div>
      <table 
        id='table'
        className='mt-5' 
         >
        <thead>
          <tr>
          <th className='border-2 border-indigo-600 px-3 py-1'>
            Name
          </th>
          <th className='border-2 border-indigo-600 px-3 py-1'>
            Age
          </th>
          <th className='border-2 border-indigo-600 px-3 py-1'>
            Email
          </th>
          <th className='border-2 border-indigo-600 px-3 py-1'>
            PhoneNo
          </th>
          <th className='border-2 border-indigo-600 px-3 py-1'>
            Status
          </th>
          </tr>
        </thead>
        <tbody>
            {users.map((user,index)=>{
              return (
                <tr key={index}>
            <td className='border-2 border-indigo-600 px-2'>{user.name}</td>
            <td className='border-2 border-indigo-600 px-2'>{user.age}</td>
            <td className='border-2 border-indigo-600 px-2'>{user.email}</td>
            <td className='border-2 border-indigo-600 px-2'>{user.phoneno}</td>
            <td className='border-2 border-indigo-600'>

              <div className='flex py-1 px-2 gap-x-2'>
                <button 
                  onClick={()=>startEditing(user)}
                  className='bg-cyan-400 px-2'>
                  Edit
                </button>

                <button 
                  onClick={()=>deleteData(user.id)}
                  className='bg-red-500 px-2'>
                    Delete
                  </button>

              </div>
            </td>
          </tr>
              )}
            )}
            </tbody>
      </table>
    </div>
  )
}

export default App;


