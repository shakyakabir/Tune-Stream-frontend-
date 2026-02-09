import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const AristInitailPage = ({ data, setData, next }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="artist-auth-card">
      <form className="artist-auth-form">
        <label className="artist-auth-label">Fullname</label>
        <Input
          type="text"
          name="fullName"
          value={data.fullName}
          onChange={handleChange}
          placeholder="Enter Your name"
        />
        <label className="artist-auth-label">email</label>
        <Input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter Your email"
        />

        <label className="artist-auth-label">contact</label>
        <Input
          type="number"
          name="contact"
          value={data.contact}
          onChange={handleChange}
          placeholder="Enter Your email"
        />

        <label className="login-label" htmlFor="">
          Password
        </label>
        <Input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter Your password"
        />
        <>
          <Button type={"button"} text="next" onClick={next} />
        </>
      </form>
    </div>
  );
};

export default AristInitailPage;
