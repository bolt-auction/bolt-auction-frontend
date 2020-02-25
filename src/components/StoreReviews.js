import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Hidden } from 'react-awesome-styled-grid';

const ReviewBlock = styled.div`
  .review-list {
    width: 810px;
    margin: 0 auto;
  }

  .review {
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 16px;

    .profile-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 16px;
    }

    .content {
      display: flex;
      width: 100%;
      flex-direction: row;
      height: 63px;
      position: relative;

      div {
        display: flex;
        width: 100%;
        flex-direction: column;
        height: 63px;
      }

      .date {
        width: 44px;
        font-size: 10px;
        line-height: 16px;
        color: rgba(0, 0, 0, 0.87);
      }
    }

    &:not(:last-child) .content::after {
      content: '';
      position: absolute;
      top: 73px;
      width: 100%;
      height: 1.5px;
      background-color: rgba(33, 33, 33, 0.08);
    }
  }
`;

const reviews = [
  {
    id: 1,
    title: 'Title1',
    img:
      'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
  },
  {
    id: 2,
    title: 'Title2',
    img:
      'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
  },
  {
    id: 3,
    title: 'Title3',
    img:
      'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
  },
  {
    id: 4,
    title: 'Title4',
    img:
      'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
  },
];

const StoreReviews = ({ isMyStore }) => {
  console.log('isMyStore: ', isMyStore);
  return (
    <ReviewBlock>
      <Container className="review-list">
        <Row>
          <ul className="review-list">
            <Col>
              {reviews.map(review => (
                <li className="review" key={review.id}>
                  <img
                    className="profile-image"
                    src={review.img}
                    alt="profile"
                  />
                  <div className="content">
                    <div>
                      <h4 className="title">{review.title}</h4>
                      <p>{review.comment}</p>
                    </div>
                    <span className="date">1 day ago</span>
                  </div>
                </li>
              ))}
            </Col>
          </ul>
        </Row>
      </Container>
    </ReviewBlock>
  );
};

export default StoreReviews;
