import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onFileUpload(acceptedFiles[0]);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-blue-500 p-6 text-center cursor-pointer rounded-lg hover:bg-blue-50 transition-colors duration-300">
      <input {...getInputProps()} />
      <p className="text-blue-500">Drag & drop a file here, or click to select a file</p>
    </div>
  );
};

export default FileUpload;
