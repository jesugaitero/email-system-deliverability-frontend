import React from 'react'
import styled from 'styled-components';
import {themeColor} from '../../utils'

const Div = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

  ${({glow}) => glow && `
      font-size:0.8rem;
      padding:0.2rem 0.5rem;
      font-weight: normal;color: #2f233d;
      background-color: rgba(109,134, 245, 0.192);
      color: white;
  ` }
  ${({edit}) => edit && `
      font-size:0.8rem;
      padding:0.2rem 0.5rem;
      font-weight: normal;color: #2f233d;
      background-color: #70e00041;
      color: #70e000;
  ` }
    ${({remove}) => remove && `
      font-size:0.8rem;
      padding:0.2rem 0.5rem;
      font-weight: normal;color: #2f233d;
      background-color: #ff595e41;
      color: #ff595e;
  ` }
`

const Badge = ({content, glow = false, edit = false, remove = false}) => {
  return (
    <Div glow={glow} edit={edit} remove={remove}>
      {content}
    </Div>
  )
}

export default Badge
