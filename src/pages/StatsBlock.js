import React from "react";
import { Container } from "react-bootstrap";
import { FaUsers, FaTrophy, FaBriefcase, FaShieldAlt } from "react-icons/fa";

const statsData = [
  { icon: <FaUsers size={50} />, count: "70+", label: "Satisfied Clients" },
  { icon: <FaTrophy size={50} />, count: "247k+", label: "Mock Tests" },
  {
    icon: <FaBriefcase size={50} />,
    count: "20+",
    label: "Red Team Activities",
  },
  {
    icon: <FaShieldAlt size={50} />,
    count: "2k+",
    label: "Applications Secured",
  },
];

const StatsBlock = () => {
  return (
    <section>
      <div className="container">
        <Container
          fluid
          className="text-center border rounded bg-statusBlock d-flex flex-row flex-wrap justify-content-start"
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="d-flex flex-row col-12 col-md-3 mt-3 mb-3 align-items-center"
            >
              <div style={{ height: "50px" }}>{stat.icon}</div>
              <div className="ps-2">
                <h4 className="text-start pb-0 mb-0">{stat.count}</h4>{" "}
                <p className="m-0 pt-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
};

export default StatsBlock;
