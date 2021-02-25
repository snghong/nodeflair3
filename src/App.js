import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="job-listing-cards-container">
          <div className="job-listing-card">
              <div className="job-listing-card-top-information">
                  <div className="top-portion">
                      <div className="avatar-container">
                          {/* placeholder image */}
                          <img className="company-avatar" src="https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ21IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4537ffc0ba49a27cb75349ea0649c988f4dad54a/Singtel.png"/>
                      </div>
                      <div className="info-container">
                          {/* placeholder info */}
                          <p> Nodeflair.js </p>
                          <h2 className="job-listing-card-title"> Software Engineer </h2>
                      </div>
                  </div>
                  <div className="row">
                      <div class="col-6" ><p >1 day ago</p></div>
                      <div class="col-6"><span class="specialisation-container">Data Eng</span></div>

                  </div>
              </div>
              <div className="job-listing-card-bottom-information">
                  <span class="tech-stack-container">ETL</span>
                  <span class="tech-stack-container">Play</span>
                  <span class="tech-stack-container">Shell Script</span>
              </div>
          </div>
          
          
    </div>
  );
}

export default App;
