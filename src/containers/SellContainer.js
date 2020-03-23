import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Sell from '../components/sell/Sell';
import { changeField, initializeForm, sellProduct } from '../modules/sell';
import { calEndTime } from '../lib/util';

/*
 * TODO:
 *  [x]카테고리 리스트 받아오기
 *  [x]제출성공 후 해당 상품 페이지로 이동
 *  [x]이미지 업로드 기능
 *  [x]업로드할 이미지 미리보기
 *  []상품이미지 업로드 4개로 제한
 *  []밸리데이션 추가
 *    []숫자만 존재하는지
 *    [x]모든 양식이 채워졌는지
 *  []에러 메시지 랜더링
 */

const SellContainer = withRouter(
  ({
    history,
    categoryList,
    changeField,
    sellForm,
    initializeForm,
    sellProduct,
    error,
    itemId,
  }) => {
    const [imgBase64, setImgBase64] = useState([]);
    const handleChangeFile = e => {
      const { files } = e.target;
      const imageFiles = [...files];
      // 파일을 선택 안하고 취소했을시 초기화
      if (imageFiles.length === 0) {
        setImgBase64([]);
        changeField({
          key: 'images',
          value: [],
        });
      }
      // 프리뷰 생성, 이미지 등록
      if (imageFiles.length) {
        let images = [];
        imageFiles.forEach(file => {
          let reader = new FileReader();
          reader.onloadend = () => {
            images = [...images, reader.result];
            setImgBase64(images);
          };
          reader.readAsDataURL(file);
        });
        changeField({
          key: 'images',
          value: imageFiles,
        });
      }
    };

    const onChange = e => {
      const { value, name } = e.target;
      changeField({
        key: name,
        value,
      });
    };

    const onSubmit = e => {
      e.preventDefault();
      const {
        categoryId,
        name,
        startPrice,
        quickPrice,
        minBidPrice,
        description,
        endDt,
        images,
      } = sellForm;
      if (
        [
          categoryId,
          name,
          startPrice,
          quickPrice,
          minBidPrice,
          description,
          endDt,
          images,
        ].includes('')
      ) {
        console.log('모든 양식을 입력해주세요.');
        return;
      }
      sellProduct({
        categoryId,
        name,
        startPrice,
        quickPrice,
        minBidPrice,
        description,
        endDt: calEndTime(endDt),
        images,
      });
    };

    useEffect(() => {
      initializeForm();
    }, [initializeForm]);

    useEffect(() => {
      if (error) {
        console.log(error);
        return;
      }
      if (itemId) {
        history.push(`/products/${itemId}`);
      }
    }, [error, itemId, history]);

    return (
      <Sell
        sellForm={sellForm}
        onChange={onChange}
        onSubmit={onSubmit}
        categoryList={categoryList}
        handleChangeFile={handleChangeFile}
        imgBase64={imgBase64}
      />
    );
  },
);

export default connect(
  ({ sell, category }) => ({
    sellForm: sell.sellForm,
    error: sell.error,
    itemId: sell.itemId,
    categoryList: category.categories.supCategoryList,
  }),
  {
    changeField,
    initializeForm,
    sellProduct,
  },
)(SellContainer);
