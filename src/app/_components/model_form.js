'use client';

import { useState } from 'react';
import { API } from '../homepage/list_models';

export function log(...args) {
    console.log(...args)
}

export default function ModelForm() {
    const [formData, setFormData] = useState({
        name: '',
        model_type: '',
        is_public: true,
        description: '',
        model_zipfile: null,
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

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files[0]
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await fetch(API + '/test_model_form_post/', {
                method: 'POST',
                credentials: 'include',
                body: formDataToSend,
            });

            if (response.ok) {
                log('Form submitted successfully');
            } else {
                const errorDetails = await response.json();
                console.error(`Error details: ${errorDetails}`);
                console.error(`Form submission failed. status: ${response.status}`);
            }
            
            const result = await response.json();
            setMessage(result?.message);
            log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>Upload a Model</div>
            <label 
                htmlFor="id_model_zipfile" 
                className="form-label"
            >
                Zip File (.zip / .rar / .7zip / .7z):
            </label>
            <input
                type="file"
                accept=".zip,.rar,.7zip,.7z"
                name="model_zipfile"
                id="id_model_zipfile"
                onChange={handleFileChange}
                className="form-control mb-1"
                required
            />
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
                value={formData.description}
                className='form-control mb-1'
                onChange={handleChange}
            />
            <button 
                type="submit"
                className='btn btn-primary'
            >
                Submit
            </button>
            <div>
                {message}
            </div>
        </form>
    );
}
