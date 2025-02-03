'use client'

import { useAuth } from "../context/AuthContext";
import { BorderLight, LinkDarkNoUnderline } from "./components";

export default function Username() {
    const { user } = useAuth();

    return (
        <BorderLight>
            {(user?.id && user?.username) ? 
                <LinkDarkNoUnderline
                    href='/profile'
                >
                    {user.username}
                </LinkDarkNoUnderline>
                :
                <LinkDarkNoUnderline
                    href='/login'
                >
                    Guest
                </LinkDarkNoUnderline>
            }            
        </BorderLight>
    );
}