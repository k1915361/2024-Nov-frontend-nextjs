'use client';

import { useState } from 'react';
import { API } from '../homepage/list_models';

export default function ModelForm() {
    const [formData, setFormData] = useState({
        name: '',
        model_type: '',
        is_public: false,
        description: '',
        model_zipfile: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(API + '/test_model_form_post/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
            }
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
                Zip File (.zip, .rar, .7zip):
            </label>
            <input
                type="file"
                accept=".zip,.rar,.7zip"
                name="model_zipfile"
                id="id_model_zipfile"
                className="form-control mb-1"
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
                    onChange={handleChange}
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
            {JSON.stringify(formData)}
        </form>
    );
}
