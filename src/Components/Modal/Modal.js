import React, { useContext } from "react";
import "./Modal.scss";
import { Dark } from "./../../App";

const Modal = () => {
  const dark = useContext(Dark);

  console.log(dark);

  return (
    <div
      class="modal fade my-modal"
      id="staticBackdrop"
      data-backdrop="true"
      data-keyboard="true"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div
          class="modal-content"
          style={{ backgroundColor: dark.back, color: dark.font }}
        >
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Sign In
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              style={{ color: dark.font }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
