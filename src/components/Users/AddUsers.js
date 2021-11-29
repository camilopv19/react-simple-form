import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUsers.module.css';

const AddUsers = (props) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUser = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0
            || age.trim().length === 0 ) {
            setError({
                title: 'Empty values',
                message: 'Please enter a valid username and age'
            })
            return;
        }
        
        if (+age < 1) {
            setError({
                title: 'Wrong age',
                message: 'Please enter a positive and REAL age (a number >0)'
            })
            return;
        }

        props.onAddUser({ newName: userName, newAge: age });
        clearForm();
    };

    const clearForm = () => {
        setUserName('');
        setAge('');
    };

    const usernameChanged = (event) => {
        setUserName(event.target.value);
    };
    const ageChanged = (event) => {
        setAge(event.target.value);
    };
    const closeModal = (event) => {
        setError(event.target.value);
    };
    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeModal} />}
        <Card className={styles.input}>
            <form onSubmit={addUser}>
                <label htmlFor="username" data-testid="usernameLbl">Username</label>
                <input id="username" data-testid="username" type="text" onChange={usernameChanged} value={userName}/>
                <label htmlFor="age" data-testid="ageLbl">Age (in Years)</label>
                <input id="age" data-testid="age" type="number" onChange={ageChanged} value={age}/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
        </>
    )
};
export default AddUsers;