import InputForm from "../components/Input";
import FoodCarousel from "../components/Carousel";
import { useState, useEffect } from "react";
import './Personal.css'

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
        <div className="personal">
            <h1>Welcome to your personal cookbook</h1>
            <h3>Please enjoy filling out your own recipes and being sure they are safe.</h3>
            <FoodCarousel showFood={showFood} />
        </div>
            <InputForm setShowFood={setShowFood} />
        </>
    )
}