"use client";
import { useRouter } from "next/navigation";
import {loginRequest} from "@/app/utils/requests";
import { useRef, useState } from "react";
const LoginForm = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const submitForm = async (e) => {
        e.preventDefault();
        const response = await loginRequest({username: usernameRef.current.value, password: passwordRef.current.value});
        
        if (response?.status == 200) {
            usernameRef.current.value = "";
            passwordRef.current.value = "";
            router.push("/events");
            return;
        }

        setError(response?.response?.data?.detail);
    }
    return (
        <div className="w-full h-full flex flex-col gap-3">
            {error && <p className="text-red-700 w-full h-14 font-semibold rounded-sm flex items-center justify-center bg-red-200">{error}</p>}
            <h2 className="font-bold text-lg">Login</h2>
            <form onSubmit={submitForm} className="w-full h-full flex flex-col gap-3">
                <input ref={usernameRef} className="w-full h-14 border px-4 rounded-sm outline-none" required type="text" placeholder="Username" />
                <input ref={passwordRef} className="w-full h-14 border px-4 rounded-sm outline-none" required type="password" placeholder="Password" />
                <button type="submit" className="w-full py-3 bg-secondary text-white rounded-full">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;