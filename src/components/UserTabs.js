import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import classnames from 'classnames';

import {
  Button,
  CardBody,
  CardHeader,
  CustomInput,
  Col,
  FormGroup,
  Label,
  Input,
  Nav,
  Form,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';

import { Settings, Trash2, User } from 'react-feather';
import { OFFICES, SALUTATIONS } from '../constants/dummies';

const UserTabs = ({ user }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(() => tab);
    }
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
            <Form>

              {/* DISPLAY / POSITION NAME */}
              <FormGroup row className="mb-1">
                <Label sm={2} className="text-sm-left">
                  Salutation
                </Label>
                <Label sm={4} className="text-sm-left">
                  First Name
                </Label>
                <Label sm={3} className="text-sm-left">
                  Middle Name
                </Label>
                <Label sm={3} className="text-sm-left">
                  Last Name
                </Label>
              </FormGroup>
              <FormGroup row className="mb-1">
                <Col sm={2}>
                  <Select
                    className="react-select-container"
                    classNamePrefix="react-select"
                    name="userSalutation"
                    options={SALUTATIONS}
                  />
                </Col>
                <Col sm={4}>
                  <Input type="text" name="userFirstName" placeholder="First name" />
                </Col>
                <Col sm={3}>
                  <Input type="text" name="userMiddleName" placeholder="Middle name" />
                </Col>
                <Col sm={3}>
                  <Input type="text" name="userLastName" placeholder="Last name" />
                </Col>
              </FormGroup>

              {/* USER NAME */}
              <FormGroup row className="mb-1">
                <Label sm={3} className="text-sm-left">
                  Display Name
                </Label>
                <Col sm={3} />
                <Label sm={2} className="text-sm-left">
                  Position
                </Label>
                <Col sm={4} />
              </FormGroup>
              <FormGroup row className="mb-1">
                <Col sm={6}>
                  <Input type="text" name="userDisplayName" placeholder="Perferred display name" />
                </Col>
                <Col sm={6}>
                  <Input type="text" name="userPosition" placeholder="Position" />
                </Col>
              </FormGroup>

              {/* OFFICE / CALLER ID */}
              <FormGroup row className="mb-1">
                <Label sm={3} className="text-sm-left">
                  Office Location
                </Label>
                <Col sm={3} />
                <Label sm={3} className="text-sm-left">
                  Mobile Number
                </Label>
                <Col sm={3} />
              </FormGroup>
              <FormGroup row className="mb-1">
                <Col sm={6}>
                  <Select
                    className="react-select-container"
                    classNamePrefix="react-select"
                    name="userOffice"
                    options={OFFICES}
                  />
                </Col>
                <Col sm={6}>
                  <Input type="text" name="userMobile" placeholder="Mobile/Cell Number" />
                </Col>
              </FormGroup>

              {/* PERMISSIONS */}
              <FormGroup row className="mb-1">
                <Label sm={12} className="text-sm-left">
                  User Permissions
                </Label>
              </FormGroup>
              <FormGroup row className="mb-1">
                <Col sm={1} />
                <Col sm={4}>
                  <CustomInput
                    type="radio"
                    id="userPermissionsDirector"
                    name="userPermissions"
                    label="Director"
                    disabled
                  />
                </Col>
                <Col sm={4}>
                  <CustomInput
                    type="radio"
                    id="userPermissionsManager"
                    name="userPermissions"
                    label="Manager"
                    className="mb-2"
                  />
                </Col>
                <Col sm={3}>
                  <CustomInput
                    type="radio"
                    id="userPermissionsUser"
                    name="userPermissions"
                    label="User"
                    className="mb-2"
                    defaultChecked
                  />
                </Col>
              </FormGroup>

              {/* NOTES */}
              <FormGroup row className="mb-1">
                <Label sm={12} className="text-sm-left">
                  User Notes
                </Label>
              </FormGroup>
              <FormGroup row className="mb-1">
                <Col sm={12}>
                  <Input
                    type="textarea"
                    name="textarea"
                    placeholder="User notes or description..."
                    rows="3"
                  />
                </Col>
              </FormGroup>

              {/* SAVE / UPDATE */}
              <FormGroup row className="mt-3">
                <Col sm={12} className="text-sm-right">
                  <Button color="success">Save</Button>
                </Col>
              </FormGroup>

            </Form>
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
