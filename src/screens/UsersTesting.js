import React from 'react';
import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  FormGroup,
} from 'reactstrap';

import Header from '../components/Header';
import NewUsers from '../components/NewUsers';
import UserTabs from '../components/UserTabs';
import { USERS } from '../constants/dummies';

const UsersPage = () => (
  <Container fluid>
    <Header>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/client/dashboard/:firmId">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Users</BreadcrumbItem>
      </Breadcrumb>
    </Header>

    {/* NEW */}
    <FormGroup row className="mt-3">
      <Col sm={4} />
      <Col sm={4}>
        <NewUsers />
      </Col>
      <Col sm={4} />
    </FormGroup>

    <Row>
      {React.Children.toArray(USERS.map((user) => (
        <Col lg="6">
          <UserTabs
            user={user}
          />
        </Col>
      )))}
    </Row>
  </Container>
);

export default UsersPage;
