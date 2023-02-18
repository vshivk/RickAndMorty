import React, {FC} from 'react';
import {Flex} from "../../styled";
import {CoverImgStyled} from "./styled";

export interface ICoverImgProps {
    widthImg: string,
    heightImg: string,
    img: string,
    alt: string
}

const CoverImg: FC<ICoverImgProps> = (props) => {
    return (
        <Flex>
            <CoverImgStyled
                {...props}
                src={props.img}
                alt={props.alt}
            />
        </Flex>
    );
};

export default CoverImg;