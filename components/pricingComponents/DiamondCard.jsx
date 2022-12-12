import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { makeApayment } from "../../slices/paymentSlice";
import toast from "react-hot-toast";

const DiamondCard = () => {
  const paymentStatus = useSelector((state) => {
    return state.payments;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Diamond Course</h2>
          <ul className="steps steps-vertical">
            <li className="step step-primary">Live Class</li>
            <li className="step step-primary">Class Recorded</li>
            <li className="step step-primary">Live Mentor Support</li>
            <li className="step step-primary">16 Assignment</li>
            <li className="step step-primary">20 Hand&apos;s on Projects</li>
            <li className="step step-primary">3 Month Internship</li>
            <li className="step step-primary">Interview Preparation</li>
            <li className="step step-primary">Certificate</li>
            <li className="step step-primary">Life Time Access</li>
            <li className="step step-primary">Helping tools and Notes</li>
          </ul>
          <div className="card-actions justify-end">
            <button
              disabled={paymentStatus["diamondCard"].paid}
              className="btn btn-primary"
              onClick={() => {
                dispatch(makeApayment("diamondCard"));
                toast.success("Enrolled in Diamond Lesson");
              }}
            >
              {paymentStatus["diamondCard"].paid ? "Enrolled" : "Enroll Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondCard;

