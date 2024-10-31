import React from 'react';
import S from '../style';

// const StyledDiv = styled.div`
//     width: 100px;
//     height: 100px;
//     border: solid 1px #333;
// `;

const Styled01 = () => {
    // strong, p
    // strong : 컴포넌트를 정의할 때 props로 글자 크기를 30px로 지정
    // p : 컴포넌트를 정의할 때 props로 폰트 굵기는 blod로, 컬러를 orange로 지정
    return (
        <S.StyledDiv>
            스타일 된 컴포넌트
            <S.Input color={"pink"}/>
            <S.StyledButton backgroundColor={"blue"}>스타일 된 버튼</S.StyledButton>
        </S.StyledDiv>
    );
};

export default Styled01;