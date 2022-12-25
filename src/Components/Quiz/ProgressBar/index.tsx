interface ProcentType {
  procentage: number;
}

const ProgressBar = ({ procentage }: ProcentType) => {
  return <div className="progressBar"><span style={{width: `${procentage}%`}}>{procentage}%</span></div>;
};

export default ProgressBar;
