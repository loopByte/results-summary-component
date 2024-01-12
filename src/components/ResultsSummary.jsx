import { useEffect, useState } from "react"
import ResultsSummaryStat from "./ResultsSummaryStat"

export default function ResultsSummary() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <aside className="card">
            <div className="card__results">
                <p className="card__results__title">Your Result</p>
                <div className="card__results__score">
                    <h1>76</h1>
                    <span>of 100</span>
                </div>
                <h4 className="card__results__grade">Great</h4>
                <p className="card__results__text">You scored higher than 65% of the people who have taken these tests.</p>
            </div>

            <div className="card__summary">
                <h3>Summary</h3>
                {data.map(({ category, score, icon }, index) => <ResultsSummaryStat key={index} category={category} score={score} icon={icon} />)}
                <button className="btn">Continue</button>
            </div>
        </aside>
    )
}