import { useState } from "react"; 
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(true);


  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }
  
  return (
    <section>
      <h3>Обратная связь</h3>
      <form>
        <label htmlFor="name">Ваше имя:</label>
        <input
          type="text"
          className="control"
          id="name"
          value={name}
          style={{
            border: hasError ? '3px solid red' : null , // если имя не пустое, то нет красной границы
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select 
          id="reason" 
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          {`Name: ${name}
          Reason: ${reason}`}
        </pre>

      <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
      </form>
    </section>
  );
}
