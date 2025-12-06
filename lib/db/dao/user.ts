// import User from '../models/User'
// import dbConnect from '../postgredb'

const getUserById = async (userId: string) => {
  // await dbConnect();
  try {
    // return await User.findById(userId).lean()
  } catch (error) {
    console.error("Error fetch user:", error);
    throw new Error("Failed to fetch user by id");
  }
};

const getUserByEmail = async (email: string) => {
  // await dbConnect();
  try {
    // return await User.findById(email).lean()
  } catch (error) {
    console.error("Error fetch user:", error);
    throw new Error("Failed to fetch user by email");
  }
};

const userDAO = { getUserById, getUserByEmail };
export default userDAO;
