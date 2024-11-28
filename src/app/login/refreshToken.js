import { set_document_cookie } from "./page";

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

export async function refreshToken() {
    const refreshToken = getCookie('refresh_token');
    if (refreshToken) {
        const response = await fetch('/api/refresh_token', {
            method: 'POST',
            body: JSON.stringify({ refresh_token: refreshToken }),
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        if (data.access_token) {
            set_document_cookie('access_token', data.access_token)
        }
    }
}