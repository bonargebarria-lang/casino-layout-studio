import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <div className="logo">
          🎰
        </div>

        <div>

          <h1>Casino Insight Studio</h1>

          <span>Casino Layout System v1.0</span>

        </div>

      </div>


      <div className="header-right">

        <div className="casino-name">
          Ocean Casino
        </div>

        <div className="user-name">
          Bonarge Barria
        </div>

      </div>

    </header>
  );
}