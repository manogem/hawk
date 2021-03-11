import React from 'react';
import { withHelmet, WithHelmetProps } from "../../../common/components/HOC/withHelmet";
import { RouteComponentProps, withRouter } from "react-router";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import LoginForm from "./components/LoginForm/LoginFormContainer";

const LoginPageBase = ({ messagePrefix }: WithHelmetProps & RouteComponentProps) => (
    <Container>
        <FormattedMessage id={`${messagePrefix}.hello`}/>

        <LoginForm messagePrefix={messagePrefix}/>
    </Container>
);

const LoginPageWithRouter = withRouter(LoginPageBase);
const LoginPage = withHelmet(LoginPageWithRouter);

export default LoginPage;