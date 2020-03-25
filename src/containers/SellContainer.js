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
 *  [x]상품이미지 업로드 4개로 제한
 *  []원하는 이미지 삭제 하기
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

    /**
     * 이미지 파일 핸들러
     * @param {array} imageFiles
     */
    const imageFilesHandler = imageFiles => {
      // 이미지를 선택 안하고 취소했을시 초기화
      if (imageFiles.length === 0) {
        setImgBase64([]);
        changeField({
          key: 'images',
          value: [],
        });
        return;
      }
      // 프리뷰 이미지로 사용하기 위한 인코딩
      (function() {
        let images = [];
        imageFiles.forEach(file => {
          let reader = new FileReader();
          reader.onloadend = () => {
            images = [
              ...images,
              {
                name: file.name,
                base64: reader.result,
              },
            ];
            setImgBase64(images);
          };
          reader.readAsDataURL(file);
        });
      })();
      // 리덕스의 이미지 데이터 변경
      changeField({
        key: 'images',
        value: imageFiles,
      });
    };

    const onChangeFile = e => {
      const { files } = e.target;
      const imageFiles = [...sellForm.images, ...files];
      // 선택한 이미지의 개수가 4개 이상일 경우 경고 메시지
      if (imageFiles.length > 4) {
        e.target.value = '';
        return alert('최대 4개의 이미지만 업로드 가능합니다.');
      }
      imageFilesHandler(imageFiles);
      e.target.value = '';
    };

    const onRemoveImage = name => {
      const imageFiles = [...sellForm.images].filter(
        image => image.name !== name,
      );
      imageFilesHandler(imageFiles);
    };

    const onChange = e => {
      const { value, name } = e.target;
      // 상위 카테고리가 변경될 경우 세부 카테고리를 초기화
      if (name === 'supCategoryId') {
        changeField({
          key: 'categoryId',
          value: '',
        });
      }
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
        alert('모든 양식을 입력해주세요.');
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
        onChangeFile={onChangeFile}
        onSubmit={onSubmit}
        categoryList={categoryList}
        imgBase64={imgBase64}
        onRemoveImage={onRemoveImage}
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
