'use client'

import { useAuth } from "../context/AuthContext";
import { LinkDarkNoUnderline } from "./components";
import { SmallShadowRound } from "./components";

export default function Username() {
    const { user } = useAuth();

    return (
        <SmallShadowRound overrideClassname='fw-medium'>
            {(user?.id && user?.username) ? 
                <LinkDarkNoUnderline
                    href='/profile'
                >
                    user.username
                </LinkDarkNoUnderline>
                :
                <LinkDarkNoUnderline
                    href='/login'
                >
                    Guest
                </LinkDarkNoUnderline>
            }            
        </SmallShadowRound>
    );
}