import Layout from "../components/Layout";
import {skills, experiences, projects} from '../profile'
import Link from "next/link";
const Index = () => (
  <Layout>

    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
                <img src="/avatar.png" alt="profile" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Marlon Falcon</h1>
                <h3>FullStack Developer</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <a href="/hireme">Hire me</a>
              </div>
           </div> 

        </div>
      </div>  
    </header>

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {
              skills.map(({skill, percentage}, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                <div className="progress-bar" 
                  role="progressbar" 
                  style={{width: `${percentage}%`}} ></div>
                </div>
              </div>
              ))}

          </div>
        </div>
      </div> 
      <div className="col-md-8">
      <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
            {
              experiences.map(({title, description, from, to}, i) => (
                <li className="py-3" key={i}>
                  <h3>{title}</h3>
                  <h5>{from}-{to}</h5>
                  <p>{description}</p>
                </li>
            ))
            }
          </ul>
          <Link href="/experiences" >
            <a className="btn btn-primary">Know More</a>
          </Link>   
          </div>
        </div>
      </div>   
    </div>


    <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-dark">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-light">Portfolio</h1>
                    </div>
                    {
                projects.map(({title, descripcion, image}, i) => (
                  <div className="col-md-4 p-2" key={i}>  
                  <div className="card">
                      <div className="overflow">
                        <img src={image} 
                            alt="portfolio" className="card-img-top" />
                      </div>       
                      <div className="card-body">
                          <h3>{title}</h3>
                          <p>{descripcion}</p>
                          <button className="btn btn-primary">Know More</button>
                      </div>
                  </div>  
              </div>
                  ))
                    }


                    

                </div>
              </div>
            </div>
    </div>


    <div className="col-md-12 mt-2">
        <div className="text-center">
            <Link href="/portfolio">
                    <a className="btn btn-outline-secondary">More Projects</a>
            </Link>
        </div>
    </div>


  </Layout>  
)

export default Index;