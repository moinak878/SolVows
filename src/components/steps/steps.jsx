import "./steps.css";
export default function Steps() {
  return (
    <div className="steps">
      <h1 style={{ textAlign: "center", padding: "50px" }}>
        How to get Married
      </h1>
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>Step 1</h2>

            <p>Enter the couples name</p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h2>Step 2</h2>

            <p>Write your own vows or choose already existing vows</p>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>Step 3</h2>

            <p>
              Decide if you really want to get married by seeing their already
              existing certificates
            </p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h2>Step 4</h2>

            <p>Congratulations! You are married now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
