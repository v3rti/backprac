import { NextResponse } from "next/server";
import { useReducer } from "react";

let users = [
  {
    id: "ed7sh05lk",
    username: "frog0six",
  },{
    id: "9ji5hsay",
    username: "flopedit",
  },
  {
    id: "7shy4on0",
    username: "ltcenthusiast",
  }
]

export async function GET(req: Request) {

  return NextResponse.json(users);
}

export async function POST(req: Request){
  const user = await req.json();
  console.log(user.id);
  const newUser = {
    id: user.id,
    username: user.username,
  }

  users.push(newUser);

  return NextResponse.json({message: "User has been added ;)", users})
}
