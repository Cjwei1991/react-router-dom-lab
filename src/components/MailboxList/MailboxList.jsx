import { Link } from "react-router";


const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-list">
      {mailboxes.map((mailbox) => (
        <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
          <div className="mail-box">Mailbox {mailbox._id}</div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;