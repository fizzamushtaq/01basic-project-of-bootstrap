
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Card Image"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                This is a sample card using Bootstrap and React.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Card Image"
            />
            <div className="card-body">
              <h5 className="card-title">Another Card</h5>
              <p className="card-text">
                Cards can be used to display information in an organized manner.
              </p>
              <a href="#" className="btn btn-success">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    
}

export default App;
