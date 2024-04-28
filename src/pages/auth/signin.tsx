import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next"
import { getCsrfToken } from "next-auth/react"
import { Button, TextField, Box, Container, FormGroup, FormLabel } from "@mui/material"
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    email: z.string().email(),

});

type FormData = {
    email: string
}


export default function SignIn({
    csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (




        <Container sx={{ p: "2em", mt: 8, width: "50%" }}>
            <Box>
                <form method="post" action="/api/auth/signin/email">
                    <FormGroup sx={{ display: "flex", alignContent: "center", width: "100%" }}>
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        <FormLabel>
                            Correo Electronico
                        </FormLabel>
                        <TextField type="email" id="email" name="email" sx={{ width: "50%", pb: "10px" }} />
                        <Button id="submit1" type="submit" sx={{ border: "1px solid black" }}>Ingresar</Button>
                    </FormGroup>

                </form>
            </Box>
        </Container>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const csrfToken = await getCsrfToken(context)
    return {
        props: { csrfToken },
    }
}


// import type {
//     GetServerSidePropsContext,
//     InferGetServerSidePropsType,
// } from "next"
// import { getCsrfToken } from "next-auth/react"
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Container, Box, Button, TextField, FormGroup, FormLabel } from '@mui/material';

// const schema = z.object({
//     email: z.string().email(),

// });

// type FormData = {
//     email: string
// }

// export default function SignIn() {
//     const {
//         register,
//         formState: { errors },
//     } = useForm<FormData>({
//         resolver: zodResolver(schema),

//     })




//     return (
//         <Container sx={{ p: "2em", mt: 8, width: "50%" }}>
//             <Box>
//                 <form method="post" action="/api/auth/signin/email" >
//                     <FormGroup sx={{ display: "flex", alignContent: "center", width: "100%" }}>
//                         <FormLabel>
//                             Correo Electronico
//                         </FormLabel>
//                         <TextField type="email" id="email" sx={{ width: "50%", pb: "10px" }} label="Ingresa tu correo electronico" {...register('email')} error={errors.email?.message === "Invalid email"} />
//                         <Button id="submit1" type="submit" sx={{ border: "1px solid black" }}>Ingresar</Button>
//                     </FormGroup>
//                 </form>
//             </Box>
//         </Container>

//     );
// };