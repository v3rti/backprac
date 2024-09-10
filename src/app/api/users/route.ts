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

export async function PUT(req: Request){

  const body = await req.json();

  const userIndex = users.findIndex(user => user.id == body.id);

  if(userIndex !== -1){
    users[userIndex] = { ...users[userIndex], ...body };
    return Response.json({message: "User has been successfully modified!", users})
  }

  return Response.json({message: "User not found", users})
}

export async function DELETE(req: Request){

  const body = await req.json();
  const {searchParams} = new URL(req.url);

  const id = searchParams.get('id');

  return Response.json({id})

  // const userIndex = users.findIndex(user => user.id == body.id);

  // if(userIndex !== -1){
  //   users.splice(userIndex, 1);
  //   return Response.json({message: "User has been successfully deleted!", users})
  // }

  // return Response.json({message: "User not found!", users})
}
