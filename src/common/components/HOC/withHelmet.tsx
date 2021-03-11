import * as React from 'react';
// @ts-ignore
import { Helmet } from 'react-helmet';
// @ts-ignore
import { injectIntl, InjectedIntlProps, FormattedMessage } from 'react-intl';

export interface WithHelmetProps {
  messagePrefix?: string;
}

export function withHelmet<T extends WithHelmetProps>(WrappedComponent: React.ComponentType<T>) {
  return injectIntl(({ ...props }: T & InjectedIntlProps) => (
    <React.Fragment>
      <FormattedMessage id={`${props.messagePrefix}.pageTitle`}>
        {txt => (
          <Helmet>
            <title>{txt}</title>
          </Helmet>
        )}
      </FormattedMessage>

      <WrappedComponent {...props} />
    </React.Fragment>
  ));
}
