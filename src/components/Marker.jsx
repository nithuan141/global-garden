import React from 'react';
import styled from 'styled-components';
import { TreeIcon } from './PublicHome';

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

const Marker = ({ story, onClick }) => (
    <Wrapper
        alt={story.owner}
        onClick={()=> {onClick(story)}}
    >
        <TreeIcon />
    </Wrapper>
);


export default Marker;