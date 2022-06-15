import users from '../mocks/UserMocks';

async function stall(stallTime = 1000) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
  }

const getUsers = async () => {
    await stall(500);
    return users;
};

export default getUsers;