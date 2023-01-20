import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { uploadFile } from '../utilities/uploadFile';
import FileUpload from './FileUpload';

const TestFileUpload = () => {
  const [file, setFile] = useState({});
  const [previewFile, setPreviewFile] = useState([]);
  const { handleSubmit } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);

    setPreviewFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const handleFileUpload = async () => {
    const imageInfo = await uploadFile(file);
    console.log(imageInfo);
  };

  const image = previewFile.map((f) => (
    <img
      key={f.name}
      src={f.preview}
      className="w-64 rounded-full h-64"
      alt="drag and drop file to preview"
    />
  ));

  useEffect(() => {
    console.log(file);
    previewFile.forEach((f) => URL.revokeObjectURL(f.preview));
  }, [previewFile, file]);

  return (
    <div className="min-h-screen mt-32">
      <form onSubmi t={handleSubmit(handleFileUpload)}>
        <FileUpload
          onDrop={onDrop}
          file={file}
          message="Upload your Profile pic"
        />
      </form>
      {image}
      <button
        className="border-2 bg-purple-600 rounded-3xl p-3"
        onClick={handleFileUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default TestFileUpload;
