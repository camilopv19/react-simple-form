import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = ({ users }) => {
    return (
        <Card className={styles.users}>
            <ul>
                {users.map(({name, age, id})=> (
                    <li key={id}>
                        {name} ({ age } years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList;
