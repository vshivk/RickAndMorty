import React, {FC} from 'react';
import {Flex} from '../../styled';
import {ButtonLoadStyled} from "./styled";

const Button: FC = () => {
    return (
        <Flex>
            <ButtonLoadStyled type={'button'}>LOAD MORE</ButtonLoadStyled>
        </Flex>
    );
};

export default Button;