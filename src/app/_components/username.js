'use client'

import { useAuth } from "../context/AuthContext";

export default function Username() {
    const { user, logOut } = useAuth();

    return (
        <div>
            {(user?.id && user?.username) ? 
                <div>{user.username}</div>
            :
                <div>Guest</div>
            }
        </div>
    );
}