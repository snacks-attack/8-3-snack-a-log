import './Home.scss';

import S from '../../images/S.png';
import A from '../../images/A.png';
import N from '../../images/N.png';
import C from '../../images/C.png';
import K from '../../images/K.png';
import L from '../../images/L.png';
import O from '../../images/O.png';
import G from '../../images/G.png';

function Home() {
  return (
    <div className="homepage">
      <div>
        <img className="homepageLetter" src={S} alt="S" />
        <img className="homepageLetter" src={N} alt="N" />
        <img className="homepageLetter" src={A} alt="A" />
        <img className="homepageLetter" src={C} alt="C" />
        <img className="homepageLetter" src={K} alt="K" />
        <p></p>
        <img className="homepageLetter" src={A} alt="A" />
        <p></p>
        <img className="homepageLetter" src={L} alt="L" />
        <img className="homepageLetter" src={O} alt="O" />
        <img className="homepageLetter" src={G} alt="G" />
      </div>
    </div>
  );
}

export default Home;
