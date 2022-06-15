import { Profile } from "./ProfileEnum";

type User = {
    id: number,
    fullName: string;
    birthday: Date;
    profile: Profile;
};

export default User;