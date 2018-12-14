// higher order component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return(
        <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
    );
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAdmin && <p>This is private info, please do not share!</p>}
                <WrappedComponent {...props} />
            </div>
        );
    };
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAuthentificated && <p>UserAuthentificated</p>}
                <WrappedComponent {...props}/>
            </div>
        )
    }
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info)

ReactDOM.render(<div>
    <AuthInfo isAuthentificated={false} info="this is the info"/>
    </div>, document.getElementById('app'));

