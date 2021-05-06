import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://api.covid19api.com/live/country/India"
    );
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>List of covid data</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div class="card p-2">
                  <div class="d-flex align-items-center">
                    <div class="image m-3"></div>
                    <div class="ml-3 w-100">
                      <h4 class="mb-0 mt-0 textLeft">
                        {curElem.Province} covid data
                      </h4>
                      <span className="textLeft">{curElem.Province}</span>
                      <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class="d-flex flex-column">
                          <span class="articles">confirmed</span>
                          <span class="number1">{curElem.Confirmed}</span>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="articles">Death</span>
                          <span class="number1">{curElem.Deaths}</span>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="articles">Recover</span>
                          <span class="number1">{curElem.Recovered}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
