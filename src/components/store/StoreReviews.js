import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { useEffect } from 'react';
import Moment from 'react-moment';

import Colors from '../../styles/Colors';

const ReviewBlock = styled.div`
  .review-form {
    display: flex;

    align-items: stretch;
    height: 150px;
    padding: 24px 0;
    justify-content: space-around;
    div {
      position: relative;
      width: 80%;

      .length-check {
        position: absolute;
        right: 15px;
        bottom: 10px;
        color: rgba(33, 33, 33, 0.8);
        transition: color 0.2s ease;
      }

      .length-check.overflow {
        color: red;
      }

      .review-input {
        width: 100%;
        height: 100%;
        padding: 8px 10px;
        word-wrap: break-word;
      }
    }
    .submit {
      background-color: ${Colors.primary};
      color: #fff;
      width: 15%;
      padding: 4px 16px;
    }
  }

  .review-list {
    max-width: 810px;
    width: 100%;
    margin: 0 auto;

    .no-reviews {
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
      width: calc(100% - 56px);
      flex-direction: row;
      min-height: 63px;
      position: relative;

      div {
        display: flex;
        width: calc(100% - 44px);
        flex-direction: column;
        min-height: 63px;
        word-wrap: break-word;

        p {
          max-width: calc(100% - 44px);
          overflow-wrap: break-word;
        }
      }

      .date {
        width: 44px;
        font-size: 10px;
        line-height: 16px;
        color: rgba(0, 0, 0, 0.87);
        overflow-wrap: break-word;
      }
    }

    &:not(:last-child) .content::after {
      content: '';
      position: absolute;
      bottom: -16px;
      width: 100%;
      height: 1.5px;
      background-color: rgba(33, 33, 33, 0.08);
    }
  }
`;

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png';

const StoreReviews = ({ isMyStore, reviews, id, postReview, setActiveTab }) => {
  const [content, setContent] = useState('');
  const [overflow, setOverflow] = useState(false);
  const $reviewText = useRef(null);

  const onChange = () => {
    setContent($reviewText.current.value);
    if (content.length > 200) setOverflow(true);
    else if (content.length <= 200 && overflow) setOverflow(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (content.length <= 0 && content.length > 200) return;
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
                <div>
                  <textarea
                    className="review-input"
                    onChange={onChange}
                    type="text"
                    ref={$reviewText}
                    placeholder="200자 이하로 리뷰를 작성해주세요."
                  />
                  <span
                    className={`length-check ${overflow ? 'overflow' : null}`}
                  >
                    {content.length}/200
                  </span>
                </div>
                <button className="submit">작성</button>
              </form>
            </Col>
          </Row>
        )}
        <Row>
          <ul className="review-list">
            <Col>
              {reviews?.length > 0 ? (
                reviews.map(review => (
                  <li className="review" key={review.reviewId}>
                    <img
                      className="profile-image"
                      src={
                        review.register?.imagePath
                          ? review.register.imagePath
                          : defaultImg
                      }
                      alt="profile"
                    />

                    <div className="content">
                      <div>
                        <h4 className="title">
                          {review.register?.registerName}
                        </h4>
                        <p>{review.content}</p>
                      </div>
                      <span className="date">
                        {(function() {
                          return (
                            <Moment fromNow ago format="YYYY-MM-DD HH:mm">
                              {review.createDt}
                            </Moment>
                          );
                        })()}
                      </span>
                    </div>
                  </li>
                ))
              ) : (
                <div className="no-reviews">아직 작성된 리뷰가 없어요 XD !</div>
              )}
            </Col>
          </ul>
        </Row>
      </Container>
    </ReviewBlock>
  );
};

export default StoreReviews;
