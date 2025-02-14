import { BoldHeading4 } from "@/app/_components/components";
import { API_ROOT } from "@/app/login/fetchData";
import { ButtonLight } from "@/app/_components/components";
import { useState } from "react";

export default function DatasetForkForm({dataset_id, dataset, loggedInUser}) {
    const [formData, setFormData] = useState({
        dataset_id: dataset_id,
        name: dataset.name,
        is_public: dataset.is_public,
        description: dataset.description,        
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
            const response = await fetch(API_ROOT + '/dataset/fork/', {
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
                setMessage('The dataset is successfully forked.')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Dataset Name"
                className='form-control mb-1'
                value={formData.name}
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
                value={formData.dataset_description}
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
