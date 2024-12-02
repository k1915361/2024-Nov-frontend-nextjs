"use client";

import { useUser } from "../context/UserContext";

export default function UserClientInfo() {
    const { user } = useUser();

    return (
        <div>
            {user?.username ? (
                <p>{user.username}</p>
            ) : (
                <p>No user information available.</p>
            )}
        </div>
    );
}