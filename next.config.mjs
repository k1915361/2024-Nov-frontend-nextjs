/** @type {import('next').NextConfig} */
const nextConfig = {
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
                source: "/api/blog/:path*",
                headers: [
                { key: "Access-Control-Allow-Origin", value: "https://api.vercel.app" },
                { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
                ],
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/polls/:path*',
                destination: 'http://127.0.0.1:8000/:path*', // Server Origin
            },
            {
                source: "/api/blog/:path*",
                destination: "https://api.vercel.app/:path*", // Blog API server
            },
        ]
    },
};

export default nextConfig;
