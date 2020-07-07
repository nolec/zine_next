import React, {useState} from "react";
import styled from "styled-components";

const MoreBox = styled.div`
  width : 100%;
  display :flex;
  justify-content: center;
  align-items: center;
  margin : 10px 0;
`;
const More = styled.div`
    padding : 20px 37px;
    cursor : pointer;
    border : 1px solid;
    transition : .1s linear;
    :hover {
      background-color : #ff7384;
      color : white;
    }
    span{
      font-size: 14.7px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.37px;
    }
`;

interface IMoreBtnProps {
    fetchMore: any,
    limit: number
    handleMarginCount : Function
}

const MoreBtn: React.FC<IMoreBtnProps> = ({fetchMore, limit,handleMarginCount}) => {

    const [per, setPer] = useState(1);
    const clickMan = (limit: any) => {
        setPer(per + 1);
        handleMarginCount();
        fetchMore({
            variables: {
                limit: limit,
                skip: limit * per
            },
            updateQuery: (prev: { articles: any; }, {fetchMoreResult}: any) => {
                console.log(fetchMoreResult);
                if (!fetchMoreResult) return prev;
                const result = Object.assign({}, prev, {articles: [...prev.articles, ...fetchMoreResult.articles]});
                return result
            }
        })
    }

    return (
        <MoreBox>
            <More onClick={() => clickMan(limit)}>
                <span>MORE VIEW</span>
            </More>
        </MoreBox>)
}

export default MoreBtn;