import styled from "styled-components";

export const Button = styled.button`
  transition: 0.3s;
  font-weight: 600;
  margin-top: 1rem;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-size: max(1rem, min(0.38835vw + 0.908981rem, 1.375rem));
  gap: 0.5em;
  justify-content: center;
  letter-spacing: -0.01em;
  line-height: 1.04545;
  overflow: hidden;
  text-wrap: nowrap;
  padding: 1rem 3rem;
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  background: #0e100f;
  color: rgba(247, 236, 225);
  text-align: center;
  border-radius: 6.25rem;
  border: solid 1px rgba(247, 236, 225, 0.5);
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background: ${({ cor }) => cor || "#f7ece1"};
    color: #0e100f;
  }

  @media (max-width: 950px) {
    width: 90%;
  }
`;

export const ButtonColor = styled.button`
  align-items: center;
  background: 0 0;
  cursor: pointer;
  display: inline-flex;
  font-size: max(1rem, min(0.38835vw + 0.908981rem, 1.375rem));
  font-weight: 600;
  gap: 0.363636em;
  justify-content: center;
  letter-spacing: -0.01em;
  line-height: 1.04545;
  overflow: hidden;
  padding: 0.9375rem 1.5rem;
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  background: #0e100f;
  color: rgba(247, 236, 225);
  text-align: center;
  border-radius: 6.25rem;
  border: solid 1px rgba(247, 236, 225, 0.5);
  font-weight: 600;
  margin-top: auto;

  &:hover {
    transition: 0.3s;
    cursor: pointer;
    background: ${({ cor }) => cor || "#f7ece1"};
    color: #0e100f;
    border: solid 1px #0e100f;
  }

  @media (max-width: 950px) {
    width: 90%;
    padding: 0.75rem 1rem;
  }
`;
