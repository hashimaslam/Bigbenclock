import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
const Clock = ({ timeZone }) => {
  const [state, setState] = useState({
    hours: "",
    mins: "",
    secs: "",
  });

  const handleTimezone = (timeZone) => {
    let date = moment();
    if (timeZone === "BST") {
      date = moment().tz("Europe/London");
    } else if (timeZone === "EDT") {
      date = moment().tz("America/New_York");
    } else if (timeZone === "UTC") {
      date = moment.utc();
    }

    let secs = date.get("second");
    let mins = date.get("minute");
    let hours = date.get("hour");

    setState({ hours, mins, secs });
  };

  useEffect(() => {
    const clockInterval = setInterval(handleTimezone, 1000, timeZone);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <>
      <div className="clock_wrapper">
        <div className="num_wrapper num_1">
          <div>1</div>
        </div>
        <div className="num_wrapper num_2">
          <div>2</div>
        </div>
        <div className="num_wrapper num_3">
          <div>3</div>
        </div>
        <div className="num_wrapper num_4">
          <div>4</div>
        </div>
        <div className="num_wrapper num_5">
          <div>5</div>
        </div>
        <div className="num_wrapper num_6">
          <div>6</div>
        </div>
        <div className="num_wrapper num_7">
          <div>7</div>
        </div>
        <div className="num_wrapper num_8">
          <div>8</div>
        </div>

        <div className="num_wrapper num_9">
          <div>9</div>
        </div>
        <div className="num_wrapper num_10">
          <div>10</div>
        </div>
        <div className="num_wrapper num_11">
          <div>11</div>
        </div>
        <div className="num_wrapper num_12">
          <div>12</div>
        </div>
        <div
          className="hand"
          style={{
            transform: `rotate(${state.secs * 6}deg)`,
          }}
        >
          <div className="sec"></div>
        </div>
        <div
          className="hand"
          style={{
            transform: `rotate(${state.mins * 6}deg)`,
          }}
        >
          <div className="min"></div>
        </div>
        <div
          className="hand"
          style={{
            transform: `rotate(${state.hours * 30}deg)`,
          }}
        >
          <div className="hour"></div>
        </div>
      </div>
    </>
  );
};

export default Clock;
