"use client";

import React from "react";
import Link from "next/link";
import * as S from "./styles";

const ShareButton: React.FC = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Social>
          <span>Diary</span>

          <div className="social-links">
            <Link href={""}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </Link>

            <Link href={""}>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
          </div>
        </S.Social>
      </S.Wrapper>
    </>
  );
};

export default ShareButton;
