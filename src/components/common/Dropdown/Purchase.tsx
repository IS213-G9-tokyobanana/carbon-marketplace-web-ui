import React, { useState } from 'react';
import styled from 'styled-components';

import useCollapse from './useCollapse';
import Menu, { Wrapper as $Menu } from './components/Menu';
import Button, { Wrapper as $Button } from '../Button';
import Input from '../Input';
import locale from 'locale';

const Wrapper = styled.div`
  position: relative;

  ${$Menu} {
    z-index: 10;
  }
`;

const Container = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputContainer = styled.div`
  position: relative;

  input {
    width: 172px;
    padding-right: 60px;
  }
`;

const Unit = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 4px;
`;

const ButtonGroup = styled.div`
  align-self: end;
  display: flex;
  align-items: center;
  gap: 10px;

  ${$Button} {
    border-radius: 8px;
    padding: 4px 8px;
  }
`;

export default () => {
  const [expand, setExpand] = useState(false);

  const onSelectClick = useCollapse(expand, setExpand);
  const [quantity, setQuantity] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuantity(parseInt(value, 10));
  };

  return (
    <Wrapper>
      <Button inverted onClick={onSelectClick}>
        Purchase
      </Button>

      <Menu expand={expand} setExpand={setExpand} onClick={(e) => e.stopPropagation()}>
        <Container>
          <InputContainer>
            <Input
              placeholder={locale.purchaseDropdown.placeholder}
              onChange={handleInput}
            />

            <Unit>{locale.tco2e.token}</Unit>
          </InputContainer>

          <ButtonGroup>
            <Button inverted>{locale.purchaseDropdown.button.max}</Button>

            <form action="/api/checkout" method="POST">
              <input type="hidden" name="quantity" value={quantity} />
              <section>
                <Button classic type="submit" role="link">
                  {locale.purchaseDropdown.button.buy}
                </Button>
              </section>
            </form>
          </ButtonGroup>
        </Container>
      </Menu>
    </Wrapper>
  );
};
