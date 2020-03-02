import React from 'react';
import {
  Container,
  Row,
  Col,
  Hidden,
  ScreenClass,
} from 'react-awesome-styled-grid';
import { Link } from 'react-router-dom';

const Tab = ({ menu, align, activeTab, setActiveTab }) => {
  return (
    <Container style={{ padding: 0 }}>
      <Hidden>
        <Row
          className="tabNav"
          style={{ margin: 0, justifyContent: `${align}` }}
        >
          {menu.map(tab => (
            <Col
              key={`tab-${tab.name}`}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              align="center"
              justify="center"
              lg={1.5}
              md={1.5}
              sm={1.5}
              xs={0.8}
            >
              <ScreenClass
                render={screen => (
                  <Link
                    style={{
                      fontSize: ['xs'].includes(screen) ? '14px' : 'inherit',
                    }}
                    to={tab.params}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.name}
                  </Link>
                )}
              />
            </Col>
          ))}
        </Row>
      </Hidden>
    </Container>
  );
};

export default Tab;
