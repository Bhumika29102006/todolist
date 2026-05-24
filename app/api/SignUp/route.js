import {connectDB} from "../../lib/db";
import Task from "../../model/Task";
export async function POST(req) {

  const { name, email, password } =
    await req.json();

  if (!name || !email || !password) {

    return Response.json(
      { error: "All fields required" },
      { status: 400 }
    );
  }

  await connectDB();

  const existingUser =
    await User.findOne({ email });

  if (existingUser) {

    return Response.json(
      { error: "User already exists" },
      { status: 400 }
    );
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  return Response.json({
    message: "Signup Successful",
    user,
  });
}