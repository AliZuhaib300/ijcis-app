import React from 'react';
import SecureTemplate from '@/layout/secure-template';
import Router from 'next/router';
import DataTable from '@/components/admin-dashboard/icons/datagrid/datagrid';

const Icons = () => {
  return (
    <SecureTemplate title="JournalPublishing">
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header card-header-primary">
              <h3 className="card-title">Journal Publishing</h3>
              <p className="card-category">
                Here you can upload your journal with proper information
              </p>
            </div>
            <div className="card-body">
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};
export default Icons;
