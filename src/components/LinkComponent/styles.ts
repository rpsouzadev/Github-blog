import styled, { css } from 'styled-components'

interface LinkComponentProps {
  variant?: 'iconLeft'
}

export const LinkContainer = styled.a<LinkComponentProps>`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['brand-blue']};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  font-weight: 700;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid transparent;

  height: 1.187rem;
  line-height: 1.187rem;

  transition: 0.4s;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }

  ${({ variant }) =>
    variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`
