import { Profile } from "../types/ProfileEnum";
import User from "../types/UserType";

const users: User[] = [
  {
    id: 1,
    fullName: "John Nolan",
    birthday: new Date(1970, 11, 17),
    profile: Profile.Administrator,
  },
  {
    id: 2,
    fullName: "Julia Morros",
    birthday: new Date(1985, 6, 23),
    profile: Profile.Operator,
  },
  {
    id: 3,
    fullName: "Mary Watts",
    birthday: new Date(1976, 4, 16),
    profile: Profile.Customer,
  },
];

export default users;
