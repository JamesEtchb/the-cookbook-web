import { useEffect } from "react";

export default function Asian({ showAsian, setShowAsian }) {
    useEffect(() => {
        fetch('asian url goes here')
        .then(results => results.json())
        .then(asian => setShowAsian(asian))
        .catch(console.error)
    }, [setShowAsian])
    if (!showAsian) {
        <h2>No Asian recipe to show</h2>
    }
    return (
        <ul>
            {showAsian(
                (asian) => (
                    <li key={asian.id}>{asian.name}</li>,
                    <li key={asian.id}>{asian.ingreadients}</li>,
                    <li key={asian.id}>{asian.recipe}</li>
                )
            )}
        </ul>
    )
}