import React from 'react';
import { IntlProvider } from "react-intl";
import { flattenMessages } from "../../../common/helpers/flattenMessages";
import { getKeyValue } from "../../../common/helpers/getKeyValue";
import { messages } from "../../../config/messages";
import { connect, MapDispatchToProps } from "react-redux";
import { setLanguage, SetLanguageProps } from "../../../store/language/actions";
import { Action, Dispatch } from "redux";
import { LOCALE } from "../../../config/locales";

interface IntlProviderWrapperProps {
    children: React.ReactNode;
    activeLanguage: string;
    setLanguage: (language: string) => void;
}

const IntlProviderWrapper = ({children, activeLanguage, setLanguage}: IntlProviderWrapperProps) => (
    <React.Fragment>
        <ul>
            <li>
                <button onClick={() => setLanguage(LOCALE.EN)}>
                    EN
                </button>
            </li>
            <li>
                <button onClick={() => setLanguage(LOCALE.PL)}>
                    PL
                </button>
            </li>
        </ul>
        <IntlProvider locale={activeLanguage}
                      messages={flattenMessages(getKeyValue<keyof any, any>(activeLanguage)(messages))}>
            {children}
        </IntlProvider>
    </React.Fragment>
);

const mapStateToProps = (state: any) => {
    return { activeLanguage: state.language };
};

const mapDispatchToProps: MapDispatchToProps<SetLanguageProps, any> = (dispatch: Dispatch<Action>) => ({
    setLanguage: (language: string) => dispatch(setLanguage(language)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IntlProviderWrapper);
