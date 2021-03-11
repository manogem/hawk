import React, { useEffect, useState } from 'react';
import { withHelmet, WithHelmetProps } from "../../../common/components/HOC/withHelmet";
import { RouteComponentProps, withRouter } from "react-router";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { dashboardApiClient } from "../services/DashboardApiService";
import { useSelector } from "react-redux";
import { authenticationTokenSelector, isFetchingSelector } from "../../../store/authenticationToken/selectors";

const DashboardBase = ({ messagePrefix }: WithHelmetProps & RouteComponentProps) => {
    const [latest, setLatest] = useState([]);

    const authTokenState = useSelector(authenticationTokenSelector);
    const isFetching = useSelector(isFetchingSelector);

    useEffect(() => {
        let isSubscribed = true;

        if (!latest.length && !isFetching) {
            dashboardApiClient(authTokenState).latestMeasurements()
                .then(res => {
                    isSubscribed && res?.data?.data && setLatest(res.data.data);
                });
        }

        return () => {
            isSubscribed = false;
        };
    }, [authTokenState]);


    return (
        <Container>
            <div>
                <FormattedMessage id={`${ messagePrefix }.hello`}/>

                {latest && latest.map((measurement: any, key) => (
                    <div key={key}>
                        {measurement.name}
                    </div>
                ))}
            </div>
        </Container>
    );
};

const DashboardPageWithRouter = withRouter(DashboardBase);
const DashboardPage = withHelmet(DashboardPageWithRouter);

export default DashboardPage;