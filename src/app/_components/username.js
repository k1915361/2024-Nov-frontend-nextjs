'use client'

import { useAuth } from "../context/AuthContext";
import { BorderLight, Icon, LinkDarkNoUnderline } from "./components";

export default function Username() {
    const { user } = useAuth();

    return (
        <BorderLight addClassname="me-1">
            {(user?.id && user?.username) ? 
                <LinkDarkNoUnderline
                    href='/profile'
                    title="Profile"
                >
                    <Icon bootstrapIcon="person-circle p-1">
                    </Icon>
                    {user.username}
                </LinkDarkNoUnderline>
                :
                <LinkDarkNoUnderline
                    href='/login'
                    title="Login"
                >
                    Login
                </LinkDarkNoUnderline>
            }            
        </BorderLight>
    );
}