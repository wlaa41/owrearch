import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const phoneNumber = "+447307565444";


const Features = () => {
  return (
    <>
      <div className="boxes-are">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true">
              <div className="single-box">
                <div className="icon">
                  <Icon.Cpu />
                </div>
                <h3>
                  <Link href="/services/ai-research-development/">
                    AI & Machine Learning Research
                  </Link>
                </h3>
                <p>
                  We specialize in AI and machine learning research, focusing on cutting-edge innovations such as autonomous systems and advanced deep learning models. Our work in AI applications is reshaping industries and driving new technological frontiers.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-once="true">
              <div className="single-box bg-f78acb">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link href="/services/devops-automation/">
                    DevOps & Cloud Solutions
                  </Link>
                </h3>
                <p>
                  Our expertise in DevOps streamlines CI/CD pipelines, infrastructure as code (IaC), and cloud deployments. We optimize workflows using Docker, Kubernetes, and Terraform, ensuring efficient, scalable, and secure applications.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true">
              <div className="single-box bg-c679e3">
                <div className="icon">
                  <Icon.Codesandbox />
                </div>
                <h3>
                  <Link href="/services/robotics-simulation/">
                    Robotics & Simulation
                  </Link>
                </h3>
                <p>
                  We develop high-fidelity robotic simulations using Gazebo and ROS. Our work bridges real-world applications with digital twins, improving robot performance, SLAM mapping, and autonomous navigation capabilities.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-once="true">
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.Database />
                </div>
                <h3>
                  <Link href="/services/data-science-analytics/">
                    Data Science & Analytics
                  </Link>
                </h3>
                <p>
                  Leveraging AI-driven analytics, we extract insights from large datasets, optimizing decision-making processes in various industries. Our solutions include predictive modeling, image processing, and AI-powered automation.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" data-aos-once="true">
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.Activity />
                </div>
                <h3>
                  <Link href="/services/system-dynamics/">
                    System Dynamics & Control
                  </Link>
                </h3>
                <p>
                  Our research delves into system dynamics, focusing on control theory, stability analysis, and real-world applications in aerospace and autonomous vehicles. We use MATLAB and Python to model and optimize system behaviors.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600" data-aos-duration="500" data-aos-once="true">
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.Code />
                </div>
                <h3>
                  <Link href="/services/embedded-systems/">
                    Embedded Systems & AI Integration
                  </Link>
                </h3>
                <p>
                  We develop embedded AI solutions that optimize performance and energy efficiency in industrial applications. Our work includes designing intelligent automation systems and integrating deep learning in edge devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
