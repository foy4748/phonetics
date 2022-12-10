import React from 'react';

const FreeCard = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Free Course</h2>
                    <ul className="steps steps-vertical lg:steps-horizontal">
                        <li className="step"><span className='opacity-50'>Live Class</span></li>
                        <li className="step step-primary">3 Class Recorded </li>
                        <li className="step"><span className='opacity-50'>Live Mentor Support</span></li>
                        <li className="step"><span className='opacity-50'>16 Assignment</span></li>
                        <li className="step"><span className='opacity-50'>20 Hand&apos;s on Projects</span></li>
                        <li className="step"><span className='opacity-50'>3 Month Internship</span></li>
                        <li className="step"><span className='opacity-50'>Interview Preparation</span></li>
                        <li className="step step-primary">Certificate</li>
                        <li className="step"><span className='opacity-50'>Life Time Access</span></li>
                        <li className="step step-primary">Helpingand Notes</li>
                    </ul>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeCard;



