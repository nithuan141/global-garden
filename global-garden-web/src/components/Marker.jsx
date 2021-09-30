import React from 'react';
import styled from 'styled-components';
import tree from '../assets/img/icons/tree.svg'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Marker = ({ text, onClick }) => (
  <Wrapper
    alt={text}
    onClick={onClick}
  >
<span className="btn-inner--icon mr-1" style={{ minWidth: '25px' }}>
            <img alt="..." src={tree} />
        </span>
      </Wrapper>
);


export default Marker;