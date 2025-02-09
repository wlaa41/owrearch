import React from 'react';

const PricingTable = () => {
    return (
      <div className="container">
      <h2 className="mt-5">Electrician Pricing Categories (Classic View) </h2>
      
      <h3>1. Hourly Rates</h3>
      
      <h5>a. Standard Hour</h5>
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Details</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Pre-Booked Electrician</td>
                  <td>£90/hr</td>
                  <td>
                      <ul>
                          <li>Certified electrical safety compliance</li>
                          <li>Dedicated customer support</li>
                          <li>Complimentary safety check with each visit</li>
                          <li>Comprehensive coverage in Greater London</li>
                          <li>Utilization of high-quality materials</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>Out of Business Hours (6pm-12pm)</td>
                  <td>£130/hr</td>
                  <td>
                      <ul>
                          <li>Immediate emergency response</li>
                          <li>No surcharges for late hours</li>
                          <li>Thorough inspections included</li>
                          <li>24/7 customer support</li>
                          <li>Extensive coverage across Central and West London</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>Central & West London</td>
                  <td>£160/hr</td>
                  <td>
                      <ul>
                          <li>Specialized technicians for high-demand zones</li>
                          <li>Smart home integration and upgrades</li>
                          <li>Proactive issue resolution on-site</li>
                          <li>Unwavering commitment to safety and quality</li>
                      </ul>
                  </td>
              </tr>
          </tbody>
      </table>
  
      <h5>b. Emergency</h5>
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Details</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Emergency Electrician</td>
                  <td>£140/hr</td>
                  <td>
                      <ul>
                          <li>24/7 availability for rapid response</li>
                          <li>Comprehensive London coverage</li>
                          <li>Swift fault diagnosis and resolution</li>
                          <li>Premium materials for urgent repairs</li>
                          <li>Guaranteed compliance and safety</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>Out of Hours Emergency (6pm-12pm)</td>
                  <td>£180/hr</td>
                  <td>
                      <ul>
                          <li>No late-hour surcharges</li>
                          <li>Priority access to emergency technicians</li>
                          <li>Minimized service disruption</li>
                          <li>Effective solutions tailored to critical issues</li>
                          <li>Support for both residential and commercial sites</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>Late Night Emergency (12am-8am)</td>
                  <td>£240/hr</td>
                  <td>
                      <ul>
                          <li>Specialized response team for overnight emergencies</li>
                          <li>Prompt onsite arrival</li>
                          <li>Advanced troubleshooting capabilities</li>
                          <li>Secured and safe repair work at all hours</li>
                          <li>Dedicated to critical infrastructure maintenance</li>
                      </ul>
                  </td>
              </tr>
          </tbody>
      </table>
  
      <h5>c. Weekend</h5>
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Details</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Weekend Standard Rate</td>
                  <td>£180/hr</td>
                  <td>
                      <ul>
                          <li>Comprehensive weekend service</li>
                          <li>No additional charges for daytime work</li>
                          <li>Prompt and efficient service delivery</li>
                          <li>Highly skilled electrical technicians</li>
                          <li>Strict adherence to safety protocols</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>Weekend After-Hours Rate (6pm-12pm)</td>
                  <td>£220/hr</td>
                  <td>
                      <ul>
                          <li>Extended after-hours support</li>
                          <li>Guaranteed fast response times</li>
                          <li>Resolution of complex electrical issues</li>
                          <li>State-of-the-art equipment and techniques</li>
                          <li>Experienced and qualified electrical staff</li>
                      </ul>
                  </td>
              </tr>
          </tbody>
      </table>
  
      <h3>2. Whole Day or Bigger Job</h3>
      
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Details</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Pre-Booked Electrician (Whole Day)</td>
                  <td>£580</td>
                  <td>Cost-effective solution for extensive electrical projects, ensuring comprehensive service throughout the day.</td>
              </tr>
              <tr>
                  <td>Consumer Unit Upgrade (Up to 8 circuits, 2 RCD and SPD)</td>
                  <td>£780</td>
                  <td>Enhances electrical safety and compliance with updated circuit protection, including Residual Current Devices (RCDs) and Surge Protection Devices (SPDs).</td>
              </tr>
              <tr>
                  <td>Full Rewire</td>
                  <td>Starts from £3,500</td>
                  <td>Comprehensive rewiring for older properties, improving electrical safety and functionality with modern standards.</td>
              </tr>
              <tr>
                  <td>Electrical Installations and Fittings</td>
                  <td>£15 per item</td>
                  <td>Covers installation costs for items like white sockets, fused spurs, ceiling roses, etc., providing basic enhancements to your electrical setup.</td>
              </tr>
          </tbody>
      </table>
  
      <h3>3. Testing</h3>
      
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Details</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>PAT Testing (Portable Appliance Testing)</td>
                  <td>£140</td>
                  <td>Essential safety checks for up to 10 electrical appliances, ensuring compliance with health and safety regulations.</td>
              </tr>
              <tr>
                  <td>Electrical Installation Condition Report (EICR)</td>
                  <td>£180</td>
                  <td>Comprehensive assessment for 1 bedroom residences, evaluating up to 6 circuits with detailed reporting on each circuit’s condition.</td>
              </tr>
              <tr>
                  <td>Electrical Installation Condition Report (EICR)</td>
                  <td>£240</td>
                  <td>Detailed electrical safety inspection for 2-3 bedroom properties, ensuring all circuits meet current safety standards.</td>
              </tr>
              <tr>
                  <td>Electrical Installation Condition Report (EICR)</td>
                  <td>£260</td>
                  <td>Extensive evaluation and certification for 4 bedroom homes, focusing on compliance and electrical integrity across all circuits.</td>
              </tr>
          </tbody>
      </table>
  </div>
    );
  };

export default PricingTable;
