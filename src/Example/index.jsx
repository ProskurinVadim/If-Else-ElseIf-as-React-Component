import React, { useState } from "react";
import Condition, { If, Else, ElseIf } from "../hoc/Conditional/Condition";

const Example = () => {
    const [value, setValue] = useState(0);

    const onChange = (e) => setValue(() => e.target.value)
    console.log(value)
    return (
        <div>
            <h2> Enter a number </h2>
            <input onChange={onChange} value={value} />
            <Condition condition={!isNaN(value) && value <= 10}>
                <If>
                    <h3>Your value less or equal to 10</h3>
                </If>
                <ElseIf condition={!isNaN(value) && value > 10}>
                    <h3>Your value more then 10</h3>
                </ElseIf>
                <Else>
                    <h3>Your value is not a number</h3>
                </Else>
            </Condition>

        </div>
    )
}

export default Example