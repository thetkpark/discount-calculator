import { useState } from "react"

const DiscountInput = ({value, changeValue}) => {
    return <div>
        <input type="number" value={value} onChange={changeValue}/>
    </div>
}

export default DiscountInput