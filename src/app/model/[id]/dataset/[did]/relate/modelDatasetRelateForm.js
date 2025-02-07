'use client'

import { BoldHeading4, Input } from "@/app/_components/components";
import { API_HTTP } from "@/app/login/fetchData";
import { ButtonLight } from "@/app/_components/components";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";

export default function ModelDatasetRelateForm({ model_id, dataset_id, model, loggedInUser }) {
    const [formData, setFormData] = useState({
        model_id: model_id,
        dataset_id: dataset_id,        
    });
    const [message, setMessage] = useState("")
    const { user } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await fetch(API_HTTP + '/model-dataset/relate/', {
                method: 'POST',
                credentials: 'include',
                body: formDataToSend,
            });

            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                const errorDetails = await response.json();
                console.error(`Error details: ${errorDetails}`);
                console.error(`Form submission failed. status: ${response.status}`);
            }
            const result = await response.json();
            setMessage(result?.message);
            if (result?.success === true) {
                setMessage('The model is successfully forked.')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {!user?.username &&
                <BoldHeading4>
                    Please login
                </BoldHeading4>
            }
            <ButtonLight
                type="submit"
                disabled={!user?.username}
            >
                Apply
            </ButtonLight>
            <div>
                {message}
            </div>
        </form>
    );
}
