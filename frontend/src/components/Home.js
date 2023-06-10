import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import './Home.css'

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    // <div className="container">
    //   <header className="jumbotron">
    //     {/* <h3>IIT Home page</h3> */}
    //   <img src={process.env.PUBLIC_URL+"logo.png"} className="w-100 rounded-4 shadow-4" />
    //   </header>
    // </div>
    <section>
      <header>
        
          
      
          <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
            
            
           
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="mask mask2" >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">
                      <h1>
                        IITH-EMS
                      </h1>
                      <h3>
                        Our online education platform
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </header>
      
        <main className="mt-5">
          <div className="container">
            <section className="text-center">
              <h4 className="mb-5"><strong>About Us </strong></h4>
      
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="https://er.educause.edu/-/media/images/blogs/2020/8/er20_3206_706x394_blog.jpg?hash=6BCDA470A42BF8086319452828355A6BE4BC96CD&la=en" className="img-fluid" />
                      <a href="#!">
                        <div className="mask mask3" ></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Class Recordings</h5>
                      <p className="card-text">
                        Gain access to the best minds in the country
                      </p>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg" className="img-fluid" />
                      <a href="#!">
                        <div className="mask mask3" ></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Personalized Courses</h5>
                      <p className="card-text">
                        Your learning, your choice. 
                      </p>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-73mwky-178144-Preview.webp" className="img-fluid" />
                      <a href="#!">
                        <div className="mask mask3" ></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Learn anywhere</h5>
                      <p className="card-text">
                        You can attend classes from anywhere
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="row">
                {/* <div className="col-md-6 gx-5 mb-4">
                  <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5 macpic" data-mdb-ripple-color="light">
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201706/online-education-647_062217043733.jpg" className="img-fluid" />
                      <div className="mask mask4"></div>
                  </div>
                </div> */}
      
                <div className="col-md-6 gx-5 mb-4">
                <div className="row">
                <h4><strong>Contact</strong></h4>
                  <p className="text-muted">
                    For more information about the courses and availability
                  </p>
                  <div className="infocard">
                    <p>
                      <h5>
                        Abhay Shankar
                      </h5>
                      CS21BTECH11001
                    </p>
                  </div>
                  <div className="infocard">
                    <p>
                      <h5>
                        Archit Ganvir
                      </h5>
                      CS21BTECH11005     
                    </p>
                  </div>
                  <div className="infocard">
                    <p>
                      <h5>
                        Vishal Burra
                      </h5>
                      CS21BTECH11010
                    </p>
                  </div>
                </div>
                  
                  
                
                  
                </div>

              </div>
            </section>
            
          </div>
        </main>
    </section>
  );
};

export default Home;
