import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={styles.button}
            type={`${props.type || 'button'}`}
            onClick={props.onClick}
            data-testid="btnAdd"
        >{props.children}</button>
    )
}

export default Button;