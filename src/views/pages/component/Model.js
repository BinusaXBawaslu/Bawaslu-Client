import React from "react";

export const Model = ({ setModal, resume }) => {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel" onClick={() => setModal(false)}>Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          {resume !== null && (
          <>
            {" "}
            <embed
              type="application/pdf"
              src={resume}
              width={100+ '%'}
              height={100+ '%'}
            />
          </>
        )}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    // <div className="backshadow">
    //   <div className="custom-modal">
    //     <div className="delete-icon" onClick={() => setModal(false)}>
    //       x
    //     </div>
    //     {resume !== null && (
    //       <>
    //         {" "}
    //         <embed
    //           type="application/pdf"
    //           src={resume}
    //           width={100 + "%"}
    //           height={100 + "%"}
    //         />
    //       </>
    //     )}
    //   </div>
    // </div>
  );
};
