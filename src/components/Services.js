import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1>Our Services</h1>
      <p>
        We provide efficient and reliable logistics services tailored to meet
        your specific needs.
      </p>
      <div className="services-list">
        <ul>
          <li>
            Loading and Unloading
            <div className="tooltip">
              Providing workers to load and unload goods from trucks or shipping
              containers.
            </div>
          </li>
          <li>
            Palletizing
            <div className="tooltip">
              Organizing goods on pallets for storage or transportation.
            </div>
          </li>
          <li>
            Sorting and Segregation
            <div className="tooltip">
              Sorting items by category, size, destination, or other criteria.
            </div>
          </li>
          <li>
            Forklift services
            <div className="tooltip">
              Providing certified forklift operators who are trained in the safe
              operation of forklifts.
            </div>
          </li>
        </ul>
        <ul>
          <li>
            Shrink-Wrapping
            <div className="tooltip">
              Securing goods on pallets with shrink-wrap to stabilize and
              protect them during transit.
            </div>
          </li>
          <li>
            Quality Control
            <div className="tooltip">
              Inspecting goods for damage or discrepancies during the loading or
              unloading process.
            </div>
          </li>
          <li>
            Inventory Management
            <div className="tooltip">
              Assisting with inventory counts and tracking during unloading or
              loading operations.
            </div>
          </li>
          <li>
            Repacking
            <div className="tooltip">
              Repacking items that have been damaged or need to be reconfigured
              for shipment.
            </div>
          </li>
        </ul>
        <ul>
          <li>
            Labeling
            <div className="tooltip">
              Applying labels to goods for identification, tracking, or
              compliance purposes.
            </div>
          </li>
          <li>
            Cross-Docking
            <div className="tooltip">
              Transferring goods directly from incoming to outgoing trucks with
              minimal storage time.
            </div>
          </li>
          <li>
            Reworking Loads
            <div className="tooltip">
              Adjusting or reconfiguring loads to optimize space or meet
              specific requirements.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
