export default function ResultsSummaryStat({ category, score, icon }) {
    return (
        <div className="card__summary__stat">
            <img src={icon} alt={category} />
            <span className="card__summary__stat__title">{category}</span>
            <span className="card__summary__stat__score">
                <span className="card__summary__stat__score__points">{score}</span> / 100
            </span>
        </div>
    )
}