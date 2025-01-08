import { Icon } from "../_components/sidebar";

export function TitleRouteView({apiRoute, children, Title='Datasets: '}) {
    return (
        <div>
            <span className="fs-4">
                <Icon bootstrapIcon='database-fill'/>
                {Title} 
            </span> <span>
                {apiRoute}
                {children}
            </span>
        </div>
    )
}