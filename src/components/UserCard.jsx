import { PropTypes } from "prop-types";

const userData = [
  {
    name: "Sathya",
    city: "Coimbatore",
    desc: "Test Engineer",
    skills: ["Python", "Selinieum", "Java", "Google Tools"],
    online: false,
    profile: "img/img3.jpg",
  },
  {
    name: "Karthick Raja",
    city: "Tirupur",
    desc: "L1 Support Engineer",
    skills: ["Communication", "Java", "C++"],
    online: false,
    profile: "img/img1.jpg",
  },
  {
    name: "Sowndharya",
    city: "Coimbatore",
    desc: "Bpo Sector",
    skills: ["Python", "Selinieum", "Java", "Google Tools"],
    online: true,
    profile: "img/img4.jpg",
  },
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "Online" : "Offline"}
      </span>
      <img src={props.profile} alt="img1" width={100} className="img" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.desc}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          desc={user.desc}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
};

/* <User
        name="Sathya"
        city="Coimbatore"
        desc="Front-End Developer"
        skills={["Html", "Css", "Javascript", "Bootstrap", "jQuery"]}
        online={true}
        profile="img/img2.jpg"
      /> */
User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};
