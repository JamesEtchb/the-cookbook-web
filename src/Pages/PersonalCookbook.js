import InputForm from "../components/Input";
import RecipeCard from '../components/RecipeCard'
import { useState, useEffect } from "react";

export default function PersonalCookbook () {
    const [showFood, setShowFood] = useState([])
    useEffect(() => {
        fetch('https://the-cookbook-api.web.app/personal')
        .then((results) => results.json())
        .then((data) => setShowFood(data))
        .catch(console.error)
    }, [setShowFood])
    if (!showFood) {
        <h2>No personal recipes posted</h2>
    }
    return (
        <>
            <RecipeCard showFood={showFood} />
            <InputForm setShowFood={setShowFood} />
        </>
    )
}