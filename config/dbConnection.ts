import { connect } from "mongoose";

const connectDB = async () => {
  console.log("try connect database !");
  try {
    const dbConnect = await connect(`${process.env.CONNECTION_STRING}`);
    console.log(
      "database connected : ",
      dbConnect.connection.host,
      dbConnect.connection.name
    );
  } catch (error) {
    console.log("something wrong");
    console.log(error);
    process.exit(1);
  }
};

export { connectDB };
