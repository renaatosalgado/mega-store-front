import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1C285C;
`;

const Container = styled.main`
  min-height: calc(100vh - 130px);

  display: flex;
  flex-direction: column;
  align-items: center;  

  background-color: #FFF;
`;

const SubContainer = styled.div`
  max-width: 968px;

  display: flex;
  flex-direction: column;

  padding: 50px 0;
  gap: 30px;
`;

const Department = styled.div`
	min-width: 968px;
  height: 320px;

  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);

	overflow: hidden;

  background-color: #fff;

	position: relative;

  &:last-child {
    margin-bottom: 100px;
  }
`;

const DepHeader = styled.header`
  height: 40px;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  line-height: 21px;

  padding-left: 20px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 0.5px solid #eaeaea;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);

	color: #FFF;
	background-color: #283880;
`;

const ItemsContainer = styled.div`
  ${props => props.isLoading ? 'height: 80%;' : ''}

  display: flex;
  justify-content: ${props => props.isLoading ? 'center' : 'flex-start'};
  align-items: center;

	overflow-x: scroll;
	overflow-y: hidden;
  
	box-sizing: content-box;

  scroll-behavior: smooth;

	white-space: nowrap;

  padding: 15px 25px;
  padding-bottom: 25px;

  gap: 30px;
`;

const Items = styled.div`
  max-width: 150px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);

  padding: 16px;

  cursor: pointer;

  .image-wraper {
    width: 100%;
    height: 50%;
  }
  .product-image {
    width: 120px;
    height: 143px;

    border-radius: 5px;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    object-fit: contain;
  }

  .info-wrapper {
    min-width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

    span:first-of-type {
      height: 43px;

      font-size: 14px;
      font-weight: 200;

      overflow: hidden;
      text-overflow: ellipsis;

			margin-top: 10px;
    }

    span:last-of-type {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

const FooterContainer = styled.div`
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #eaeaea;
`;

const HorizontalScrollButton = styled.button`
	min-width: 50px;
	min-height: 50px;

	display: flex;
	justify-content: center;
	align-items: center;

	outline: 0;
	transition: 0.5s;
	opacity: 0.8;

	position: absolute;
	${props => props.right === true ? 'right: 10px;' : 'left: 10px;'}
	top: 45%;
	z-index: 99;

	border-radius: 50%;
	
	color: #FFF;
	font-size: 25px;

	background-color: rgba(0,0,0,.8);

	cursor: pointer;

	&:hover {
		opacity: 1;
	}

`

export {
  HeaderContainer,
  ItemsContainer,
  Container,
  DepHeader,
  Department,
  Items,
  SubContainer,
  FooterContainer,
  HorizontalScrollButton
};
