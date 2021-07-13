
import { Link } from "react-router-dom";


export default function header() {
  
  return (
    <div className="header text-white">
      <div>
          淨・靚
      </div>
      I am header
      <Link to="/">
        <div className="text-white">
            首頁
        </div>
        </Link>
      <Link to="/SignInUp">
        <div className="text-white">
            登入/註冊
        </div>
        </Link>
    </div>
  );
}
