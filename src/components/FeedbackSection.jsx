import { useState } from "react"; 
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleReasonChange(event) {
    setReason(event.target.value);
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
      </form>

      <Button>Отправить</Button>
    </section>
  );
}
