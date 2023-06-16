import React from "react";

const Assets = () => {
  return (
    <div className="mb-8 mt-8" data-aos="fade-down">
      <div className=" text-center my-auto">
        <h1 className="   font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 p-2 hover:bg-gradient-to-l from-blue-500 to-purple-500">
          Confidence in your data and decisions.
        </h1>
        <progress
          className="progress w-40  progress-primary mx-auto mb-4 mt-2 "
          value="100"
          max="100"
        ></progress>
      </div>
      <div className="lg:flex lg:justify-end justify-center mx-auto grid">
        <div className=" lg:-mr-16 p-6 my-auto mx-auto ">
          <img
            className="h-full w-[740px] object-cover "
            src="https://static.ivanti.com/sites/marketing/media/images/products/asset-manager/asset-manager-devices-screenshot.png"
            alt="Album"
          />
        </div>
        <div className=" my-auto ">
          <div className="card mx-auto lg:mx-0 w-4/6  h-56 bg-neutral shadow-xl mb-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300 ">
            <div className="card-body text-white">
              <h2 className="card-title">Make Better Data-Driven Decisions</h2>
              <p className="font-thin text-sm">
                Ensure accurate data collection and insights with automated
                Audits that consistently test.
              </p>
              <div className="card-actions justify-end">
                <p className="font-thin text-sm underline text-warning">
                  learn more
                </p>
              </div>
            </div>
          </div>
          <div className="card mx-auto lg:mx-0 w-4/6  h-56 bg-neutral shadow-xl mb-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300 ">
            <div className="card-body text-white">
              <h2 className="card-title">Protect Your Customer Data</h2>
              <p className="font-thin text-sm">
                Audit your cookies and data collection technologies to know what
                data is being collected, who is collecting it.
              </p>
              <div className="card-actions justify-end">
                <p className="font-thin text-sm underline text-warning">
                  learn more
                </p>
              </div>
            </div>
          </div>
          <div className="card mx-auto lg:mx-0 w-4/6  h-56 bg-neutral shadow-xl mb-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300 ">
            <div className="card-body text-white">
              <h2 className="card-title">Optimize Customer</h2>
              <p className="font-thin text-sm">
                Gather accurate customer insights and provide smooth experiences
                by testing for technology and performance issues.
              </p>
              <div className="card-actions justify-end">
                <p className="font-thin text-sm underline text-warning">
                  learn more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
