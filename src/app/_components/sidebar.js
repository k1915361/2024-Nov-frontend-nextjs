export function Icon({ children, bootstrapIcon="list", width=16, height=16, fill="currentColor", viewBox="0 0 16 16", ...props}) {
    return (
        <i 
        className={`bi bi-${bootstrapIcon}`} 
        width={`${width}`} 
        height={`${height}`} 
        fill={`${fill}`} 
        viewBox={`${viewBox}`} 
        {...props}
        >
            {children}
        </i>
    )
}

export function DropDownItem({ children, hrefName='', ...props }) {
    return (
        <li className="nav-item">
            <a 
            href={`/${hrefName}`} 
            className="dropdown-item" 
            {...props}
            >
                {children}
            </a>
        </li>
    )
}

export default function Sidebar({ children }) {

    return (
    <>
        <div className="d-flex justify-content-center border border-light-subtle ">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid gap-1">
                <div className="d-flex me-3">
                    <a href="/home/" 
                    className="link-underline-dark link-underline-opacity-0"
                    >
                        <h4>
                            😊
                            <span className="fw-lighter fs-6">
                                logo
                            </span>
                        </h4>
                    </a>
                </div>
                <form className="d-flex" role="search">
                    <div className="input-group ">
                        <div className="form">
                            <input type="search" 
                            id="form1" 
                            className="form-control border-1 shadow-sm" 
                            placeholder="Search models, datasets, users..."
                            />
                        </div>
                        <button type="submit" className="btn shadow-sm">
                            <Icon bootstrapIcon='search'/>
                        </button>
                    </div>
                </form>
                <div className="dropdown-center">
                    <button className="btn dropdown-toggle shadow-sm" 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    >                      
                        <Icon bootstrapIcon='list'/>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <DropDownItem hrefName="home">
                            <Icon bootstrapIcon='house'/>
                            Home
                        </DropDownItem>
                        <DropDownItem hrefName="profile">
                            <Icon bootstrapIcon='person-circle'/>
                            Profile View                            
                        </DropDownItem>
                        <DropDownItem hrefName="process-model-options/">                            
                            <Icon bootstrapIcon='sliders2'/>
                            Start a New Optimisation Task                            
                        </DropDownItem>                        
                        <DropDownItem hrefName="previous-tasks/">
                            <Icon bootstrapIcon='clipboard2-check'/>
                            Previous Tasks
                        </DropDownItem>
                        <DropDownItem hrefName="personal-model-repo/">
                            <Icon bootstrapIcon='collection'/>
                            Personal Model Repo
                        </DropDownItem>
                        <DropDownItem hrefName="personal-dataset-repo/">
                            <Icon bootstrapIcon='database'/>
                            Personal Dataset Repo
                        </DropDownItem>
                        <DropDownItem hrefName="upload-model/">
                            <Icon bootstrapIcon='cloud-arrow-up'/>
                            Upload Models
                        </DropDownItem>
                        <DropDownItem hrefName="logout/">
                            <Icon bootstrapIcon='door-closed'/>
                            Log Out
                        </DropDownItem>
                    </ul>
                </div>
                <div 
                id="navbarTogglerDemo01"
                className="collapse navbar-collapse" 
                >
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">                                                
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    </>
    );
}