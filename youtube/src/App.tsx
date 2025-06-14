import 'bootstrap-icons/font/bootstrap-icons.css';
import PageHeader from './components/PageHeader';
import HeaderCategory from './components/HeaderCategory';
import { categories } from './data/home';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div  style={{ gridTemplateColumns: 'auto 1fr' }} className='grid flex-grow overflow-auto'>
        <div>Sidebar</div>
        <div className='overflow-auto no-scrollbar px-8 pb-4'>
          <div className="sticky top-0 bg-white z-10 pb-4">
            <HeaderCategory
            categories={categories}
            onSelect={setSelectedCategory}
            selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
