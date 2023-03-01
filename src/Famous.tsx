import React from "react";

type FamousType = {
    cars: Array<FamousTypeProps>
}
export type FamousTypeProps = {
    manufacturer: string
    model: string
}

export const Famous = (props: FamousType) => {
    return (
    
            <div>
                {
                    props.cars.map((el) => {
                        return (
                            <h1>{el.model}</h1>
                        )
                    })
                }
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        
)}


export default Famous;