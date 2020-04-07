import React from "react";
import "./homepage.styles.scss"
import Directory from "../directory/directory.component"

export default function HomePage()
{
    return(
        <div className="homepage">
        <Directory/>
        </div>
    )
}