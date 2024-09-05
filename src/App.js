import logo from './logo.svg';
import './App.css';
import Info from './components/Info/Info';
import Calendar from './components/calendar/Calendar';

function App() {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  const deadline = new Date(2025, 5, 1) - 10195200000
  const date = new Date()
  const day = date.getDate()
  const dayOfWeek =days[date.getDay()]
  const month = date.getMonth()
  return (
    <div className="App">
      <Info deadline={deadline} date={date} day={day} dayOfWeek={dayOfWeek}/>
      <Calendar date={day} month={month}/>
    </div>
  );
}

export default App;
