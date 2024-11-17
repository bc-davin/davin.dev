import Run from '../../assets/run.png';
import Hike from '../../assets/hike.png';
import Explore from '../../assets/explore.png';
import './imageStack.css';
const ImageStack = () => {
  return (
    <div className="stack">
      <img src={Run} alt="running in the snow" />
      <img src={Hike} alt="hiking the river valley" />
      <img src={Explore} alt="hiking the river valley" />
    </div>
  );
};

export default ImageStack;