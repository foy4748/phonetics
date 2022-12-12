import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { makeApayment } from "../../slices/paymentSlice";
import toast from "react-hot-toast";

const PremiumCard = () => {
  const paymentStatus = useSelector((state) => {
    return state.payments;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Premium Course</h2>
            <ul className="steps steps-vertical">
              <li className="step step-primary">Live Class</li>
              <li className="step step-primary">Class Recorded</li>
              <li className="step step-primary">Live Mentor Support</li>
              <li className="step step-primary">16 Assignment</li>
              <li className="step step-primary">16 Hand&apos;s on Projects</li>
              <li className="step">
                <span className="opacity-50">3 Month Internship</span>
              </li>
              <li className="step">
                <span className="opacity-50">Interview Preparation</span>
              </li>
              <li className="step step-primary">Certificate</li>
              <li className="step step-primary">Life Time Access</li>
              <li className="step step-primary">Helping and Notes</li>
            </ul>
            <div className="card-actions justify-end">
              <button
                disabled={paymentStatus["premiumCard"].paid}
                className="btn btn-primary"
                onClick={() => {
                  dispatch(makeApayment("premiumCard"));
                  toast.success("Enrolled in Premium Lesson");
                }}
              >
                {paymentStatus["premiumCard"].paid ? "Enrolled" : "Enroll Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;

