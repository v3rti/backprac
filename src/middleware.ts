import { NextResponse } from "next/server";
import type {NextRequest} from "next/server";


// checking for a valid key in the authorization header.

const apikeyExample = 'SAIO27JSB5';

export function middleware(req: NextRequest){

  const authKey = req.headers.get('authorization');

  console.log("Auth key: ", authKey);

  if(authKey !== apikeyExample){
    return new NextResponse(JSON.stringify(
      {success: false, message: 'authentication error'}
    ), {
      status: 401, headers: {
        'content-type': 'application/json'
      }
    })
  }


  const response = NextResponse.next()

  response.headers.set('x-auth-status', 'authenticated')

  console.log('User successfully authenticated')

  return response

}




export const config = {
  matcher: '/api/:path*',
}
