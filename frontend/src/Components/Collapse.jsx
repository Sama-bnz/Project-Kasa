import { useState } from "react"

export function Collapse(props){
    const [active, setActive] = useState(false);
    const toggleAccordion = e => {
        setActive(!active)
    };
    return (
        <div className={`dropdown ${active ? "open" : ""}`}>
            <div className="dropdown-title" onClick={toggleAccordion}>
                <div className="dropdown-header">{props.title}</div>
                <div className="dropdown-arrow">{active ? "▼" : "▲"}</div>
            </div>
            <div className={`dropdown-content ${active ? "active-dropdown" : ""}`}>
                {props.children}
            </div>
        </div>
    )
}
