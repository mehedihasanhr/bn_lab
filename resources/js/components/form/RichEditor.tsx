import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  BlockQuote,
  Bold,
  ClassicEditor,
  Essentials,
  Italic,
  Link,
  List,
  Paragraph,
} from 'ckeditor5';
import React from 'react';

const RichEditor = React.forwardRef<
  HTMLDivElement,
  {
    value: string;
    onChange: (value: string) => void;
  }
>(({ value, onChange }, ref) => {
  return (
    <div ref={ref} className="ck-editor-container">
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [
            Essentials,
            Bold,
            Italic,
            Paragraph,
            List,
            Link,
            BlockQuote,
          ],
          toolbar: [
            'undo',
            'redo',
            '|',
            'bold',
            'italic',
            'numberedList',
            'bulletedList',
            'link',
            'blockquote',
          ],
        }}
        data={value || 'Write code here..'}
        onChange={(_, editor: ClassicEditor) => {
          onChange(editor.getData());
        }}
      />
    </div>
  );
});

RichEditor.displayName = 'RichEditor';

export default RichEditor;
