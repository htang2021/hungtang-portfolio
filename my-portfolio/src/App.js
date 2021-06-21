import './App.css';
import { useState } from 'react';
import ContactForm from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
  title: {
    flexGrow: 1,
  },
}));

function App() {

  const [categories] = useState([
    { name: 'portfolio' },
    { name: 'resume' },
    { name: 'contact' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const classes = useStyles();
  console.log(currentCategory);
  console.log(contactSelected);

  return (
    <div>
      {/* <div className={classes.root}> */}
      <div>
        {/* <AppBar position="static"> */}
          {/* <Toolbar> */}
            <Typography variant="h6" className={classes.title}>
              <Nav 
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
              />
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          {/* </Toolbar> */}
        {/* </AppBar> */}
      </div>
      <main>
        {!contactSelected ? (
          <>
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
