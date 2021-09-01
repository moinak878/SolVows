import "./form.css";
export default function Form() {
  const handleSubmit = () => {
    alert("you're married");
  };
  return (
    <p>
      <form class="form">
        <h2>Get Married</h2>
        <p type="Name:">
          <input placeholder="Write your name here.."></input>
        </p>
        <p type="Name:">
          <input placeholder="Write your partners name here.."></input>
        </p>
        <p type="Hash:">
          <input placeholder="Write your hash name here.."></input>
        </p>
        <p type="Hash:">
          <input placeholder="Write your partners hash name here.."></input>
        </p>
        <p type="Message:">
          <input placeholder="Tell us your vows here.."></input>
        </p>
        <button onClick={handleSubmit}>Get Married</button>
      </form>
    </p>
  );
}
