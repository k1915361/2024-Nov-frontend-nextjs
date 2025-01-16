// pages/my-page/[id].js (Server Component)

/** This project uses App Router and Next Pages feature cannot be used.
 * https://stackoverflow.com/questions/76931585/next-js-routing-not-working-pages-not-loading-correctly
 *  */ 
export async function getServerSideProps(context) {
    const url = context.req.url;
    const searchParams = new URLSearchParams(url.search);
    const searchValue = searchParams.get('search');

    return {
        props: {
          searchValue,
        },
    };
}

export default function MyPage({ searchValue }) {
    return (
        <div>
            <p>Search value: {searchValue}</p>
        </div>
    );
}