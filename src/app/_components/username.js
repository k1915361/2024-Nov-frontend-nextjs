'use client'

import { useAuth } from "../context/AuthContext";
import { BorderLight, LinkDarkNoUnderline } from "./components";

export default function Username() {
    const { user } = useAuth();

    return (
        <BorderLight addClassname="me-1">
            {(user?.id && user?.username) ? 
                <LinkDarkNoUnderline
                    href='/profile'
                    title="Profile"
                >
                    {user.username}
                </LinkDarkNoUnderline>
                :
                <LinkDarkNoUnderline
                    href='/login'
                    title="Login"
                >
                    Guest
                </LinkDarkNoUnderline>
            }            
        </BorderLight>
    );
}