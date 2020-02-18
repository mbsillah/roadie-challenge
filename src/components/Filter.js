import React from "react";

const Filter = props => {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "55px" }}>
              <a
                href="#"
                className="filter stars"
                onClick={e => props.filterReviews(e, "5")}
              >
                <span>5 stars</span>
              </a>
            </td>
            <td>
              <div className="meter">
                <div
                  className="meterFilling"
                  style={{ width: `${props.percentages["5"]}%` }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "55px" }}>
              <a
                href="#"
                className="filter stars"
                onClick={e => props.filterReviews(e, "4")}
              >
                <span>4 stars</span>
              </a>
            </td>
            <td>
              <div className="meter">
                <div
                  className="meterFilling"
                  style={{ width: `${props.percentages["4"]}%` }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "55px" }}>
              <a
                href="#"
                className="filter stars"
                onClick={e => props.filterReviews(e, "3")}
              >
                <span>3 stars</span>
              </a>
            </td>
            <td>
              <div className="meter">
                <div
                  className="meterFilling"
                  style={{ width: `${props.percentages["3"]}%` }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "55px" }}>
              <a
                href="#"
                className="filter stars"
                onClick={e => props.filterReviews(e, "2")}
              >
                <span>2 stars</span>
              </a>
            </td>
            <td>
              <div className="meter">
                <div
                  className="meterFilling"
                  style={{ width: `${props.percentages["2"]}%` }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "55px" }}>
              <a
                href="#"
                className="filter stars"
                onClick={e => props.filterReviews(e, "1")}
              >
                <span>1 stars</span>
              </a>
            </td>
            <td>
              <div className="meter">
                <div
                  className="meterFilling"
                  style={{ width: `${props.percentages["1"]}%` }}
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
