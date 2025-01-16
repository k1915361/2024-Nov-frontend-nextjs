/** @deprecated. cookie is only set and readable in server side. cookie cannot be accessed by script - cookie is secured in client brower. 
 * Second issue: document is only available client side.
*/
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

/** @deprecated */
export async function refreshToken() {
    const refreshToken = getCookie('refresh_token');
    if (refreshToken) {
        const response = await fetch('/api/refresh_token', {
            method: 'POST',
            body: JSON.stringify({ refresh_token: refreshToken }),
            headers: { 'Content-Type': 'application/json' },
        });

        await response.json();
        
    }
}