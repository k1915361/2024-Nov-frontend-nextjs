/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        customKey: 'my-value',
        PUBLIC_BACKEND_URL: 'http://localhost:8000/',
        TEST_VAL: 'from next.config.mjs'
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "http://localhost:3002" }, // Client origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            {
                source: "/blog/:path*",
                headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "http://localhost:3002" },
                { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
	
    async rewrites() {
        return [
            {
                source: '/polls/:path*',
                destination: 'http://localhost:8000/:path*', // Server Origin
            },
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/:path*', // Server API Origin
            },
            {
                source: "/blog/:path*",
                destination: "https://api.vercel.app/blog/:path*",
            },
            {
                source: "/blog",
                destination: "https://api.vercel.app/blog", 
            },
            
        ]
    },
};

export default nextConfig;
