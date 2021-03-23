import styled from 'styled-components';

const Text = styled.h1`
  ${({ theme, variant }) => variant && theme.variants[variant]}
`;

export default Text;
