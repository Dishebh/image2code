import { Button } from '@material-ui/core';
import { useState } from 'react';
import './ImageUpload.css';

const ImageThumb = ({ image }) => {
  return (
    <img className='image' src={URL.createObjectURL(image)} alt={image.name} />
  );
};

function ImageUpload() {
  const [file, setFile] = useState('');

  function handleUpload(e) {
    e.target.files.length > 0 && setFile(e.target.files[0]);
  }

  return (
    <div>
      <Button
        className='upload-button'
        variant='contained'
        color='primary'
        component='label'
      >
        Upload File
        <input hidden accept='image/' type='file' onChange={handleUpload} />
      </Button>

      {file && <ImageThumb image={file} />}
    </div>
  );
}

export default ImageUpload;
