import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-awesome-styled-grid';
import { MdRemove, MdAddCircleOutline } from 'react-icons/md';

const ImageUpLoaderBlock = styled(Row)`
  .add-Img {
    cursor: pointer;
    svg {
      font-size: 4rem;
    }
  }
  .image-preview {
    position: relative;
    height: 23vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #00000052;
  }
  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 20px;
    height: 20px;
    padding: 0px;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      border-radius: 50%;
      color: white;
      background-color: #00000052;
    }
  }
`;

const ImageUpLoader = ({ images, imgBase64, onRemoveImage, onChangeFile }) => {
  return (
    <ImageUpLoaderBlock>
      {images.length < 4 && (
        <Col xs="2" sm="2" md="3" lg="3" justify="center" align="center">
          <div className="add-Img">
            <MdAddCircleOutline />
          </div>
          <input
            name="images"
            type="file"
            accept="image/.jpg, .jpeg, .png"
            multiple
            onChange={onChangeFile}
            style={{ display: 'none' }}
          />
        </Col>
      )}
      {imgBase64 &&
        imgBase64.map((ib, i) => (
          <Col
            xs="2"
            sm="2"
            md="3"
            lg="3"
            key={i}
            justify="center"
            align="center"
            style={{
              marginTop: '1rem',
            }}
          >
            <div className="image-preview">
              <div className="close" onClick={() => onRemoveImage(ib.name)}>
                <MdRemove />
              </div>
              <img alt="상품 이미지" src={ib.base64} />
            </div>
          </Col>
        ))}
    </ImageUpLoaderBlock>
  );
};

export default ImageUpLoader;
