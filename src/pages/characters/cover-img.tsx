import React, {FC} from 'react';
import logoCharacters from "../../assets/logo-characters.png";
import {Flex, CoverImgStyled} from "../../styled";

export interface ICoverImgProps {
    width: string,
    height: string
}

const CoverImg: FC<ICoverImgProps> = (props) => {
    return (
        <Flex>
            <CoverImgStyled
                {...props}
                src={logoCharacters}
                alt="logo-characters"
            />
        </Flex>
    );
};

export default CoverImg;