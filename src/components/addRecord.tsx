import { useState } from 'react';

const AddRecord = (records) => {
  const [studyContent, setStudyContent] = useState();
  const [studyTime, setStudyTime] = useState();
  // const [sumStudyTime, addStudyTime] = useState(0);
  const addRecord = () => {
    const newRecord = { title: studyContent, time: studyContent };
    const newRecords = records.push(newRecord);
  };

  return (
    
    </>
  );
};
export default AddRecord;
