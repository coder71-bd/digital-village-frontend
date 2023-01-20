import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor = ({ handleEditorChange, message }) => {
  return (
    <Editor
      apiKey={process.env.REACT_APP_EDITOR_API_KEY}
      initialValue={`<div>${message}</div>`}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image',
          'charmap print preview anchor help',
          'searchreplace visualblocks code',
          'insertdatetime media table paste wordcount',
        ],
        toolbar: `undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help`,
      }}
      onChange={handleEditorChange}
    />
  );
};

export default RichTextEditor;
