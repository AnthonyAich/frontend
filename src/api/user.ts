import { axios } from ".";

export const getAllUsers = async () => {
  return axios.get("/users/getAll");
};

export const login = async (email: String, password: String) => {
  return await axios.post("/login", { email, password });

};

//searchUser
export const searchUser = async (username: String) => {
  return await axios.post("/users/search", { username });
};

//updateUser
export const updateUser = async (user: any) => {
  return await axios.post("/users/update", { user });
};

export const getUserById = async (id: Number) => {
  return await axios.get(`/users/${id}`);
};

// add 
export const addUser = async (user: any) => {
  return await axios.post("/users/add", { user });
};

// delete
export const deleteUser = async (id: Number) => {
  return await axios.delete(`/users/${id}`);
}


export const logout = async () => {
  return await axios.post("/login/logout");
}

//getMyself
export const getMyself = async () => {
  return await axios.get("/users/getMyself");
};
