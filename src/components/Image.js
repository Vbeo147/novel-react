function Image() {
  const setImageFromFile = ({ file, setImageUrl }) => {
    let reader = new FileReader();
    reader.onload = function () {
      setImageUrl({ result: reader.result });
    };
    reader.readAsDataURL(file);
  };
  return setImageFromFile;
}

export default Image;
