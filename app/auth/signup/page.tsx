"use client";
import {Button, Link, Stack, TextField} from "@mui/material";
import NextLink from "next/link";
import {useActionState} from "react";
import createUser from "@/app/auth/signup/create-user";

export default function signUp() {
    const [state, formAction] = useActionState(createUser, {error: ""});
    return (
        <form action={formAction}>
            <Stack spacing={2} className="w-full max-w-xs">
                <TextField name="email" label="Email" variant="outlined" type="email" helperText={state.error}
                           error={!!state.error}/>
                <TextField name="password" label="Password" variant="outlined" type="passwrod" helperText={state.error}
                           error={!!state.error}/>
                <Button type="submit" variant='contained'>Sign Up</Button>
                <Link component={NextLink} href="/auth/login" className="self-center">Login</Link>
            </Stack>
        </form>
    )
        ;
}