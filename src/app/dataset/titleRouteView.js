import { Icon, LinkDark } from "../_components/components";

export function TitleRouteView({apiRoute, children, title='Datasets: ', routeType='model'}) {
    return (
        <div>
            <span className="fs-4">
                <Icon bootstrapIcon='database-fill'/>
                    {title} 
            </span> <span>
                <LinkDark href={`/${routeType}/${apiRoute}`}>
                    {decodeURIComponent(apiRoute)}
                </LinkDark>
                {children}
            </span>
        </div>
    )
}