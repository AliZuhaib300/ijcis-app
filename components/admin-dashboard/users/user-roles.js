import React from 'react';
import SecureTemplate from '../../layouts/secure-template';

const UserRoles = () => {
  return (
    <div className="">
      <SecureTemplate title="Users&Roles">
        <div className="content">
          <div className="container-fluid">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-warning">
                  <h4 className="card-title">Employees Stats</h4>
                  <p className="card-category">
                    New employees on 15th September, 2016
                  </p>
                </div>
                <div className="card-body table-responsive">
                  <table className="table table-hover">
                    <thead className="text-warning">
                      <th>ID</th>
                      <th>Name</th>
                      <th>Salary</th>
                      <th>Country</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>$36,738</td>
                        <td>Niger</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecureTemplate>
    </div>
  );
};
export default UserRoles;
