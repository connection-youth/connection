import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: .9rem 4.5rem;
  border: .8px solid #298fe3;
  border-radius: 2.5rem;
  color: #298fe3;
  font-size: .9rem;
  line-height: 1.53;
  letter-spacing: .07px;
  background-color: white;
  transition: .5s background-color ease;

  &:hover {
    color: white;
    background-color: #298fe3;
  }

  @media (max-width: 500px) {
    padding: .4rem 2.5rem;
  }
`;

export default Button;
