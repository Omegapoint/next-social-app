import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Already connected to MongoDB");
    return;
  }
};

const mongoDbUrl = process.env.MONGODBURL as string;

if (!mongoDbUrl) {
  throw new Error("MONGODBURL is not defined in the environment variables.");
}

try {
  await mongoose.connect(mongoDbUrl, {
    dbName: "next-social-app",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
  initialized = true;
} catch (error) {
  console.log("Error connecting to MongoDB:", error);
}
