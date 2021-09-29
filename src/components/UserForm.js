import React, { useEffect } from 'react';
import {
  CustomInput,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import useObjectState from 'react-hooks-object-state';
import Select from 'react-select';
import { OFFICES, SALUTATIONS, USER_PERMISSIONS } from '../constants/dummies';

const UserForm = ({ payload, onChange }) => {
  const [user, setUser] = useObjectState({
    id: payload?.id || '',
    title: payload?.title || '0',
    firstName: payload?.firstName || '',
    middleName: payload?.middleName || '',
    lastName: payload?.lastName || '',
    initials: payload?.initials || '',
    position: payload?.position || '',
    mobile: payload?.mobile || '',
    office: payload?.office || OFFICES[0].id,
    permission: payload?.permission || '2',
    notes: payload?.notes || '',
  });

  useEffect(() => {
    onChange(user);
  }, [user]);

  return (
    <div>
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
            id="userNewSalutation"
            name="userNewSalutation"
            options={SALUTATIONS}
            value={SALUTATIONS.filter(({ id }) => id === user.title)[0]}
            onChange={({ id: title }) => setUser({ title })}
          />
        </Col>
        <Col sm={4}>
          <Input
            value={user.firstName}
            onChange={({ target: { value: firstName } }) => setUser({ firstName })}
            type="text"
            name="userNewFirstName"
            id="userNewFirstName"
            placeholder="First name"
          />
        </Col>
        <Col sm={3}>
          <Input
            value={user.middleName}
            onChange={({ target: { value: middleName } }) => setUser({ middleName })}
            type="text"
            name="userNewMiddleName"
            id="userNewMiddleName"
            placeholder="Middle name"
          />
        </Col>
        <Col sm={3}>
          <Input
            value={user.lastName}
            onChange={({ target: { value: lastName } }) => setUser({ lastName })}
            type="text"
            name="userNewLastName"
            id="userNewLastName"
            placeholder="Last name"
          />
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
          <Input
            value={user.initials}
            onChange={({ target: { value: initials } }) => setUser({ initials })}
            type="text"
            name="userNewDisplayName"
            id="userNewDisplayName"
            placeholder="Perferred display name"
          />
        </Col>
        <Col sm={6}>
          <Input
            value={user.position}
            onChange={({ target: { value: position } }) => setUser({ position })}
            type="text"
            name="userNewPosition"
            id="userNewPosition"
            placeholder="Position"
          />
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
            name="userNewOffice"
            id="userNewOffice"
            options={OFFICES}
            value={OFFICES.filter(({ id }) => id === user.office)[0]}
            onChange={({ id: office }) => setUser({ office })}
          />
        </Col>
        <Col sm={6}>
          <Input
            value={user.mobile}
            onChange={({ target: { value: mobile } }) => setUser({ mobile })}
            type="text"
            name="userNewMobile"
            id="userNewMobile"
            placeholder="Mobile/Cell Number"
          />
        </Col>
      </FormGroup>

      {/* PERMISSIONS */}
      <FormGroup row className="mb-1">
        <Label sm={12} className="text-sm-left">
          User Permissions
        </Label>
      </FormGroup>
      <FormGroup row className="mb-1">
        {React.Children.toArray(USER_PERMISSIONS.map(({ id, label }) => (
          <Col sm={4}>
            <CustomInput
              checked={id === user.permission}
              type="radio"
              id="userNewPermissionsDirector"
              name={`userPermissions${id}`}
              value={id}
              label={label}
              onChange={({ target: { value: permission } }) => setUser({ permission })}
            />
          </Col>
        )))}
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
            value={user.notes}
            onChange={({ target: { value: notes } }) => setUser({ notes })}
            type="textarea"
            id="userNewNotes"
            name="userNewNotes"
            placeholder="User notes or description..."
            rows="3"
          />
        </Col>
      </FormGroup>
    </div>
  );
};

export default UserForm;
