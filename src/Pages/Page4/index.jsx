import { Container, FormArea, InputArea, InputTitle, SubButton, Titles } from "./style";

export function Page4() {


    return (
        <>
            <Container>
                <div className="main">

                <Titles>Reserve o seu agora!</Titles>

                    <FormArea>
                        <div className="left">
                            <InputTitle>Name</InputTitle>
                            <InputArea />

                            <InputTitle>Description</InputTitle>
                            <InputArea className="desc" />
                        </div>

                        <div className="right">
                            <InputTitle>TAGS</InputTitle>
                            <InputArea />

                            <InputTitle>Email</InputTitle>
                            <InputArea />

                            <InputTitle>Phone Number</InputTitle>
                            <InputArea />

                            <SubButton>SUBMIT</SubButton>
                        </div>
                    </FormArea>

                </div>
                
            </Container>
        </>
    );
}