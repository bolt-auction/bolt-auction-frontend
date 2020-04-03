import React from 'react';
import styled from 'styled-components';
import ContentSection from './ContentSection';
import Colors from '../../styles/Colors';
import gingerCatSearch from '../../lib/images/gingerCatSearch.png';
import gingerCatError from '../../lib/images/gingerCatError.png';

const ErrorMessageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 86vh;
  width: 100%;
  color: ${Colors.onSurfaceHigh};
  background-color: ${Colors.surface};
  img {
    width: 50vh;
    min-width: 320px;
  }
`;

/*
 * NOTE:
 * 에러메시지 status에 맞추어 렌더링 되도록 작성하고 싶으나
 * 백엔드에서 보내주는 스테이터스가 대부분 500으로 돌아와서
 * 일단 404만 구분 해두었다.
 */

const ErrorMessage = ({ errorResponse, notFound }) => {
  const { status, statusText } = errorResponse;
  return (
    <ContentSection>
      <ErrorMessageBlock>
        {status === 404 ? (
          <>
            <h1>404 Not Found</h1>
            <img alt="NotFound" src={gingerCatSearch} />
            <h3>{notFound} 페이지를 찾을 수 없습니다.</h3>
          </>
        ) : (
          <>
            <h1>
              {status} {statusText}
            </h1>
            <img alt="SomeError" src={gingerCatError} />
            <h3>앗! 오류가 발생했어요!</h3>
          </>
        )}
      </ErrorMessageBlock>
    </ContentSection>
  );
};

export default ErrorMessage;
