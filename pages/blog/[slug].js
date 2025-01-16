import { useRouter } from 'next/router'
 
/** This project uses App Router and Next Pages feature cannot be used.
 * https://stackoverflow.com/questions/76931585/next-js-routing-not-working-pages-not-loading-correctly
 *  */ 
export default function Page() {
  const router = useRouter()
  return <p>Post router query slug: {router.query.slug}</p>
}