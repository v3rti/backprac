
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

export async function GET(
  req: Request,
  { params } : { params: {id: string;}}
){

  const id = params.id;

  const user = users.find(user => user.id === id);

  return Response.json(user || {meesage: "user not found!"});
}


export async function PUT(
  req: Request,
  { params }: {params: {id: string}}
){

  const id = params.id;
  const body = await req.json();

  const userIndex = users.findIndex(user => user.id === id);

  if(userIndex !== -1){
    users[userIndex] = { ...users[userIndex], ...body, id};
    return Response.json(users[userIndex]);
  }

  return Response.json({message: "User not found"})

}

export async function DELETE(
  req: Request,
  { params }: {params: {id: string}}
){

  const id = params.id;
  const userIndex = users.findIndex(user => user.id === id);

  if(userIndex !== -1){
    users.splice(userIndex, 1);
    return Response.json(users);
  }

  return Response.json({message: "user not found!"})

}
