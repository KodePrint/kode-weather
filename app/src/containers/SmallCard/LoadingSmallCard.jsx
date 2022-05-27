import './LoadingSmallCard.css'
const LoadingSmallCard = () => {
  return (
    <article className="Loading">
      <div className="Loading__div condition">
              <div className='Loading__div--icon'>
                <div className="icon"></div>
              </div>
              <p className='Loading__div__p condition__p'></p>
            </div>
            <div className="Loading__div">
              <h3 className='Loading__div__h3'></h3>
              <p className='Loading__div__p feelslike'></p>
            </div>
            <div className="Loading__div city">
              <p className='Loading__div__p city'></p>
              <span className='Loading__div__span'></span>
            </div>
    </article>
  )
}

export default LoadingSmallCard