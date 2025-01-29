'use client'

import { useAuth } from "../context/AuthContext";
import { SmallShadowRound } from "./sidebar";

export default function Username() {
    const { user } = useAuth();

    return (
        <SmallShadowRound overrideClassname='fw-medium'>
            {(user?.id && user?.username) ? 
                user.username
                :
                'Guest'
            }            
        </SmallShadowRound>
    );
}