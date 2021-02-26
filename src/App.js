import Card from 'react-bootstrap/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <div className="page-container">
        <div className="parent-container">
            <Card className="job-listing-cards-container">
                <div className="job-listing-card">
                    <div className="job-listing-card-top-information">
                        <div className="row top-portion">
                            <div className="avatar-container">
                                <img className="company-avatar" src="https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTZOIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--228458970ae95998a4b9c12b60560ac743d9c7a7/Next%20Level%20SG.jpg" alt="Company Logo"/>
                            </div>
                            <div className="info-container">
                                {/* placeholder info */}
                                <p className="company-name"> Next Level SG </p>
                                <Card.Title className="job-listing-card-title"> Frontend Developer, UX - Mobile Commerce Saas </Card.Title>
                            </div>
                        </div>
                        <div className="row card-text">
                            <div className="col">
                                <Card.Text style={{fontStyle: 'italic', position:'relative'}}>1 day ago</Card.Text>
                            </div>
                            <div className="col">
                                <span class="specialisation-container">Data Eng</span>
                            </div>

                        </div>
                    </div>
                    <div className="job-listing-card-bottom-information">
                        <span class="tech-stack-container">ETL</span>
                        <span class="tech-stack-container">Play</span>
                        <span class="tech-stack-container">Shell Script</span>
                    </div>
                </div>
                
                
            </Card>
        </div>
        <div className="parent-container">
        <Card className="job-listing-cards-container">
            <div className="job-listing-card">
                <div className="job-listing-card-top-information">
                    <div className="row top-portion">
                        <div className="avatar-container">
                            <img className="company-avatar" src="https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTZOIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--228458970ae95998a4b9c12b60560ac743d9c7a7/Next%20Level%20SG.jpg" alt="Company Logo"/>
                        </div>
                        <div className="info-container">
                            {/* placeholder info */}
                            <p className="company-name"> Next Level SG </p>
                            <Card.Title className="job-listing-card-title"> Frontend Developer, UX - Mobile Commerce Saas </Card.Title>
                        </div>
                    </div>
                    <div className="row card-text">
                        <div className="col">
                            <Card.Text style={{fontStyle: 'italic', position:'relative'}}>1 day ago</Card.Text>
                        </div>
                        <div className="col">
                            <span class="specialisation-container">Data Eng</span>
                        </div>

                    </div>
                </div>
                <div className="job-listing-card-bottom-information">
                    <span class="tech-stack-container">ETL</span>
                    <span class="tech-stack-container">Play</span>
                    <span class="tech-stack-container">Shell Script</span>
                </div>
            </div>
            
            
            </Card>
        </div>
        <div className="parent-container">
            <Card className="job-listing-cards-container">
                <div className="job-listing-card">
                    <div className="job-listing-card-top-information">
                        <div className="row top-portion">
                            <div className="avatar-container">
                                <img className="company-avatar" src="https://www.nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTZOIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--228458970ae95998a4b9c12b60560ac743d9c7a7/Next%20Level%20SG.jpg" alt="Company Logo"/>
                            </div>
                            <div className="info-container">
                                {/* placeholder info */}
                                <p className="company-name"> Next Level SG </p>
                                <Card.Title className="job-listing-card-title"> Frontend Developer, UX - Mobile Commerce Saas </Card.Title>
                            </div>
                        </div>
                        <div className="row card-text">
                            <div className="col">
                                <Card.Text style={{fontStyle: 'italic', position:'relative'}}>1 day ago</Card.Text>
                            </div>
                            <div className="col">
                                <span class="specialisation-container">Data Eng</span>
                            </div>

                        </div>
                    </div>
                    <div className="job-listing-card-bottom-information">
                        <span class="tech-stack-container">ETL</span>
                        <span class="tech-stack-container">Play</span>
                        <span class="tech-stack-container">Shell Script</span>
                    </div>
                </div>
                
                
            </Card>
        </div>
    </div>
    
  );
}


