export function IconClientSide({ children, bootstrapIcon = "", width = 16, height = 16, fill = "currentColor", viewBox = "0 0 16 16", addClassname = '', ...props }) {
    return (
        <i
            className={`bi bi-${bootstrapIcon} ${addClassname}`}
            width={`${width}`}
            height={`${height}`}
            fill={`${fill}`}
            viewBox={`${viewBox}`}
            {...props}
        >
            {children}
        </i>
    );
}