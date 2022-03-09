import React from 'react';
export default function Upart() {
  return (
      <section class="colored-section" id="title">

  <div class="container-fluid">
  

    <nav class="navbar navbar-expand-lg navbar-dark">

      <a class="navbar-brand" id="brand" href="">tindog</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#footer">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#cta">Download</a>
          </li>
        </ul>

      </div>
    </nav>


    <!-- Title -->

    <div class="row">

      <div class="col-lg-6">
        <h1 class="Big-heading">Meet new and interesting dogs nearby.</h1>
        <button type="button" class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i> Download</button>
        <button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fab fa-google-play"></i> Download</button>
      </div>

      <div class="col-lg-6">
        <img class="title-image" src="images/iphone6.png" alt="iphone-mockup">
      </div>

    </div>
  </div>
</section>
);
}
