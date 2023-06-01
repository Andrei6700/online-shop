import React from "react"
import {Form} from "../form/Form"

function FormOrder() {
    return (
        <div className="form-order-page">
            <div className="title"> Cumparare </div>
            <div style={{ display: 'flex', flexDirection: "column", paddingTop: '50%' }} >
                <Form />
            </div>
        </div>
    )
}

export default FormOrder;

