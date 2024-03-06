import { signIn } from "next-auth/react"

export default () => (
  <button onClick={() => signIn()}>Sign in with Email</button>
)