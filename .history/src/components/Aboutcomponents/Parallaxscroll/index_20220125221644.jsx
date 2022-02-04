import React from "react";

export default function Parallaxscroll() {
  return (
    <div className="parallax_scroll">
<div className="navbar">
      <div className="container flex">
        <h1 className="logo">Loruki.</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="features.html">Features</a></li>
            <li><a href="docs.html">Docs</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Easier Deployment</h1>
          <p>
            Deploy web apps of all kinds, from large scale enterprise APIs to
            static websites for individuals. Fill out the form to try a demo of
            our platform
          </p>
          <a href="features.html" className="btn btn-outline">Read More</a>
        </div>

        <div className="showcase-form card">
          <h2>Request a Demo</h2>

          <form>
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>

    <section className="stats">
      <div className="container">
        <h3 className="stats-heading text-center my-1">
          Welcome to the best platform for building applications of all types
          with modern architecture and scaling
        </h3>

        <div className="grid grid-3 text-center my-4">
          <div>
            <i className="fas fa-server fa-3x"></i>
            <h3>10,349,405</h3>
            <p className="text-secondary">Deployments</p>
          </div>
          <div>
            <i className="fas fa-upload fa-3x"></i>
            <h3>987 TB</h3>
            <p className="text-secondary">Published</p>
          </div>
          <div>
            <i className="fas fa-project-diagram fa-3x"></i>
            <h3>2,343,265</h3>
            <p className="text-secondary">Projects</p>
          </div>
        </div>
      </div>
    </section>

    <section className="cli">
      <div className="container grid">
        <img src="images/cli.png" alt="" />
        <div className="card">
          <h3>Easy to use, cross platform CLI</h3>
        </div>
        <div className="card">
          <h3>Deploy in seconds</h3>
        </div>
      </div>
    </section>

    <section className="cloud bg-primary my-2 py-2">
      <div className="container grid">
        <div className="text-center">
          <h2 className="lg">Extreme Cloud Hosting</h2>
          <p className="lead my-1">
            Cloud hosting like you've never seen. Fast, efficient and scalable
          </p>
          <a href="features.html" className="btn btn-dark">Read More</a>
        </div>
        <img src="images/cloud.png" alt="" />
      </div>
    </section>

    <section className="languages">
      <h2 className="md text-center my-2">Supported Languages</h2>
      <div className="container flex">
        <div className="card">
          <h4>Node.js</h4>
          <img src="images/logos/node.png" alt="" />
        </div>
        <div className="card">
          <h4>Python</h4>
          <img src="images/logos/python.png" alt="" />
        </div>
        <div className="card">
          <h4>C#</h4>
          <img src="images/logos/csharp.png" alt="" />
        </div>
        <div className="card">
          <h4>Ruby</h4>
          <img src="images/logos/ruby.png" alt="" />
        </div>
        <div className="card">
          <h4>PHP</h4>
          <img src="images/logos/php.png" alt="" />
        </div>
        <div className="card">
          <h4>Scala</h4>
          <img src="images/logos/scala.png" alt="" />
        </div>
        <div className="card">
          <h4>Clojure</h4>
          <img src="images/logos/clojure.png" alt="" />
        </div>
      </div>
    </section>

    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <h1>Loruki</h1>
          <p>Copyright &copy; 2020</p>
        </div>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="features.html">Features</a></li>
            <li><a href="docs.html">Docs</a></li>
          </ul>
        </nav>
        <div className="social">
          <a href="#"><i className="fab fa-github fa-2x"></i></a>
          <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
        </div>
      </div>
    </footer>
    </div>
  );
}
