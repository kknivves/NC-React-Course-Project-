import { Col } from 'reactstrap';

//This will receive error message STATE value as a PROP. 
//Destructure error message from the props object in the parameter list and export as default 
const Error = ({ errMsg }) => {
    return (
        <Col>
            <h4>{errMsg}</h4> 
        </Col>
    );
};

export default Error;