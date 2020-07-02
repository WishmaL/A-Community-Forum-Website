import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Button } from 'react-bootstrap';
import { UserConsumer } from './Context';
import Axios from 'axios';

export const ShowGraphs = () => {
  const [graphs, setGraphs] = useState([]);

  useEffect(() => {
    Axios.get('/graphs/getgraphs')
      .then((res) => {
        setGraphs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Tabs transition={false} id="noanim-tab-example">
          {graphs.map((graph) => {
            return (
              <Tab key={graph.id} eventKey={graph.id} title={graph.title}>
                <div dangerouslySetInnerHTML={{ __html: graph.iframe }} />

                <h2 className="text-center">{graph.title}</h2>
                <p>{graph.description}</p>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default ShowGraphs;
