import PageComponent from "@/app/page_component";
import { Suspense } from "react";
import UserModels from "./userModels";

export const btnLightClass = "btn btn-light border-light-subtle shadow-sm"
export const colBtnLightClass = `col ${btnLightClass}`
export const colBorderClass = "col p-1 rounded border border-light-subtle"
export const btnDangerClass = "btn btn-danger"
export const colBtnDangerClass = `col ${btnDangerClass}`

export function LinkButtonLight({children, ...props}) {
    return ( 
        <a 
            className={btnLightClass} 
            {...props}
        >
            {children}
        </a>
    )
}

export function ColLinkButtonLight({children, ...props}) {
    return ( 
        <a 
            className={colBtnLightClass} 
            {...props}
        >
            {children}
        </a>
    )
}

export function ButtonLight({children, ...props}) {
    return ( 
        <button 
            className={btnLightClass} 
            {...props}
        >
            {children}
        </button>
    )
}

export function ColButtonLight({children, ...props}) {
    return (
        <button 
            className={colBtnLightClass} 
            {...props}
        >
            {children}
        </button>
    )
}

export function ColButtonDanger({children, ...props}) {
    return (
        <button 
            className={colBtnDangerClass} 
            {...props}
        >
            {children}
        </button>
    )
}

export function ColBorderLight({children, ...props}) {
    return (
        <div 
            className={colBorderClass} 
            {...props}
        >
            {children}
        </div>        
    )
}

export function RowGap1({children, ...props}) {
    return (
        <div 
            className="row gap-1" 
            {...props}
        >
            {children}
        </div>        
    )
}

export function RowGap1Margin0({children, ...props}) {
    return (
        <div 
            className="row gap-1 m-0" 
            {...props}
        >
            {children}
        </div>        
    )
}

export default function UserModelRepo() {

    return (
        <PageComponent>
            <h1>AI Model Management</h1>
            <div className="row align-items-start gap-1">
            <RowGap1>
                <ColBorderLight>
                    <RowGap1Margin0>
                        <Suspense>
                            <UserModels/>
                        </Suspense>
                    </RowGap1Margin0>
                </ColBorderLight>
                <ColBorderLight>
                    <RowGap1Margin0>
                        <ButtonLight>Model Analysis</ButtonLight>
                        <ButtonLight>Distillation</ButtonLight>
                        <ButtonLight>Fine Tuning</ButtonLight>
                        <ButtonLight>XAI</ButtonLight>
                    </RowGap1Margin0>
                </ColBorderLight>
                <ColBorderLight>
                    Task Details/Report
                    <p></p>
                    <p></p>
                    <p></p>
                </ColBorderLight>
            </RowGap1>
            <RowGap1>
                <ColLinkButtonLight type="submit" name="upload_model" href='/model/upload/'>
                    Upload Model
                </ColLinkButtonLight>                
                <ColButtonDanger>
                    Delete Model
                </ColButtonDanger>
                <ColButtonLight>
                    Download / Export
                </ColButtonLight>
            </RowGap1>
        </div>

        </PageComponent>
    )
}