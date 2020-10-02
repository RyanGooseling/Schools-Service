/* eslint-disable react/prop-types */
import React from 'react';

const ReviewsModal = (props) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";

  // return (
  //   <div className={showHideClassName}>
  //     <section className="modal-main">
  //       <h3>
  //         Here is a modal folks!!
  //       </h3>
  //       <button type="submit">close</button>
  //     </section>
  //   </div>
  // );

  const showHideClassName = props.showModal ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img src="./assets/close.png" alt="" className="closeModal" onClick={props.modalHandlerHide} />
        <h3>
          Here is a modal !! {JSON.stringify(props.showModal)}
        </h3>
        <button type="submit">close</button>
      </section>
    </div>
  );
};

export default ReviewsModal;
