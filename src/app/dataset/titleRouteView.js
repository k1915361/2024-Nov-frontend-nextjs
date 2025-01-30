import { Icon } from "../_components/components";

export function TitleRouteView({apiRoute, children, title='Datasets: '}) {
    return (
        <div>
            <span className="fs-4">
                <Icon bootstrapIcon='database-fill'/>
                {title} 
            </span> <span>
                {decodeURIComponent(apiRoute)}
                {children}
            </span>
        </div>
    )
}