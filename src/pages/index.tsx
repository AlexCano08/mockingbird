import { signIn, signOut, useSession } from "next-auth/react"
import { Container, Typography, Button, Box } from '@mui/material'
import ResponsiveAppBar from "~/components/header"


const Home = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <h1>Loading...</h1>
  }
}

//   if (session) {
//     return (
//       <Container maxWidth="lg">
//         <Box sx={{
//           my: 4,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//           <Typography sx={{ textAlign: "center", mb: 2 }}>Signed in as {session.user?.email}</Typography>
//           <Button variant="contained" onClick={() => { signOut() }}>Sign Out</Button>
//         </Box>

//       </Container>



//     )
//   }

//   return (
//     <Container maxWidth="lg" >
//       <Box
//         sx={{
//           my: 4,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Typography sx={{ textAlign: "center", mb: 2 }}>If you are not an user yet, please sign up here</Typography>
//         {/* <Button variant="contained" onClick={() => signIn()}>Sign in with Email</Button> */}
//         <Button variant="contained" sx={{ alignItems: "center" }} onClick={() => { signIn() }}>Sign in with Email</Button>
//       </Box>
//     </Container>
//   )
// }

export default Home;



{/* // <Container>
  //   <Typography>If you are not an user yet, please sign up here</Typography>
  //   <button onClick={() => signIn()}>Sign in with Email</button>
  //   <ul>
  //     <li>
  //       <Link href="/api/auth/signin">Home</Link>
  //     </li>
  //     <li>
  //       <Link href="/about">About Us</Link>
  //     </li>
  //     <li>
  //       <Link href="/blog/hello-world">Blog Post</Link>
  //     </li>
  //   </ul>
  // </Container> */}

