import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://dhruvparmardp29:B2nkgHVoBIJmcupQ@cluster0.c9cerdr.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0");


    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1)
  }
}