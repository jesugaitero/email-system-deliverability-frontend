import React from 'react'
import styled from 'styled-components';
import {IoStatsChart} from 'react-icons/io5';
import {themeColor, hoverEffect} from "../../../utils";

const InfoOneCard = styled.div`
  background-color: ${themeColor};
  width: 5rem;
  /* height: 100%; */
  height: 40%;
  padding:1rem;
  border-radius: 1rem;
  color: white;
`;
const CardContent = styled.div`

`;
const Chart = styled.div`

`;
const InfoOneText = styled.h3`

`;
const InfoText = styled.h2`

`;
const InfoExtra = styled.h5`

`;

const  InfoOne = () => {
  return (
    <InfoOneCard>
      <CardContent>
        <Chart>
          <IoStatsChart/>
        </Chart>
        <InfoOneText> some info </InfoOneText>
        {/* <InfoText>Other text</InfoText>
        <InfoExtra>Extra text</InfoExtra> */}
      </CardContent>
    </InfoOneCard>
  )
}

export default InfoOne
