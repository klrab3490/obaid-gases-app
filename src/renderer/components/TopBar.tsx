import { useLocation, useNavigate } from 'react-router-dom';
import backIcon from '../../img/chevron-left-solid.svg';
import logo from '../../img/logo-white.png';

function TopBar() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  return (
    <div className="bg-bgOther px-10 py-10 rounded-xl text-textPrimary">
      <div className="flex justify-between gap-20 cursor-pointer">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className={`flex flex-col justify-center items-center ring-2 rounded-xl h-full ring-textPrimary p-2 ${
              pathname !== '/' ? 'flex' : 'hidden'
            }`}
            onClick={() => {
              navigate(-1);
            }}
          >
            <img height={20} width={20} src={backIcon} alt="" />
            <h2 className="font-semibold text-xs">Go back</h2>
          </button>
          <div className="">
            <h2 className="font-extrabold text-2xl">Obaid Gases LLC</h2>
            <p className="font-medium">Al-Rowdha 2, Ajman, UAE</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
