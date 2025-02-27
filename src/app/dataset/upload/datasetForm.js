'use client';

import { API_ROOT } from '@/app/login/fetchData';
import { useState } from 'react';

export default function DatasetForm() {
    const [formData, setFormData] = useState({
        name: '',
        is_public: true,
        description: '',
        dataset_zipfile: null,
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
            const response = await fetch(API_ROOT + '/dataset/upload/', {
                method: 'POST',
                credentials: 'include',
                body: formDataToSend,
            });

            console.log(response)
            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                const errorDetails = await response.json();
                console.error(`Error details: ${errorDetails}`);
                console.error(`Form submission failed. status: ${response.status}`);
            }
            
            const result = await response.json();
            setMessage(result?.message);
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>Upload a Dataset</div>
            <label 
                htmlFor="dataset_zipfile" 
                className="form-label"
            >
                Zip File:
            </label>
            <input
                type="file"
                accept=".zip"
                name="dataset_zipfile"
                id="dataset_zipfile"
                onChange={handleFileChange}
                className="form-control mb-1"
                required
            />
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
