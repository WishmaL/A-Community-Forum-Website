import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Button } from 'react-bootstrap';
import { UserConsumer } from './Context';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import DelGraph from './DelGraph';

export const ShowGraphs = () => {
  const [allGraphs, setAllGraphs] = useState([]);

  const roll = localStorage.getItem('roll');

  const fetchGraphs = () => {
    Axios.get('/graphs/getgraphs')
      .then((res) => {
        setAllGraphs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchGraphs();
  }, []);

  // Sending userNamne to 'addgraph' page
  // const clickHandler = (userName) => {
  //   window.location = `/AddGraph/${userName}`;
  // };

  // <<WORKED>>
  let graphs;
  // let editFlag;

  // console.log(roll);
  switch (roll) {
    case 'greatAdmin':
      graphs = allGraphs;
      // console.log(graphs);
      break;

    case 'admin':
      graphs = allGraphs.filter((graph) => {
        return graph.admin_r === 1;
      });
      // editFlag = 'admin_w';
      break;

    case 'member':
      graphs = allGraphs.filter((graph) => {
        return graph.member_r === 1;
      });
      // editFlag = 'member_w';
      break;

    default:
      graphs = allGraphs.filter((graph) => {
        return graph.viewer_r === 1;
      });
      break;
  }

  return (
    <div>
      <UserConsumer>
        {/* set the addArticle component */}

        {(userName) => {
          return (
            <div>
              <div className="alert alert-primary" role="alert">
                <h1>Graph section</h1>

                {roll !== 'viewer' && roll !== 'member' ? (
                  <Link
                    to={(location) => ({
                      ...location,
                      pathname: `/AddGraph/${userName}`,
                    })}
                  >
                    <Button type="button">Add Graph</Button>
                  </Link>
                ) : null}
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

                <DelGraph id={graph.id} fetchGraphs={fetchGraphs} />
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default ShowGraphs;
