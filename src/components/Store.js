import React, { useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Tab from './Tab';
import StoreProducts from './StoreProducts';
import StoreReviews from './StoreReviews';

import * as Styled from '../styles/Styled';
// import Colors from '../styles/Colors';

import { Container, Row, Col, ScreenBadge } from 'react-awesome-styled-grid';
import { useState } from 'react';
import { useEffect } from 'react';

import { FaCamera } from 'react-icons/fa';
import defaultImg from '../imgs/default-profile.webp';

const StoreTo = ({ match }) => {
  return <Redirect to={`${match.path}/products`} />;
};
// TODO : isMyStore true일 경우 프로필 수정 가능 / false일 경우 리뷰 작성 가능
const Store = ({
  isMyStore,
  id,
  info,
  products,
  reviews,
  getInfo,
  getProducts,
  getReviews,
  postReview,
  editInfo,
  editName,
  editDesc,
  editImage,
  submitInfo,
  error,
  createChatroom,
}) => {
  const [activeTab, setActiveTab] = useState('');
  const [editMode, setEditMode] = useState(false);

  const $name = useRef(null);
  const $desc = useRef(null);
  const $image = useRef(null);

  const tabMenu = [
    { name: '상품', params: `/store/${id}/products`, id: 'product' },
    { name: '리뷰', params: `/store/${id}/reviews`, id: 'review' },
  ];

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  useEffect(() => {
    getInfo(id);
    getProducts(id);
    getReviews(id);
  }, [getInfo, getProducts, getReviews, id]);

  useEffect(() => {
    editName(info.name);
    editDesc(info.description);
    editImage(info.imagePath);
  }, [
    editDesc,
    editImage,
    editName,
    info.description,
    info.imagePath,
    info.name,
  ]);

  const onImageClick = () => {
    $image.current.click();
  };

  const onImageUpload = e => {
    console.log($image.current.value);
    console.dir(e.target);
    const file = e.target.files[0];
    if (!file.type.match('image/.*')) {
      alert('이미지 확장자만 업로드 가능합니다.');
      return;
    }
    const reader = new FileReader();
    reader.onload = e => editImage(e.target.result);
    reader.readAsDataURL(file);
  };

  const onSubmit = () => {
    setEditMode(false);
    submitInfo(id, editInfo.name, editInfo.description, editInfo.image);
  };

  return (
    <div>
      <Styled.Title>
        <h1>{isMyStore ? '내 상점' : `다른 사람 상점`}</h1>
      </Styled.Title>
      <Styled.ContentsBox>
        <Container className="profile">
          <ScreenBadge />
          <Row style={{ height: 200, marginBottom: 25 }}>
            <Col
              align="center"
              justify="center"
              style={{ position: 'relative' }}
            >
              <img
                className="profile-image"
                src={editInfo.image || info.imagePath || defaultImg}
                alt=""
              />
              {editMode ? (
                <>
                  <input
                    type="file"
                    ref={$image}
                    onChange={e => onImageUpload(e)}
                    accept="img/*"
                    required
                    style={{ display: 'none' }}
                  />
                  {isMyStore ? (
                    <FaCamera className="image-edit" onClick={onImageClick} />
                  ) : null}
                </>
              ) : null}
            </Col>
          </Row>
          <Row style={{ height: 48, marginBottom: 4 }}>
            <Col
              align="center"
              justify="center"
              className="profile-title"
              xs={4}
              sm={8}
              md={12}
              lg={12}
            >
              {editMode ? (
                <input
                  onChange={() => editName($name.current.value)}
                  placeholder={info.storeName}
                  ref={$name}
                />
              ) : (
                <h2>{info.storeName}</h2>
              )}{' '}
              {isMyStore ? (
                !editMode ? (
                  <button className="submit" onClick={() => setEditMode(true)}>
                    수정
                  </button>
                ) : (
                  <>
                    <button className="submit" onClick={onSubmit}>
                      완료
                    </button>
                    <button
                      className="cancel"
                      onClick={() => setEditMode(false)}
                    >
                      취소
                    </button>
                  </>
                )
              ) : (
                <button
                  className="submit"
                  onClick={() => {
                    createChatroom(`${info.storeName}과의 채팅`, 1, 3);
                  }}
                >
                  채팅하기
                </button>
              )}
            </Col>
          </Row>
          <Row>
            <Col
              align="center"
              justify="center"
              xs={4}
              sm={8}
              md={12}
              lg={12}
              style={{ padding: 10 }}
            >
              {editMode ? (
                <textarea
                  className="profile-desc"
                  ref={$desc}
                  onChange={() => editDesc($desc.current.value)}
                  placeholder={
                    info.description
                      ? info.description
                      : '상점 소개글을 입력하세요.'
                  }
                />
              ) : (
                <p className="profile-desc">
                  {info.description
                    ? info.description
                    : isMyStore
                    ? '상점 소개글을 입력하세요.'
                    : '상점 소개글이 없습니다.'}
                </p>
              )}
            </Col>
          </Row>
        </Container>
        <Tab
          menu={tabMenu}
          align="center"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Styled.Divider />
        <Switch>
          <Route path={`/store/${id}`} exact component={StoreTo} />
          <Route
            path={`/store/${id}/products`}
            component={() => (
              <StoreProducts items={products} setActiveTab={setActiveTab} />
            )}
          />
          <Route
            path={`/store/${id}/reviews`}
            component={() => (
              <StoreReviews
                isMyStore={isMyStore}
                id={id}
                reviews={reviews['_embedded']?.reviewDtoList}
                postReview={postReview}
                setActiveTab={setActiveTab}
              />
            )}
          />
        </Switch>
      </Styled.ContentsBox>
    </div>
  );
};

export default React.memo(Store);
