import styled from "./styled";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.highlight};
  border: 3px solid ${(p) => p.theme.colors.stroke};
  border-radius: ${(p) => p.theme.border.small};
  color: ${(p) => p.theme.colors.black};
  padding: 0.5rem 0.9rem;
  font-size: 1.1rem;
  font-weight: bold;
`;
