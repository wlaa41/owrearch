import React from "react";
import { PhoneCall, UserPlus, MessageSquare } from "react-feather";

const JoinOurTeam: React.FC = () => {
    return (
        <section className="container mt-5">
            <h3 className="text-center mb-4">Become a Part of Our Expert Amazing Team</h3>
            <p className="text-center">
                Joining our team is quick and straightforward. We&apos;re looking for skilled researchers eager to tackle new challenges and work on diverse projects. Our three-step process ensures you can start engaging with clients and projects as soon as possible. You’ll receive full support from our experienced team and gain access to a wide network of potential job opportunities.
            </p>
            <div className="row">
                <div className="col-md-4">
                    <div className="card h-100 text-center">
                        <div className="card-body">
                            <PhoneCall size={48} className="mb-3" />
                            <h5 className="card-title">Step 1: Give Us a Call</h5>
                            <p className="card-text">Talk directly with our team to learn about job opportunities and get your questions answered.</p>
                            <a href="tel:+447307565444" className="btn btn-primary" aria-label="Call us to learn about job opportunities">Call Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 text-center">
                        <div className="card-body">
                            <UserPlus size={48} className="mb-3" />
                            <h5 className="card-title">Step 2: Sign Up</h5>
                            <p className="card-text">Complete our straightforward sign-up form to begin your application process.</p>
                            <a href="/contact" className="btn btn-success" aria-label="Sign up to begin your application process">Sign Up Here</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 text-center">
                        <div className="card-body">
                            <MessageSquare size={48} className="mb-3" />
                            <h5 className="card-title">Step 3: Receive Job Leads</h5>
                            <p className="card-text">After approval, get ready to receive job leads and start working with our clients.</p>
                            <a href="/contact" className="btn btn-info" aria-label="Get started with job leads after approval">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JoinOurTeam;
