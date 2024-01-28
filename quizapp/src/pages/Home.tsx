import React, { useEffect, useState } from 'react';
import Questions from '../components/Questions';

interface QuizData {
  // Define the structure of your quiz data here
}

interface SelectValue {
  questions: number;
  category: string;
  difficulty: string;
}

export default function Home() {
  const [data, setData] = useState<QuizData[]>([]);
  const [value, setValue] = useState<SelectValue>({ questions: 0, category: "", difficulty: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${value.questions}&category=26&difficulty=${value.difficulty}&type=multiple`);
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [value]);  

  const handleHelper = () => {
    // Do something when the form is submitted, if needed
  };

  return (
    <>
      <div className='w-[80%] mx-auto'>
        <div className='py-12 text-white'>
          <h3 className='text-[80px]'>Quiz app</h3>
        </div>
        <form onSubmit={handleHelper}>
          <div className='grid gap-5 grid-cols-4'>
            <div className='flex flex-col'>
              <label>Number of Questions</label>
              <select className='text-black' onChange={(e) => setValue({ ...value, questions: parseInt(e.target.value) })}>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='25'>25</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label>Enter your category</label>
              <select className='text-black' onChange={(e) => setValue({ ...value, category: encodeURIComponent(e.target.value) })}>
                <option>Science : Mathematics</option>
                <option>Science : Computers</option>
                <option>Geography</option>
                <option>History</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label>Select Difficulty</label>
              <select className='text-black' onChange={(e) => setValue({ ...value, difficulty: e.target.value })}>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <button className='bg-blue-500 p-0' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
