import React from "react"
import {ContentChildrens} from "./childrens-components/ContentChildrens"

export const Content=()=>{
    return (
        <div class="content">
            <div className="title">Magazin Online de Tancuri
            <hr className="hr-title"/>
            </div>
            <ContentChildrens/>
        </div>
    )
}