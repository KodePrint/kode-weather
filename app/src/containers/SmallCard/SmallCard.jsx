const SmallCard = () => {
  return (
    <article className="SmallCard">
      <div className="SmallCard__div top">
        <picture>
          <img src="" alt="Icon" />
        </picture>
        <div className="SmallCard__div--temp">
          <h3 className="temp">27°</h3>
          <p className="feelslike">feelslike:</p>
        </div>
      </div>
    </article>
  )
}

export default SmallCard