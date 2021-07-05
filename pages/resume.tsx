import React from 'react'
import Bar from '../components/Bar';
import { languages,tools } from '../data';
 
const resume = () => {
    return (
        <div className="px-6 py-2">
          {/* //! Education & Experience */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h5 className="my-3 text-2xl font-bold">Education</h5>
              <div className="">
                <h5 className="my-2 text-xl font-bold">
                 Electrical & Electronics Engineering
                </h5>
                <p className="font-semibold">RGPV(2016-2020)</p>
                <p className="my-3">
                 Done Internship in IOT and Robotics from Techsim+,Bhopal via EIsystem.
                 Industrial Training in power distribution from MPKVVCL.
                </p>
              </div>
            </div>
            <div>
              <h5 className="my-3 text-2xl font-bold">Experience</h5>
              <div className="">
                <h5 className="my-2 text-xl font-bold">Software Developer C1</h5>
                <p className="font-semibold">Mindtree Limited</p>
                <p className="my-3">Web Development</p>
              </div>
            </div>
          </div>
    
          {/*Languages & Tools */}
          <div className="grid gap-9 md:grid-cols-2">
            <div>
              <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
              <div className="my-2">
                {languages.map((language, i) => (
                  <Bar value={language} key={i} />
                ))}
              </div>
            </div>
    
            <div>
              <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
              <div className="my-2">
                {tools.map((tool, i) => (
                  <Bar value={tool} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };


export default resume
