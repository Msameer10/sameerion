import React from "react"

export const ToolIcon  = ({ component }: { component: React.ElementType }) => {
    const Component = component;
    return (
        <>
        <Component className="size-10 fill-[url(#tool-icon-gradient)]"/>
        <svg className="size-0 absolute">
            <linearGradient id="tool-icon-gradient">
                <stop offset="0%" stopColor="rgb(124, 58, 237)" />
                <stop offset="100%" stopColor="rgb(225, 29, 72)" />
            </linearGradient>
        </svg>
        </>
    )
}