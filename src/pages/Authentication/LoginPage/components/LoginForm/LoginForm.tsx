import React from 'react';
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { Form } from "formik";
import { TextInput } from "../../../../../common/components/Form/TextInput";
import {FormattedMessage, useIntl} from "react-intl";
import { Button } from "../../../../../common/components/Button";
import { WithHelmetProps } from "../../../../../common/components/HOC/withHelmet";

interface LoginFormBaseProps {
    isFetching: boolean;
    status: number | null;
}

export const LoginForm = ({messagePrefix, isFetching, status}: WithHelmetProps & LoginFormBaseProps) => {
    const intl = useIntl();

    if (isFetching) {
        return <div>I'm loggin in</div>
    }

    return (
        <Form translate="yes">
            <Row>
                <Col lg={12}>
                    <TextInput
                        name={ 'username' }
                        placeholder={ intl.formatMessage({id: `${messagePrefix}.username`}) }
                    />
                </Col>

                <Col lg={12}>
                    <TextInput
                        name={ 'password' }
                        placeholder={ intl.formatMessage({id: `${messagePrefix}.password`}) }
                    />
                </Col>

                {status &&
                <Col lg={12}>
                    <p>
                        <FormattedMessage id={ `${messagePrefix}.status.${status}` } />
                    </p>
                </Col>
                }

                <Col lg={12}>
                    <SubmitButtonContainer>
                        <Button
                            type={ 'submit' }
                        >
                            <FormattedMessage id={ `${messagePrefix}.submit` } />
                        </Button>
                    </SubmitButtonContainer>
                </Col>
            </Row>
        </Form>
    );
};

const SubmitButtonContainer = styled.div`
    text-align: center;
    margin-top: 2em;
`;