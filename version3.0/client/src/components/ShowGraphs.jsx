import React, { Component, useState, useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Button, Card, Accordion, Form, ListGroup } from 'react-bootstrap';
import { UserConsumer } from './Context';
import Axios from 'axios';

// ////////////////////////////////////////////////////////
// import React from 'react';

export const ShowGraphs = () => {
  // const [userName, setUserName] = useState('');
  const [graphs, setGraphs] = useState([]);

  useEffect(() => {
    Axios.get('/graphs/getgraphs')
      .then((res) => {
        setGraphs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // return () => {
    //   cleanup
    // }
  }, []);

  // Sending userNamne to 'addgraph' page
  const clickHandler = (userName) => {
    window.location = `/AddGraph/${userName}`;
  };

  return (
    <div>
      <UserConsumer>
        {/* set the addArticle component */}

        {(userName) => {
          return (
            <div>
              {/* <CurrentUser currentUser={userName} /> */}
              <div className="alert alert-primary" role="alert">
                <h1>Graph section</h1>

                <Button onClick={() => clickHandler(userName)}>
                  Add graph
                </Button>
              </div>
            </div>
          );
        }}
      </UserConsumer>

      <div className="container">
        <Tabs
          // defaultActiveKey={graphs[0].id}
          transition={false}
          id="noanim-tab-example"
        >
          {graphs.map((graph) => {
            return (
              <Tab Key={graph.id} eventKey={graph.id} title={graph.title}>
                <div dangerouslySetInnerHTML={{ __html: graph.iframe }} />
              </Tab>
            );
          })}
        </Tabs>

        {/*
              TESTING GRAPH 1
            
            <iframe
              width="100%"
              height="800"
              src="https://datastudio.google.com/embed/reporting/a6bbbf99-de99-414e-842e-7fb21552d6bd/page/nWoKB"
              frameborder="0"
              // style="border: 0;"
              allowfullscreen
            ></iframe>

         TESTING GRAPH 2
            <iframe
              width="100%"
              height="800"
              src="https://datastudio.google.com/embed/reporting/1adef32e-6c48-4326-b5d8-2b044f4e5e1d/page/faBKB"
              frameborder="0"
              // style="border: 0;"
              allowfullscreen
            ></iframe> */}
      </div>
    </div>
  );
};

export default ShowGraphs;
