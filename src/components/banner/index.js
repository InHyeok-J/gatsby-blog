import React from "react";
import { Typing } from "typing-effect-reactjs";
import { BannerContainer, Container, GridContainer, BraceBlock } from "./style";

const Banner = () => {
    const text = "Hello World!";

    return (
        <BannerContainer>
            <Container>
                <GridContainer>
                    <BraceBlock img="images/leftbrace.png" />
                    <Typing
                        styleClass="typing"
                        element="h1"
                        text={text}
                        typeSpeed={200}
                        deleteSpeed={200}
                        disableBlinkingOnEnd={100}
                        blinkingSpeed={500}
                    />
                    <BraceBlock img="images/rightbrace.png" />
                </GridContainer>
            </Container>
        </BannerContainer>
    );
};

export default Banner;
