import avatar from "../../assets/avatar.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import moment from "moment";

const InputCard = (props) => {
  return (
    <div className="modal">
      <div className="popcrdelmnts">
        <div className="popupcrd">
          <div className="popupheadr">
            <AiOutlineCloseCircle
              className="close"
              onClick={() => props.setModal(false)}
            />
            <img src={avatar} alt="" />
          </div>
          <div className="inputelmnts">
            <div className="inputname">
              <label>
                <h1>First name</h1>
                <input
                  type="text"
                  placeholder={props.user.name.split(" ")[0]}
                />
              </label>
              <label>
                <h1>Last name</h1>
                <input
                  type="text"
                  placeholder={props.user.name.split(" ")[1]}
                />
              </label>
            </div>
            <div className="email">
              <label>
                <h1>Email</h1>
                <input type="email" placeholder={props.user.email} id="email" />
              </label>
            </div>
            <div className="gender">
              <label>
                <h1>Gender</h1>
                <input type="gender" placeholder="Male" id="gender" />
              </label>
            </div>
            <div className="date">
              <label>
                <h1>Date of Registration</h1>
                <input
                  // type="date"
                  //   placeholder={props.user.date}
                  id="date"
                  value={moment(props.user.rawDate).format("yyyy-MM-dd")}
                  onChange={() => {}}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputCard;
