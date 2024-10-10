import styled from "styled-components";
import { Img } from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const StyledProductCard = styled.article`
  display: flex;
  gap: 20px;
  height: 248px;
  width: 727px;
  background-color: ${(props) => props.theme.colorWhite};
  padding: 20px;
  margin: 0;
  border: 1px solid #0000001a;
`;
export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  float: right;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
`;
