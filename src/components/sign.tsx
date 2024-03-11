import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from '@mui/material';



function SignButton() {
    const { data: session } = useSession()

    if (session) {
        return (
            <Button variant="text" onClick={() => { signOut() }}>Salir</Button>




        )
    }

    return (
        <Button variant="text" sx={{ alignItems: "center", color: "black" }} onClick={() => { signIn() }}>Ingresar</Button>

    )
}

export default SignButton