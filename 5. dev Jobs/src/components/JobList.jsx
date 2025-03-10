import React from "react";
import { useState } from "react";
import jobs from "../data/data";
import { Link } from "react-router";

export default function JobList() {
  const [jobData, setJobData] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  const searchTermValue = searchTerm.toLowerCase();

  const locationSearchHandler = () => {
    const filteredData = jobs.filter((job) =>
      job.location.toLowerCase().includes(searchByLocation.toLowerCase())
    );
    setJobData(filteredData);
  };

  const filterJobData = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "full-time") {
      const filterdData = jobs.filter((job) => job.contract === "Full Time");
      setJobData(filterdData);
    } else if (filterValue === "part-time") {
      const filterdData = jobs.filter((job) => job.contract === "part-time");
      setJobData(filterdData);
    } else if (filterValue === "freelance") {
      const filterdData = jobs.filter((job) => job.contract === "freelance");
      setJobData(filterdData);
    }
  };

  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <input
                type="text"
                placeholder="Busqueda por titulo, empresa"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="search__panel-02">
              <input
                type="text"
                placeholder="Busqueda ubicacion"
                value={searchByLocation}
                onChange={(e) => setSearchByLocation(e.target.value)}
              />
              <button onClick={locationSearchHandler}>
                Buscar por Ubicacion
              </button>
            </div>
            <div className="search__panel-03">
              <select onChange={filterJobData}>
                <option>Filtrar trabajo por</option>
                <option value="full-time">Full time</option>
                <option value="part-time">Part time</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
          </div>
          <div className="jobs__wrapper">
            {jobData
              ?.filter((job) => {
                if (searchTerm === "") return job;
                if (
                  job.position.toLowerCase().includes(searchTermValue) ||
                  job.company.toLowerCase().includes(searchTermValue)
                )
                  return job;
              })
              .map((item) => (
                <div className="job__item" key={item.id}>
                  <img src={item.logo} alt="" />
                  <div className="job__content">
                    <h6>
                      {item.postedAt} - {item.contract}
                    </h6>
                    <h1>
                      <Link to={`/jobs/${item.position}`}>{item.position}</Link>
                    </h1>
                    <p>{item.company}</p>

                    <div className="location">
                      <p>
                        Location: <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
