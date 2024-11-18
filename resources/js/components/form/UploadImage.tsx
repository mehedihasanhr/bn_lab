import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const UploadImage = React.forwardRef<
  HTMLDivElement,
  {
    defaultPreview?: string;
    onChange: (file: File) => void;
  }
>(({ defaultPreview = '', onChange }, ref) => {
  const [preview, setPreview] = useState<string>(defaultPreview);

  const onDrop = useCallback(
    (file: File[]) => {
      onChange(file[0]);
      setPreview(URL.createObjectURL(file[0]));
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      ref={ref}
      {...getRootProps({
        className:
          'border p-4 h-32 flex items-center justify-center rounded-lg border-dashed text-sm text-gray-500 hover:border-primary hover:bg-primary/10 overflow-hidden',
      })}
    >
      <input {...getInputProps()} />

      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="h-full w-full object-cover"
        />
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag & drop file here, or click to select files</p>
      )}
    </div>
  );
});

UploadImage.displayName = 'UploadImage';

export default UploadImage;
