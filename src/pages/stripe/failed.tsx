import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
`;

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default () => {
  return (
    <Wrapper>
      <Section>
        <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
      </Section>
    </Wrapper>
  );
};
