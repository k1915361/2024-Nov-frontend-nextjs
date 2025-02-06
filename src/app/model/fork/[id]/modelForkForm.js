import { BoldHeading4 } from "@/app/_components/components";
import { API_HTTP } from "@/app/login/fetchData";
import { ButtonLight } from "@/app/_components/components";
import { useState } from "react";

export default function ModelForkForm({model_id, model, loggedInUser}) {
    const [formData, setFormData] = useState({
        model_id: model_id,
        name: model.name,
        is_public: model.is_public,
        model_type: model.model_type,
        description: model.description,
    });
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckBoxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: checked
        }));
    }    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await fetch(API_HTTP + '/model/fork/', {
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
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Model Name"
                className='form-control mb-1'
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="model_type"
                placeholder="Model Type"
                className='form-control mb-1'
                value={formData.model_type}
                onChange={handleChange}
                required
            />
            <label>
                <input
                    type="checkbox"
                    name="is_public"
                    className='form-check-input mb-1'
                    checked={formData.is_public}
                    onChange={handleCheckBoxChange}
                />
                Is Public
            </label>
            <textarea
                name="description"
                placeholder="Description (optional)"
                value={formData.model_description}
                className='form-control mb-1'
                onChange={handleChange}
            />
            {!loggedInUser &&
                <BoldHeading4>
                    Please login to fork.
                </BoldHeading4>
            }
            <ButtonLight 
                type="submit"
                disabled={!loggedInUser}
            >
                Fork
            </ButtonLight>
            <div>
                {message}
            </div>
        </form>
    );
}
