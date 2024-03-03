import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import styles from "./index.module.css";
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const schema = z.object({
  email: z.string().email(),

});

type FormData = {
  email: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // console.log('Errors', errors)

  const submit = (data: FormData) => console.log(data)

  return (
    <Box
      height={600}
      width={600}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <form onSubmit={handleSubmit(submit)}>
        {/* <input {...register('email')} className={styles.input} />
      {errors.email && <p>{errors.email?.message}</p>} */}

        <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" required {...register('email')} error={errors.email?.message === "Invalid email"} />
        <Button variant="contained" color="success" type="submit">
          Success
        </Button>
      </form>
    </Box>

  );
};