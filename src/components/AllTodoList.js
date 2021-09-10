export default function AllTodoList() {
  const list = [];

  return (
    <section>
      <h1> 할 일 목록</h1>
      <div>
        <input />
        <button>확인</button>
      </div>
      <ul>
        {list.map(item => <li key=>{} </li>)}
      </ul>
    </section>
  );
}
