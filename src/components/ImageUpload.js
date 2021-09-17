import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import './ImageUpload.css';

const ImageThumb = ({ image }) => {
  return (
    <img
      className='upload-image'
      src={URL.createObjectURL(image)}
      alt={image.name}
    />
  );
};

function ImageUpload() {
  const [file, setFile] = useState('');

  function handleUpload(e) {
    e.target.files.length > 0 && setFile(e.target.files[0]);
  }

  return (
    <div>
      <div className='button-container'>
        <Button
          className='upload-button'
          variant='contained'
          color='primary'
          component='label'
        >
          {file === '' ? 'Upload Image' : 'Upload another image'}
          <input hidden accept='image/' type='file' onChange={handleUpload} />
        </Button>
        <Button
          disabled={file === '' ? true : false}
          variant='contained'
          color='secondary'
          onClick={() => setFile('')}
        >
          Remove Image
        </Button>
      </div>

      <Typography variant='h6' align='center'>
        Image Preview
      </Typography>
      <hr style={{ width: '70%' }} />

      {file && <ImageThumb image={file} />}
    </div>
  );
}

export default ImageUpload;
