import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arotothai, thaitoaro, reset } from "./features/trannum/TrannumSlice";
import { BiCopyAlt, BiTransfer } from "react-icons/bi";

function App() {
  const dispatch = useDispatch();

  const { output } = useSelector((state) => state.num);
  const [stateType, setStateType] = useState(true);
  const [formData, SetformData] = useState({
    TextInput : "",
  });

  const { TextInput } = formData;

  const handleChange = (e) => {
    SetformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateType === true) {
      dispatch(arotothai(formData));
    } else {
      dispatch(thaitoaro(formData));
    }
  };
  const handleCopy1 = (e) => {
    // Get the text field
    var copyText = document.getElementById("input");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  };

  const handleCopy2 = (e) => {
    // Get the text field
    var copyText = document.getElementById("output");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  };

  const handleTranfer = (e) => {
    dispatch(reset());
    SetformData({ TextInput: "" });
    setStateType(!stateType);
  };

  return (
    <div>
      <div className="text-center pt-5 pb-10">
        {stateType ? (
          <h2 className="text-4xl font-semibold">
            Convert Arabic Number to Thai Number
          </h2>
        ) : (
          <h2 className="text-4xl font-semibold">
            Convert Thai Number to Arabic Number
          </h2>
        )}

        <div className="pt-5 pb-0">
          <button
            type="button"
            onClick={handleTranfer}
            className="btn btn-ghost gap-2"
          >
            <BiTransfer /> <div className="text-base">สลับ</div>
          </button>
        </div>
      </div>
      {stateType ? (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full order-1 md:order-1 md:w-1/2">
              <div className="form-control max-w-[90%] items-center mx-auto">
                <label className="label">
                  <span className="label-text font-semibold">
                    Arabic Number
                  </span>
                  <div className="tooltip" data-tip="copy">
                    <button
                      type="button"
                      className="btn btn-circle btn-ghost"
                      onClick={handleCopy1}
                    >
                      <BiCopyAlt size={"20"} />
                    </button>
                  </div>
                </label>
                <textarea
                  className="textarea textarea-bordered h-40 md:h-80 min-w-full"
                  placeholder="input Text"
                  onChange={handleChange}
                  value={TextInput}
                  name="TextInput"
                  id="input"
                ></textarea>
              </div>
            </div>
            <div className="w-full order-3 md:order-2 md:w-1/2">
              <div className="form-control max-w-[90%] items-center mx-auto">
                <label className="label">
                  <span className="label-text font-semibold">Thai Number</span>
                  <div className="tooltip" data-tip="copy">
                    <button
                      type="button"
                      className="btn btn-circle btn-ghost"
                      onClick={handleCopy2}
                    >
                      <BiCopyAlt size={"20"} />
                    </button>
                  </div>
                </label>
                <textarea
                  className="textarea textarea-bordered h-40 md:h-80 min-w-full cursor-text"
                  onChange={handleChange}
                  value={output.data === "" ? "" : output.data}
                  id="output"
                  disabled
                ></textarea>
              </div>
            </div>
            <div className="mx-auto order-2 md:order-3 p-5 md:p-10">
              <button type="submit" className="btn btn-primary btn-wide">
                Convert
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full order-1 md:order-1 md:w-1/2">
              <div className="form-control max-w-[90%] items-center mx-auto">
                <label className="label">
                  <span className="label-text font-semibold">Thai Number</span>
                  <div className="tooltip" data-tip="copy">
                    <button
                      type="button"
                      className="btn btn-circle btn-ghost"
                      onClick={handleCopy1}
                    >
                      <BiCopyAlt size={"20"} />
                    </button>
                  </div>
                </label>
                <textarea
                  className="textarea textarea-bordered h-40 md:h-80 min-w-full"
                  placeholder="input Text"
                  onChange={handleChange}
                  value={TextInput}
                  name="TextInput"
                  id="input"
                ></textarea>
              </div>
            </div>
            <div className="w-full order-3 md:order-2 md:w-1/2">
              <div className="form-control max-w-[90%] items-center mx-auto">
                <label className="label">
                  <span className="label-text font-semibold">
                    Arabic Number
                  </span>
                  <div className="tooltip" data-tip="copy">
                    <button
                      type="button"
                      className="btn btn-circle btn-ghost"
                      onClick={handleCopy2}
                    >
                      <BiCopyAlt size={"20"} />
                    </button>
                  </div>
                </label>
                <textarea
                  className="textarea textarea-bordered h-40 md:h-80 min-w-full cursor-text"
                  onChange={handleChange}
                  value={output.data === "" ? "" : output.data}
                  id="output"
                  disabled
                ></textarea>
              </div>
            </div>
            <div className="mx-auto order-2 md:order-3 p-5 md:p-10">
              <button type="submit" className="btn btn-primary btn-wide">
                Convert
              </button>
            </div>
          </div>
        </form>
      )}
      <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <div>
          <a href="https://arit.rmutp.ac.th/" target="_blank" className="text-md">โดย กลุ่มเทคโนโลยีสารสนเทศ สวส มทร.พระนคร</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
