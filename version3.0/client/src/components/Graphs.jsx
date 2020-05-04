import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export class Graphs extends Component {
  render() {
    return (
      <div>
          <div class="alert alert-primary" role="alert">
          <h1>Graph section</h1>
        </div>
        <div class="container">
          {/* <ul class="nav nav-pills nav-justified row">
            <li
              class="col text-center"
              data-target="#myCarousel"
              data-slide-to="0"
              class="active"
            >
              <button
                type="button"
                class="btn btn-outline-dark btn-lg display-1"
              >
                <h2>Zoom meetings hosted by LEARN</h2>
              </button>
            </li>
            <li
              class="col text-center"
              data-target="#myCarousel"
              data-slide-to="1"
            >
              <button
                type="button"
                class="btn btn-outline-dark btn-lg display-1"
              >
                <h2>LEARN.zoom University Stats</h2>
              </button>
            </li>
          </ul> */}

          <Tabs
            defaultActiveKey="graph_1"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="graph_1" title="Graph_1">
              <iframe
                width="100%"
                height="800"
                src="https://datastudio.google.com/embed/reporting/a6bbbf99-de99-414e-842e-7fb21552d6bd/page/nWoKB"
                frameborder="0"
                // style="border: 0;"
                allowfullscreen
              ></iframe>
            </Tab>
            <Tab eventKey="graph_2" title="Graph_2">
              <iframe
                width="100%"
                height="800"
                src="https://datastudio.google.com/embed/reporting/1adef32e-6c48-4326-b5d8-2b044f4e5e1d/page/faBKB"
                frameborder="0"
                // style="border: 0;"
                allowfullscreen
              ></iframe>
            </Tab>
          </Tabs>
        </div>

        {/* <iframe
          width="600"
          height="1000"
          src="https://datastudio.google.com/embed/reporting/a6bbbf99-de99-414e-842e-7fb21552d6bd/page/nWoKB"
          frameborder="0"
          allowfullscreen
        ></iframe> */}
        {/* /////////////////////////////////////////////// */}


        {/* <div class="container">
          <div id="myCarousel" class="carousel slide">
            <ul class="nav nav-pills nav-justified row">
              <li
                class="col text-center"
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              >
                <button
                  type="button"
                  class="btn btn-outline-dark btn-lg display-1"
                >
                  <h2>Zoom meetings hosted by LEARN</h2>
                </button>
              </li>
              <li
                class="col text-center"
                data-target="#myCarousel"
                data-slide-to="1"
              >
                <button
                  type="button"
                  class="btn btn-outline-dark btn-lg display-1"
                >
                  <h2>LEARN.zoom University Stats</h2>
                </button>
              </li>
            </ul>

            <div class="carousel-inner">
              <div class="item active">
                <div class="temp">
                  <h2 class="text-center">LEARN.zoom Stats during COVID-19</h2>
                  <iframe
                    width="100%"
                    height="800"
                    src="https://datastudio.google.com/embed/reporting/a6bbbf99-de99-414e-842e-7fb21552d6bd/page/nWoKB"
                    frameborder="0"
                    // style="border: 0;"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="item">
                <div class="temp">
                  <h2 class="text-center">
                    LEARN.zoom University Stats during COVID-19
                  </h2>

                  <iframe
                    width="100%"
                    height="800"
                    src="https://datastudio.google.com/embed/reporting/1adef32e-6c48-4326-b5d8-2b044f4e5e1d/page/faBKB"
                    frameborder="0"
                    // style="border: 0;"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* /////////////////////////////////////////////// */}
      </div>
    );
  }
}

export default Graphs;
