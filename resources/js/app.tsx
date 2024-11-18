import 'ckeditor5/ckeditor5.css';
import '../css/app.css';
import './bootstrap';

import { CKEditorContext } from '@ckeditor/ckeditor5-react';
import { createInertiaApp } from '@inertiajs/react';
import { Context, ContextWatchdog } from 'ckeditor5';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <CKEditorContext
        context={Context}
        contextWatchdog={ContextWatchdog}
        onChangeInitializedEditors={(editors) => {
          console.info(editors.editor1?.instance);
        }}
      >
        <App {...props} />
      </CKEditorContext>,
    );
  },
  progress: {
    color: '#4B5563',
  },
});
