import './App.css';
import ContactForm from './components/Contact';
import Nav from './components/Nav';


function App() {

  const [categories] = useState([
    {
      name: 'About' },
    { name: 'portfolio' },
    { name: 'resume' },
    { name: 'contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
    </div>
  );
}

export default App;
