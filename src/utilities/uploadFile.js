export const checkImage = (file) => {
  let err = '';
  if (!file) return (err = 'File does not exist.');

  if (file.size > 1024 * 1024 * 5)
    // 5mb
    err = 'The largest image size is 5mb.';

  if (file.type !== 'image/jpeg' && file.type !== 'image/png')
    err = 'Image format is incorrect.';

  return err;
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  formData.append('upload_preset', 'suxxgmcv');
  formData.append('cloud_name', 'randomone');

  const res = await fetch('https://api.cloudinary.com/v1_1/randomone/upload', {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  const imageInfo = { public_id: data.public_id, url: data.secure_url };

  return imageInfo;
};
