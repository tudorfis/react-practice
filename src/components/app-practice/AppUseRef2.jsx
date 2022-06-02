import React, { useEffect, useRef } from 'react'
import Button from '../base/Button'

export default function AppUseRef2() {
    const resourceTypes = ['posts', 'users', 'comments']
    const resources = useRef({})

    const [resourceType, setResourceType] = React.useState(resourceTypes[0])
    const [items, setItems] = React.useState([])


    useEffect(() => {
        (async () => {
            if (!resources.current[resourceType]) {
                await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
                    .then(res => res.json())
                    .then(data => resources.current[resourceType] = data)
            }

            await setItems(resources.current[resourceType])

        })()
    }, [resourceType])

    return (
        <>
            <div>
                {resourceTypes.map(item => (
                    <Button
                        key={item}
                        className={item === resourceType ? "active" : ""}
                        onClick={() => setResourceType(item)}
                    >{item.toUpperCase()}</Button>
                ))}
            </div>

            {
                items.map((item, index) => (
                    <pre
                        key={index}
                        style={{
                            height: "auto",
                            padding: "1rem"
                        }}
                    >
                        {JSON.stringify(item).replaceAll(",", "\n")}
                    </pre>
                ))
            }
        </>
    )
}
