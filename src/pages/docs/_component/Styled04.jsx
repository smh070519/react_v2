import React from 'react';
import S from '../style';
// common.js에 
// width 100px, height 100px, backgroundcolor: orange로 정의된 box 스타일
// 스타일드 컴포넌트에서 사용해서 box(div태그)를 5개 만들기
// 박스 안에는 각각의 번호를 가진 p태그가 있다. p태그는 박스의 중앙 정렬 배치를 한다. 
const Styled04 = () => {
    return (
        <div>
            <S.divBox>
                <p>1</p>
            </S.divBox>
            <S.divBox>
                <p>2</p>
            </S.divBox>
            <S.divBox>
                <p>3</p>
            </S.divBox>
            <S.divBox>
                <p>4</p>
            </S.divBox>
            <S.divBox>
                <p>5</p>
            </S.divBox>
            
        </div>
    );
};

export default Styled04;