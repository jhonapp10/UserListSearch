import React from 'react';
import { Profile } from '../types/ProfileEnum';
import UserType from '../types/UserType';

interface Props{
  users:Array<{
    id: number
    fullName: string
    birthday: Date
    profile: Profile

  }>
}



function UsersTable({users}: Props) {
     
  
  return (
    <div className="UsersTable">
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Birthday</th>
                    <th>Profile</th>
                </tr>
            </thead>
            <tbody>{users.map((user) => (
              
              <tr>
                <th>{user.fullName}</th>
                <th>{user.birthday.toLocaleDateString()}</th>
                <th>{user.profile}</th>
              </tr>
            )

            )}
              
             
            </tbody>
        </table>        
    </div>
  );
}

export default UsersTable;
