import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px 20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#222',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const FileUpload = ({ onDrop, file, message }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input  {...getInputProps()} />
        <div>{message}</div>
        <h3 className="text-success text-lg dark:text-success">{file.name}</h3>
      </div>
    </section>
  );
};

export default FileUpload;
