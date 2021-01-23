import React from "react";

export default function view() {
  const complaints = [
    ["Complaint_ID", "Description", "Evidence"],
    ["01", "loretfygjkhjkhjkhju", "tftfyghghjxgahsgdxjw"],
    ["02", "fjycFDUKSCUEHUGOIUXBMNMAX BJY", "UYWDYUQWGUICSGAJDG"],
    ["03", "GUAWWGDUIGIUED675W87W0-32", "TYSGDSXIJDUWEDLIKL"]
  ];

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            {complaints[0].map((item, index) => {
              return <th scope="col">{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {complaints.slice(1, complaints.length).map((item, index) => {
            return (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}