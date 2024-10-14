import './App.css';
// import RefRecord from './components/refRecord.tsx';
// import AddRecord from './components/addRecord.tsx';
import React, { useState } from 'react';
// import Counter from './components/counter.tsx'

function App() {
  // const [count, setCount] = useState(0);

  const [studyRecords, setStudyRecord] = useState([
    { title: '勉強の記録1', time: 1 },
    { title: '勉強の記録2', time: 3 },
    { title: '勉強の記録3', time: 5 },
  ]);
  const [studyContent, setStudyContent] = useState();
  const [studyTime, setStudyTime] = useState<number>();
  const [errorMessage, setErrorMessage] = useState('');
  const [sumTime, setsumTime] = useState<number>(0);

  const setStudyRecords = () => {
    if (studyContent === undefined || studyTime === undefined) {
      setErrorMessage('入力内容が空です');
      return;
    }
    const newRecord = { title: studyContent, time: studyTime };
    const newstudyRecords = [...studyRecords, newRecord];
    setStudyRecord(newstudyRecords);
    setErrorMessage('');
    const newSumTime = sumTime + Number(studyTime);
    setsumTime(newSumTime);
  };

  return (
    <>
      <title>学習の記録</title>
      <h3>学習の記録一覧</h3>
      <div>
        <ul>
          {studyRecords.map((record) => {
            return (
              <ul>
                <li>{record.title}</li>
                <li>{record.time}時間</li>
              </ul>
            );
          })}
        </ul>
      </div>
      学習内容
      <input
        type="text"
        onChange={(event) => setStudyContent(event.target.value)}
        value={studyContent}
      ></input>
      <br />
      学習時間
      <input
        type="text"
        pattern="^[0-9]+$"
        onChange={(event) => setStudyTime(event.target.value)}
        value={studyTime}
      ></input>
      <p>
        <br />
        入力されている学習内容：{studyContent}
        <br />
        入力されている時間：{studyTime}時間
      </p>
      <button onClick={setStudyRecords}>登録</button>
      <br />
      {errorMessage}
      <br />
      合計時間：{sumTime}h/1000h */
    </>
  );
}

export default App;
