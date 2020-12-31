import React, { useState } from "react";

const withModalWindow = (Component) => (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Component
      showModal={showModal}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      {...props}
    />
  );
};

export default withModalWindow;
