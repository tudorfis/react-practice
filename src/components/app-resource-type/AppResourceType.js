import React, { useEffect } from 'react'
import Button from '../base/Button'

console.clear()

export default function AppResourceType() {
    const [resourceType, setResourceType] = React.useState('posts')

    function handleMousemove(e) {
        console.log(resourceType, e)
    }

    useEffect(() => {
        // console.log('after', resourceType)

        const element = document.querySelector('#tudor')
        element.addEventListener('mousemove', handleMousemove)

        return () => {
            // console.log('before', resourceType)
            element.removeEventListener('mousemove', handleMousemove)
        }
    }, [resourceType])

    return (
        <>
            <div>
                <Button onClick={() => setResourceType('posts')}>Posts</Button>
                <Button onClick={() => setResourceType('users')}>Users</Button>
                <Button onClick={() => setResourceType('comments')}>Comments</Button>
            </div>
            <h3 id="tudor">{resourceType}</h3>
        </>
    )
}
