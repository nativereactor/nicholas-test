import React, { useState } from 'react';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import { expandedLog } from '../utils/helpers';
import UserForm from './UserForm';

const NewUsers = () => {
  const [user, setUser] = useState({});

  const NewUserModal = [
    {
      name: 'New User',
      value: 'lg',
    },
  ];

  const initOpenModals = () => {
    let modals = {};

    NewUserModal.forEach((color, index) => {
      modals = { ...modals, [index]: false };
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = (index) => {
    // Toggle selected element
    setOpenModals((currentState) => ({ ...currentState, [index]: !openModals[index] }));
  };

  const onChange = (payload) => {
    setUser(() => payload);
  };

  const onSave = (index) => {
    expandedLog(user);
    // eslint-disable-next-line no-console
    console.log('\n\n');
    toggle(index);
  };

  return (
    <Card className="mb-4">
      <CardBody className="text-center">
        {React.Children.toArray(NewUserModal.map((size, index) => (
          <>
            <Button
              color="primary"
              onClick={() => toggle(index)}
              className="mr-1"
            >
              <FontAwesomeIcon icon={faUserPlus} />
              {' '}
              {size.name}
            </Button>
            <Modal
              isOpen={openModals[index]}
              toggle={() => toggle(index)}
              size={size.value}
            >
              <ModalHeader toggle={() => toggle(index)}>
                Create a
                {' '}
                {size.name}
              </ModalHeader>
              <ModalBody className="m-3">
                <UserForm onChange={onChange} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => toggle(index)}>
                  Close
                </Button>
                {' '}
                <Button color="primary" onClick={() => onSave(index)}>
                  Save
                </Button>
              </ModalFooter>
            </Modal>
          </>
        )))}
      </CardBody>
    </Card>
  );
};

export default NewUsers;
