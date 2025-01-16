'use client'

/** @deprecated. 
 * Highly discouraged from using this function - access the window directly within client component.
 * Server side window is not defined - Can only be used on client side. 
 * window may only be accessible in useEffect.
 */
export function getUrlSearchParams() {
    return new URLSearchParams(window.location.search)
}