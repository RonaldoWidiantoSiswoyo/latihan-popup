import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const clickedModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={() => clickedModal()}>Click This!</button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={clickedModal}></div>
          <div className="modal-content">
            <h1>This is Modal Content</h1>
            <p>
              lorem ansdfjbj asdbfjbsd djsbfjds cdnas fknnsd fksn akndfk asc
              ksncka sdcnaksnalnfj sdfnasj jasbdckjabsdc jasbc asfjboeqohf dfpan
              fa idfnoasnc sjc sjbcas cjbas jfbiuewbf aucbua dbciabcjkasbdcj
              ajsb osc sdcnin asjdbjsbfmsj sjfasjbf asjbfj sadfjbas fdjbsdfj
              biuewqfoi dfainfa dfiad
            </p>
            <button onClick={() => clickedModal()} className="close-modal">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
