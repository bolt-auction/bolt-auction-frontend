import React, { useRef } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-awesome-styled-grid';
import { MdRemove, MdAddCircleOutline } from 'react-icons/md';

const ImageUpLoaderBlock = styled(Row)`
  .add-Img {
    width: 100%;
    height: 27vh;
    background-color: whitesmoke;
    border-radius: 4px;
    &,
    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: dimgray;
      svg {
        font-size: 4rem;
      }
    }
    label {
      cursor: pointer;
    }
  }
  .image-preview {
    height: 27vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: whitesmoke;
    border-radius: 4px;
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
      color: whitesmoke;
      background-color: #0000008a;
    }
  }
`;

const ImageUpLoader = ({ previewImages, onRemoveImage, onChangeFile }) => {
  const fileInputEl = useRef(null);
  return (
    <ImageUpLoaderBlock>
      {previewImages.length < 4 && (
        <Col
          xs="2"
          sm="2"
          md="3"
          lg="3"
          justify="center"
          align="center"
          style={{ marginTop: '1rem' }}
        >
          <div className="add-Img">
            <label htmlFor="images" onClick={() => fileInputEl.current.click()}>
              <MdAddCircleOutline />
              이미지 업로드
            </label>
            <input
              ref={fileInputEl}
              name="images"
              type="file"
              accept="image/.jpg, .jpeg, .png"
              multiple
              onChange={onChangeFile}
              style={{ display: 'none' }}
            />
          </div>
        </Col>
      )}
      {previewImages &&
        previewImages.map((pi, i) => (
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
              <div className="close" onClick={() => onRemoveImage(pi.name)}>
                <MdRemove />
              </div>
              <img alt="상품 이미지" src={pi.base64} />
            </div>
          </Col>
        ))}
    </ImageUpLoaderBlock>
  );
};

export default ImageUpLoader;
