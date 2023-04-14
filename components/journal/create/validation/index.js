import * as Yup from 'yup';

export const validateJournal = Yup.object().shape({
  journal_title: Yup.string(),
  journal_initials: Yup.string(),
  journal_abbreviation: Yup.string(),
  publisher: Yup.string(),
  journal_issn: Yup.string(),
  journal_editor: Yup.string(),
});
export const validateContact = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string(),
  phone: Yup.string(),
  affiliation: Yup.string(),
  address: Yup.string(),
});
export const validateSection = Yup.object().shape({
  title: Yup.string(),
});
export const validateUpdateSection = Yup.object().shape({
  section_title: Yup.string(),
  abbreviation: Yup.string(),
  policy: Yup.string(),
  word_count: Yup.string(),
  options: Yup.string(),
  identify: Yup.string(),
});
