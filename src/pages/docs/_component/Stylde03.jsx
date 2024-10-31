import React from 'react';
import S from '../style';
import BasicButton from '../../../components/button/BasicButton';

const Stylde03 = () => {
    
    return (
        <div>
            <form >
                <S.Wrap>
                    <span>이메일</span>
                    <input type="text" />
                </S.Wrap>
                <S.Wrap>
                    <span>비밀번호</span>
                    <input type="pw" />
                </S.Wrap>
                <S.Wrap>
                    <span>비밀번호 확인</span>
                    <input type="text" />
                </S.Wrap>
                <S.Wrap>
                    <BasicButton type="button" variant={"primary"} size={"large"} shape={"small"}>로그인</BasicButton>
                    <button>회원가입</button>
                </S.Wrap>
            </form>
            <div></div>
        </div>
    );
};

export default Stylde03;