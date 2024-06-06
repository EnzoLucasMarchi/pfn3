


export const Principal = ({dataC, dataF, setMeasure}) => {
    return(
        <section className="page-container">
        <div className="header">
          <button onClick={()=>setMeasure(true)}>C</button>
          <button onClick={()=>setMeasure(false)}>F</button>
        </div>

        <div className="page-body">
          <ul className="days-list">
            <li className="days-item">
              <div className="day-card">
                <h6>day</h6>
                <figure className="day-icon-container">
                  <img src="" alt="icon" />
                </figure>
                <div className="day-tems">
                  <p>max</p>
                  <p>min</p>
                </div>
              </div>
            </li>

            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div className="today-info-container">
            <div className="today-header">
              <h5>Today's Highlights</h5>
            </div>
            <div className="today-info">
              <div>
                <p>Type</p>
                <p>Value</p>
                <figure>
                  <img src="" alt="wind-direction"/>
                Wind
                </figure>
              </div>

              <div>
                <p>Type</p>
                <p>Value</p>
                <p>Range</p>
              </div>

              <div>
                <p>Type</p>
                <p>Value</p>
              </div>

              <div>
                <p>Type</p>
                <p>Value</p>
              </div>
            </div>
          </div>



        </div>


        <div className="page-footer">
          <p>footer</p>
        </div>



      </section>
    )
}