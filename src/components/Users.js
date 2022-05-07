import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUsers, removeCurrentUsers } from "../store/users_reducer";

const Users = React.memo(() => {
    const users = useSelector(state => state.users_reducer.users);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleClick = (e, id) => {
        navigate(`/user/${id}`);
    };
   
    const hendlerChange = (e, id) => {
        if (e.target.checked) {
            dispatch(setCurrentUsers(id));
        } else {
            dispatch(removeCurrentUsers(id));
        }
    };

    console.log('Users');

    return ( 
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {users.map(el => (
                <Col key={el.id}>
                    <Card >
                        <Card.Img variant="top" src={el.image} />
                        <Card.Body>
                        <Card.Title style={{cursor: 'pointer'}} onClick={(e) => handleClick(e, el.id)} >{el.name}</Card.Title>
                        <Card.Text>
                            {el.status}
                        </Card.Text>
                        <Form.Check aria-label="option 1" onChange={(e) => hendlerChange(e, el.id)} />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
     );
});

export default Users;