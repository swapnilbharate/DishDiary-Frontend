import React from 'react';

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    }}>
      <div id="carouselExampleAutoplaying" className="carousel slide pt-2" data-bs-ride="carousel" style={{
        width: '80%',
        maxWidth: '800px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
      }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img.webp" className="d-block w-100" height="400px" alt="Slide 1" style={{ borderRadius: '12px' }} />
          </div>
          <div className="carousel-item">
            <img src="./img2.png" className="d-block w-100" height="400px" alt="Slide 2" style={{ borderRadius: '12px' }} />
          </div>
          <div className="carousel-item">
            <img src="./img3.jpg" className="d-block w-100" height="400px" alt="Slide 3" style={{ borderRadius: '12px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;