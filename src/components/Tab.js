import React from 'react';
import { Container, Row, Col, Hidden } from 'react-awesome-styled-grid';
import { Link } from 'react-router-dom';

const Tab = ({ menu, align, store }) => {
  return (
    <Container style={{ padding: 0 }}>
      <Hidden sm xs>
        <Row
          className="tabNav"
          style={{ margin: 0, justifyContent: `${align}` }}
        >
          {menu.map(m => (
            <Col
              key={`tab-${m.name}`}
              className="tab"
              align="center"
              justify="center"
              lg={1.5}
              md={1.5}
              sm={1.5}
              xs={1}
            >
              {store ? <Link to={m.params}>{m.name}</Link> : m.name}
            </Col>
          ))}
        </Row>
      </Hidden>
    </Container>
  );
};

export default Tab;
