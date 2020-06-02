import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // eslint-disable-next-line no-console
        console.log('componentDidCatch');
        this.setState({
            error,
            errorInfo,
        })
    }

    render() {
        const {
            errorInfo,
            error
        } = this.state;
        const { children } = this.props;

        if (errorInfo) {
            // eslint-disable-next-line no-console
            console.log('Render error');
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return children;
    }
}
ErrorBoundary.propTypes = {
    children:  PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};
