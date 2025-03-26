import classes from "./Button.module.css";

export default function Button({ children, disabled, isActive, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${classes.button} ${isActive ? classes.active : ''}`}
    >
      {children}
    </button>
  );
}
