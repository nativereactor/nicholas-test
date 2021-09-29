import React, { useMemo, useState } from 'react';
import classnames from 'classnames';

import {
  Button,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
  Nav,
  Form,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';

import { Settings, Trash2, User } from 'react-feather';
import UserForm from './UserForm';
import { expandedLog } from '../utils/helpers';

const UserTabs = ({ user }) => {
  const [activeTab, setActiveTab] = useState('1');
  const [userData, setUserData] = useState({});

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(() => tab);
    }
  };

  const onChange = (payload) => {
    setUserData(() => payload);
  };

  const onSave = () => {
    expandedLog(userData);
    // eslint-disable-next-line no-console
    console.log('\n\n');
  };

  const fullName = useMemo(() => [user.firstName, user.middleName, user.lastName].filter((text) => !!text).join(' '), [user]);

  return (
    <div className="tab tab-grey tab-vertical">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            <User />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            <Settings />
          </NavLink>
        </NavItem>
        <NavItem />
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            <Trash2 />
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>

        <TabPane tabId="1">
          <CardHeader>
            <FormGroup row className="mb-1 tab-title">
              <Label sm={12} className="text-sm-left">
                <h4 className="tab-title">{fullName}</h4>
                <p>{user.id}</p>
              </Label>
            </FormGroup>
          </CardHeader>
          <CardBody>
            <FormGroup row className="mb-1">
              <Label sm={12} className="text-sm-left">
                {user.notes}
              </Label>
            </FormGroup>
          </CardBody>
        </TabPane>

        <TabPane tabId="2">
          <CardHeader>
            <FormGroup row className="mb-1 tab-title">
              <Label sm={6} className="text-sm-left">
                <h4 className="tab-title">User Settings</h4>
              </Label>
              <Label sm={6} className="text-sm-right">
                <b>{fullName}</b>
                <p>{user.id}</p>
              </Label>
            </FormGroup>
          </CardHeader>
          <CardBody>

            <UserForm payload={user} onChange={onChange} />

            {/* SAVE / UPDATE */}
            <FormGroup row className="mt-3">
              <Col sm={12} className="text-sm-right">
                <Button onClick={onSave} color="success">Save</Button>
              </Col>
            </FormGroup>

          </CardBody>
        </TabPane>

        <TabPane tabId="3">
          <CardHeader>
            <FormGroup row className="mb-1 tab-title">
              <Label sm={6} className="text-sm-left">
                <h4 className="tab-title">Delete User</h4>
              </Label>
              <Label sm={6} className="text-sm-right">
                <b>{fullName}</b>
                <p>{user.id}</p>
              </Label>
            </FormGroup>
            <p />
            <p>Review the User prior to deletion as this action is irreversible.</p>
            <p>You will be prompted to confirm the deletion as a way to avoid any mistakes.</p>
            <p>Deleting a User will also delete any associated licences or addons.</p>
            <p>Users can only be deleted by a User with Manager permissions.</p>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup row>
                <Col sm={{ size: 7, offset: 5 }}>
                  <Button color="danger">Delete</Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </TabPane>

      </TabContent>
    </div>
  );
};

export default UserTabs;
