// @flow
import React, { useState } from 'react';
import SecureTemplate from '@/layout/secure-template';
import { Paper } from '@material-ui/core';
import RadioTabs from '@/components/radio-tabs';
import { TabPanel } from '@/components/radio-tabs/radio-tabs';
import {
  Start,
  Upload,
  Confirm,
} from '@/components/submission/create/components';

const SubmissionForm = () => {
  const [value, setValue] = useState(0);
  return (
    <SecureTemplate title="JournalPublishing">
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header card-header-primary">
              <h3 className="card-title">Submit an Article</h3>
              <p className="card-category">
                Here you can submit your journal with proper information
              </p>
            </div>
            <div className="card-body">
              <Paper square>
                <RadioTabs
                  headings={['Start', 'Upload Submission', 'Confirmation']}
                  value={value}
                  setValue={setValue}
                >
                  <TabPanel value={value} index={0}>
                    <Start value={value} setValue={setValue} />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Upload />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Confirm />
                  </TabPanel>
                </RadioTabs>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};
export default SubmissionForm;
