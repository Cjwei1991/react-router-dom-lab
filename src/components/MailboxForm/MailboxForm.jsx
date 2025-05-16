import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    _id: 1,
    boxSize: 'Small',
    boxOwner: 'Alex',
};

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Owner: 
                <input
                    type="text"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Size:
                <select
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
            <button type="submit">Create Mailbox</button>
        </form>
    );

};

export default MailboxForm;