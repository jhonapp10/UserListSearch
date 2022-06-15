import React, { useEffect, useState } from "react";
import "./App.css";
import UserType from "./types/UserType";
import UsersTable from "./components/UsersTable";
import getUsers from "./services/UserService";
import { Profile, profileValues } from "./types/ProfileEnum";
import users from "./mocks/UserMocks";

interface User{
  id: number
  fullName: string
  birthday: Date
  profile: Profile

}


function App() {
  const [allUsers, setAllUsers] = useState<Array<User>>(users);
  const [selectedUsers, setSelectedUsers] = useState<Array<User>>([]);
  const [load, setLoad]= useState(Boolean);
  const [fullName, setFullName] = useState("");
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [profile, setProfile] = useState("");

  useEffect(()=>{

   
      setSelectedUsers(users);

   
   
   
  },[])


  let profiles = profileValues.map((profile:Profile,j) => {
      return ( <option value={profile}>{profile}</option>)
    });
  profiles.push(<option value=""></option>);

  
  function onSubmit2 (event:React.SyntheticEvent<HTMLFormElement>) {
    
    event.preventDefault()

    
    const findUser = allUsers.filter(u => u.fullName === fullName || u.profile ===profile );

    setLoad(true);

    setSelectedUsers(findUser);



    


  }


  return (
    <div className="page-container">
      <header>
        <h1>Users List</h1>
        <form /*onSubmit={(e) => onSubmit(e)}*/ onSubmit={onSubmit2}>
          <div id="filters">
            <div className="item">
              <label>Full Name</label>
              <input
                type="text"
                value={fullName}
                id="fullname"
                name="fullname"
                onChange={(e:any) => setFullName(e.target.value)}
              />
            </div>
            <div className="item">
              <label>Birtday From</label>
              <input type="date" value={dateFrom} onChange={(e:any) => setDateFrom(e.target.value)} id="fullname" name="fullname" />
            </div>
            <div className="item">
              <label>Birthday To</label>
              <input type="date" value={dateTo} onChange={(e:any) => setDateTo(e.target.value)} id="fullname" name="fullname" />
            </div>
            <div className="item">
              <label>Profile</label>
              <select value={profile} id="profile" name="profile" onChange={(e:any) => setProfile(e.target.value)}>
                { profiles }
                </select>
            </div>
            <div className="item">
              <button type="submit" /*onClick={onSubmit}*/ value="Submit">Submit</button>
            </div>
          </div>
          <UsersTable users={selectedUsers} /*usersS={selectedUsers}*//>
        </form>
      </header>
    </div>
  );
}

export default App;
