import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { useEffect } from 'react';

const ReviewBlock = styled.div`
  .review-form {
    display: flex;
    align-items: stretch;
    height: 150px;
    padding: 24px;
    justify-content: space-around;

    .review-input {
      width: 80%;
      padding: 8px 10px;
      word-wrap: break-word;
    }
  }

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

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png';

const fakeReviews = [
  {
    id: 1,
    register: { name: '수빈' },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
  },
  {
    id: 2,
    register: { name: '수빈' },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
  },
  {
    id: 3,
    register: { name: '수빈' },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
  },
  {
    id: 4,
    register: { name: '수빈' },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
  },
];

const StoreReviews = ({ isMyStore, reviews, id, postReview, setActiveTab }) => {
  const [content, setContent] = useState('');
  const $reviewText = useRef(null);
  const onSubmit = e => {
    e.preventDefault();
    postReview(id, content);
  };
  useEffect(() => {
    setActiveTab('review');
  }, [setActiveTab]);
  return (
    <ReviewBlock>
      <Container className="review-list">
        {isMyStore ? null : (
          <Row>
            <Col>
              <form className="review-form" onSubmit={onSubmit}>
                <textarea
                  className="review-input"
                  onChange={() => setContent($reviewText.current.value)}
                  type="text"
                  ref={$reviewText}
                />
                <button className="submit">리뷰입력</button>
              </form>
            </Col>
          </Row>
        )}
        <Row>
          <ul className="review-list">
            <Col>
              {(reviews?.length > 0 ? reviews : fakeReviews).map(review => (
                <li className="review" key={review.id}>
                  <img
                    className="profile-image"
                    src={
                      review.register?.img ? review.register.img : defaultImg
                    }
                    alt="profile"
                  />
                  <div className="content">
                    <div>
                      <h4 className="title">{review.register?.name}</h4>
                      <p>{review.content}</p>
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
