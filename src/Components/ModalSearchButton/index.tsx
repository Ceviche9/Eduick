import styled from 'styled-components';
import { darken } from 'polished';

export const ModalButton = styled.button`

  margin-top: 5%;

  border-radius: 2%;
  width: 274px;
  height: 58px;
  background: #FFD74F;
  font: 700 11px Open Sans;
  color: #744FF4;
  text-align: center;

  &:hover {
    background: ${darken(0.07, '#FFD74F')};
  }


`;
