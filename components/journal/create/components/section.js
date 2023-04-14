import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FormDialog } from '@/components/modals';
import { Message } from '@/components/alert/message';
import { Formik } from 'formik';
import {
  validateSection,
  validateUpdateSection,
} from '@/components/journal/create/validation';
import {
  GET_SECTION_BY_ID,
  GET_SECTION_BY_JOURNAL_ID,
  SAVE_SECTION,
  UPDATE_SECTION,
} from '@/components/journal/create/queries';
import { useMutation, useQuery } from 'react-query';
import { getLocalStorageValues } from '@/constants/local-storage';
import _get from 'lodash/get';
import { EditSectionForm, NewSectionForm } from './index';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Section = () => {
  const classes = useStyles();
  const [modalEdit, setModalEdit] = useState(false);
  const toggleModalEdit = () => setModalEdit(!modalEdit);
  const [modalNewSec, setModalNewSec] = useState(false);
  const toggleModalNewSec = () => setModalNewSec(!modalNewSec);
  const [secEditId, setSecEditId] = useState('');
  const { journal_id } = getLocalStorageValues();
  const { data, isloading, refetch } = useQuery(
    ['GET_SECTION_BY_JOURNAL_ID', { journal_id }],
    GET_SECTION_BY_JOURNAL_ID,
  );
  console.log('data', data);
  const saveSection = useMutation(SAVE_SECTION);
  console.log('secEditId', secEditId);
  const updateSection = useMutation(UPDATE_SECTION);
  const { data: sectionData, refetch: sectionRefetch } = useQuery(
    ['SECTION_BY_ID'],
    GET_SECTION_BY_ID,
  );
  console.log('sectionData', sectionData);
  return (
    <div className={classes.root}>
      <Button
        onClick={toggleModalNewSec}
        variant="contained"
        color="secondary"
        className="mb-3"
      >
        Create new section
      </Button>
      {_get(data, 'data', []).map(sec => (
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{sec.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button
              onClick={() => {
                toggleModalEdit();
                setSecEditId(sec._id);
              }}
            >
              Edit
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}

      <Formik
        enableReinitialize={true}
        initialValues={{
          section_title: _get(data, 'data.section_title', ''),
          abbreviation: _get(data, 'data.abbreviation', ''),
          policy: _get(data, 'data.policy', ''),
          word_count: _get(data, 'data.word_count', ''),
          options: _get(data, 'data.options', ''),
          identify: _get(data, 'data.identify', ''),
          section_editors: _get(data, 'data.section_editors', ''),
        }}
        validationSchema={validateUpdateSection}
        onSubmit={async (values, actions) => {
          await updateSection.mutate(
            {
              data: values,
              section_id: secEditId,
            },
            {
              onSuccess: async res => {
                await sectionRefetch();
                Message.success();
                actions.resetForm();
              },
              onError: e => {
                actions.setSubmitting(false);
                Message.error(e);
              },
            },
          );
        }}
      >
        {formikProps => (
          <FormDialog
            open={modalEdit}
            toggleModal={toggleModalEdit}
            handleConfirm={formikProps.handleSubmit}
            title="Edit"
          >
            <EditSectionForm {...formikProps} />
          </FormDialog>
        )}
      </Formik>
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: '',
          journal_id,
        }}
        validationSchema={validateSection}
        onSubmit={async (values, actions) => {
          await saveSection.mutate(values, {
            onSuccess: async res => {
              await refetch();
              Message.success();
              actions.resetForm();
            },
            onError: e => {
              actions.setSubmitting(false);
              Message.error(e);
            },
          });
        }}
      >
        {formikProps => (
          <FormDialog
            open={modalNewSec}
            toggleModal={toggleModalNewSec}
            handleConfirm={formikProps.handleSubmit}
            title="Create New Section"
          >
            <NewSectionForm {...formikProps} />
          </FormDialog>
        )}
      </Formik>
    </div>
  );
};

export { Section };
