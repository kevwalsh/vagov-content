// import fullSchema from 'vets-json-schema/dist/686-schema.json';

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

import { transform } from '../helpers';

// const { } = fullSchema.properties;

// const { } = fullSchema.definitions;

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/api',
  trackingPrefix: 'complaint-tool',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: '686',
  version: 0,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for declaration of status of dependents.',
    noAuth: 'Please sign in again to continue your application for declaration of status of dependents.'
  },
  title: 'GI Bill® School Feedback Tool',
  transformForSubmit: transform,
  defaultDefinitions: {
  },
  chapters: {
    form: {
      title: 'Form',
      pages: {
        page1: {
          path: 'form-page',
          title: 'First Page',
          uiSchema: {
          },
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              }
            }
          }
        }
      }
    }
  }
};

export default formConfig;