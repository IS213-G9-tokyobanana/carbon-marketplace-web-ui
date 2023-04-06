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
        <p>
          We appreciate your business! If you have any questions, please email
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </Section>
    </Wrapper>
  );
};
