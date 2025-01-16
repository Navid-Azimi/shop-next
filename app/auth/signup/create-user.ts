"use server"

import {APP_URL} from "@/app/auth/constants/api";
import {redirect} from "next/navigation";
import {getErrorMessage} from "@/app/util/errors";

export default async function createUser(prevState, formData) {
    console.log(`${APP_URL}/users`);
    const res = await fetch(`${APP_URL}/users`, {
        method: "POST",
        body: formData
    });
    const parsedRes = await res.json();
    if (!res.ok) {
        return {error: getErrorMessage(parsedRes)};
    }
    redirect('/');
}