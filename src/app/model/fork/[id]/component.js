import { LinkTextBlackNoUnderline, LinkTextSecondaryNoUnderline } from "@/app/home/page";

export function UsernameAndDatasetNameLinks({data, id}) {
    return (
        <div className="d-flex justify-content-center border border-light-subtle ">
            <div className="container-fluid gap-1">                    
                <div className="container">
                <LinkTextSecondaryNoUnderline href={`#`} data-bs-toggle="tooltip" data-bs-title="Default tooltip">
                    {data.username}/
                </LinkTextSecondaryNoUnderline>
                <LinkTextBlackNoUnderline href={`/model/${id}`}>
                    {data.name}
                </LinkTextBlackNoUnderline>
                </div>
            </div>
        </div>
    )
}