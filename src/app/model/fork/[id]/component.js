import { LinkDarkBoldNoUnderline, LinkTextSecondaryNoUnderline } from "@/app/_components/components";

export function UsernameAndModelNameLinks({data, id}) {
    return (
        <div className="d-flex justify-content-center border-bottom border-light-subtle pt-5 pb-2">
            <div className="container-fluid gap-1">                    
                <div className="container">
                <LinkTextSecondaryNoUnderline href={`#`} data-bs-toggle="tooltip" data-bs-title="Default tooltip">
                    {data.username}/
                </LinkTextSecondaryNoUnderline>
                <LinkDarkBoldNoUnderline href={`/model/${id}`}>
                    {data.name}
                </LinkDarkBoldNoUnderline>
                </div>
            </div>
        </div>
    )
}