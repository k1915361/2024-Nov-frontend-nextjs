import dayjs from "@/app/_components/dayjsRelativeTime";
import { ispublic } from "./list_datasets";

export async function getStaticProps() {
    const res = await fetch(`${API}/models/`);
    const data = await res.json();

    return {
        props: {
        data,
        },
        revalidate: 10, // Re-fetch data every 10 seconds
    };
}

export function isforked(model, prefix = "• ") {
    if (model.original_model) { 
        return prefix + "forked"
    }
}

const API_ROOT = "http://127.0.0.1:8000"
const API = API_ROOT + "/polls"

export function TextSecondary({ children, ...props}) {
    return (
        <span className="text-body-secondary text-sm" {...props}> 
            {children}
        </span>                         
    )
}

export default async function ListModels({  }) {
    const data = await fetch(`${API}/models/`)
    const datajson = await data.json()
    const models = datajson.models

    // TODO ensure this is not a static page
    // TODO turn this to do frequent API fetch (e.g. every 10s or every user page load)
    // option 1. look at above example getStaticProps() fetching every 10s
    // option 2. use with Context Provider. https://nextjs.org/docs/messages/no-async-client-component
    // option 2. client-side useEffect - not recommended
 
    return (
        <div>
            <h1>Public Models</h1>
            { models.map((model) => 
                <div key={model.id} className="p-1 my-1 bg-body rounded border border-light-subtle ">
                    <div className="fw-medium">
                        {model.name}
                    </div>
                    <div>
                        <TextSecondary> 
                            {model.username} 
                        </TextSecondary> 
                        <TextSecondary
                        > • {ispublic(model)}
                        </TextSecondary>
                        <TextSecondary
                        > • { dayjs(model.updated).fromNow() } 
                        </TextSecondary>
                        <TextSecondary
                        > {isforked(model)}
                        </TextSecondary>                        
                    </div>
                </div>
                )
            }
        </div>
    )
}